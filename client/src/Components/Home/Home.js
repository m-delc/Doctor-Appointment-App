import React from 'react'
import './Home.css'
import Slideshow from './Slideshow/Slideshow'
export default function Home({ user }) {
  console.log(user)
  
  return (
    <>
      <h3>Hello {user ? user.first_name : null}! Welcome to Pickadoc</h3>
      <Slideshow />
    <div className="div6">Find the doctor who's right for you, when and where you need it. The best doctors in your area are included here.</div>
    </>
  )
}