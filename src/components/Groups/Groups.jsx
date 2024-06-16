import React, { useEffect, useState } from 'react'
import '../Groups/Groups.css'
// import oops from '../oops.png'
const { ethers } = require('ethers')

// const list = {
//   groupName: 'Goa',
//   amount: 45,
//   add1: 'adarsh',
//   add2: 'shailesh',
//   id: 'shobhit', //split owner address
// }
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
// console.log(signer)

var currentuser

signer
  .getAddress()
  .then((result) => {
    currentuser = result
  })
  .catch(console.error)

//main function

const Groups = ({ list }) => {
  var [cnt, setCnt] = useState(1)
  var [totalAmount, setTotalmount] = useState(
    (list.amount - (list.amount / 3) * cnt).toFixed(5),
  )
  const [payOrNot, setpayOrNot] = useState('PAY')
  var [stat, setStat] = useState(false)

  const x = (list.amount / 3).toFixed(5)
  const amount = x.toString()

  function add() {
    cnt++
  }

  async function pay() {
    await provider
      .send('eth_sendTransaction', [
        {
          from: currentuser,
          to: list.owner,
          value: ethers.utils.parseUnits(amount, 'gwei').toString(),
        },
      ])
      .then((result) => {
        add()
        setCnt(cnt)
        // contract.happen()
        setpayOrNot('✅ PAID')
        setTotalmount((list.amount - (list.amount / 3) * cnt).toFixed(5))
      })
  }

  if (currentuser !== list.owner) {
    // current account match to list.id ?
    return (
      <div id="container">
        <div className="card" align="center">
          <h4 className="who">{list.owner}</h4> {/*who made the split*/}
          <h3 className="head">Requested for "{list.GroupName}" </h3>
          <h2 className="amnt">{x} Gwei</h2>
          <h4>{cnt - 1}/2 paid</h4>
          <button
            className="payBtn"
            onClick={async () => {
              if (!stat) {
                pay()
                setStat(true)
              } else {
                alert('You have already Paid your share !')
              }
            }}
          >
            {payOrNot}
          </button>
        </div>
      </div>
    )
  }
  {
    return (
      <div id="container">
        <div className="card" align="center">
          <h4 className="who">{list.owner}</h4>
          <h3 className="head">Requested for "{list.GroupName}"</h3>
          <h2 className="amnt"> {totalAmount} Gwei</h2>
          <h4>{cnt - 1}/2 paid</h4>
        </div>
      </div>
    )
  }
}

export default Groups

// retrieve data from firebase ✅
// able to pay and recieve ✅
// maintain payment data at individual level ❌ (YET TO BE ACHIEVED)
