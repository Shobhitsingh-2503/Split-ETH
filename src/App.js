import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./fiirebase.js";
import Bar from "./components/Navbar/Navbar.jsx";
import AddGroup from "./components/addGroup/AddGroup.jsx";
import Groups from "./components/Groups/Groups.jsx";
import Foot from "./components/Footer/Footer.jsx";
import Oops from "./components/Oops/Oops.jsx";
// import oops from "./components/oops.png";
import "./App.css";
const { ethers } = require("ethers");

function App() {
  //connecting to firebase cloud storage

  const [list, setList] = useState([]);
  const splitRef = collection(db, "splits");
  useEffect(() => {
    const getSplits = async () => {
      const data = await getDocs(splitRef);
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getSplits();
  }, []);

  //connecting to metamask
  var [currentUser, setuser] = useState("");
  var cnt = 0;

  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    signer
      .getAddress()
      .then((result) => {
        setuser(result);
      })
      .catch(console.error);
  }

  return (
    <div>
      <Bar />
      <AddGroup />
      <div align="center">
        <div id="middleMan">YOUR SPLITS</div>
      </div>
      <div id="containers">
        {list.map((item, index) => {
          if (
            currentUser === item.owner ||
            currentUser === item.Firstadd ||
            item.Secondadd === currentUser
          ) {
            cnt = cnt + 1;
            return <Groups key={index} list={item} />;
          }
        })}
      </div>
      <Oops num={cnt} />
      <Foot />
    </div>
  );
}

export default App;

// Navbar ✅
// add a split functionality ✅
// selective group displaying ✅ if NONE show oops.png ✅ // OOPS
// Footer ✅
