import React from 'react'
import './Home.css'

export default function Home({ user }) {
  
  return (
    <>
      <h3>Hello {user ? user.first_name : null}! Welcome to Pickadocm</h3>
    <div className="div6">Find the doctor who's right for you, when and where you need it. The best doctors in your area are included here.</div>
    </>
  )
}