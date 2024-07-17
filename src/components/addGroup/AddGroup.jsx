import React, { useState } from 'react'
import './add.css'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../fiirebase'
const { ethers } = require('ethers')

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
// console.log(signer)
var currentOwner

signer
  .getAddress()
  .then((result) => {
    currentOwner = result
    console.log(result)
  })
  .catch(console.error)

const AddGroup = () => {
  const [name, setName] = useState('')
  const [add1, setAdd1] = useState('')
  const [add2, setAdd2] = useState('')
  const [eth, seteth] = useState(0)
  const splitRef = collection(db, 'splits')

  async function feature() {
    const grp = {
      GroupName: name,
      Firstadd: add1,
      Secondadd: add2,
      amount: eth,
      //   id, //account here
      owner: currentOwner,
    }
    if (name !== '' && add1 !== '' && add2 !== '' && eth !== '') {
      await addDoc(splitRef, grp)
    } else {
      alert('Filling all the fields is Mandatory, please try again !')
    }
  }
  // console.log(list)
  return (
    <div className="justAfterNav">
      <div>
        <input
          type="text"
          placeholder="Add Group Name"
          id="splitName"
          required
          autoComplete="off"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Address of user 1"
          id="address1"
          required
          autoComplete="off"
          onChange={(e) => {
            setAdd1(e.target.value)
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Address of user 2"
          id="address2"
          required
          autoComplete="off"
          onChange={(e) => {
            setAdd2(e.target.value)
          }}
        />
      </div>
      <button id="addMembersBtn">➕</button>
      <span> Add User</span>
      <div>
        <input
          type="number"
          placeholder="Enter Gwei"
          id="amount"
          autoComplete="off"
          onChange={(e) => {
            seteth(e.target.value)
          }}
        />
      </div>
      <button id="create" onClick={feature}>
        Create Group
      </button>
    </div>
  )
}

export default AddGroup

// Form to get data ✅
// data to firebase ✅
