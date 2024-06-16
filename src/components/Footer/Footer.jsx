import React from 'react'
import split from '../SplitEth.png'
import '../Footer/Footer.css'

const Foot = () => {
  return (
    <>
      <div id="top">
        <div id="one">
          <img src={split} width="100px" id="logos" />
          <h4>ABOUT</h4>
          <p>
            This Decentralised application is basically a Splitwise sort of
            application. Which gives users the freedom of creating splits and
            paying splits. This decentralised app utilizes the Ethereum
            blockchain network for the transactions. It connects your wallet and
            able you to add individuals and create the splits. Only the owner
            and and the member of the split can view the split and pay to it. It
            gives live status of the amount left to recieve and % of split
            member paid.
          </p>
        </div>

        <div id="two">
          <a href="https://x.com/Shobhit00384802">
            <img
              src="https://ik.imagekit.io/tttjlp0fj/x.png?updatedAt=1718366803678"
              width="45px"
            />
          </a>
          <a href="https://shobhitsingh.vercel.app/">
            <img
              src="https://ik.imagekit.io/tttjlp0fj/s.png?updatedAt=1717593685545"
              width="40px"
            />
          </a>
          <a href="https://www.linkedin.com/in/shobhit-singh-632045195/">
            <img
              src="https://ik.imagekit.io/tttjlp0fj/in.png?updatedAt=1717593271166"
              width="40px"
            />
          </a>
          <a href="https://github.com/Shobhitsingh-2503">
            <img
              src="https://ik.imagekit.io/tttjlp0fj/github.png?updatedAt=1718369153958"
              width="50px"
            />
          </a>
        </div>
      </div>
      <div align="center" id="bottom">
        &#169; copyright Shobhit Singh
      </div>
    </>
  )
}

export default Foot
