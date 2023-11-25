import React, { useState, SyntheticEvent } from 'react'
import Image from 'next/image'
import router from 'next/router'

export default function Login() {


  const  [email, setEmail ] = useState("")

  
  const onSubmitForm = async (e: SyntheticEvent)  => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/user/requestPasswordReset", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email 
      })
    })

    return res.json();
  }

  return (
    <div>



      
        <form onSubmit={onSubmitForm}>
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}