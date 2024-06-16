import React from 'react'
import oops from '../oops.png'
import '../Oops/Oops.css'

const Oops = ({ num }) => {
  if (num > 0) return <div></div>
  else {
    return (
      <div align="center" id="oops">
        <img src={oops} width="400px" />
        <p>OOPS ! YOU HAVE NO SPLITS YET</p>
      </div>
    )
  }
}

export default Oops

// DISPLAY WHEN CONDITIONS ARE MET ✅
