import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../SplitEth.png'
const { ethers } = require('ethers')

var provider
if (window.ethereum) {
  provider = new ethers.providers.Web3Provider(window.ethereum)
} else {
  alert('INSTALL METAMASK')
}

const Bar = () => {
  const [isConnected, setIsConnected] = useState('Connect to Metamask')
  const connect = () => {
    if (window.ethereum) {
      provider.send('eth_requestAccounts', [])
    } else {
      alert('INSTALL METAMASK')
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      signer
        .getAddress()
        .then((result) => {
          setIsConnected(result)
        })
        .catch(console.error)
    }
  }, [])

  return (
    <div className="Nav">
      <span className="logo">
        <img src={logo} width="100px" id="logoImg" />
      </span>
      <button className="connectBtn" onClick={connect}>
        {isConnected}
      </button>
    </div>
  )
}

export default Bar

// LOGO ✅
// CONNECT WALLET ✅
// ADDRESS on display ✅
