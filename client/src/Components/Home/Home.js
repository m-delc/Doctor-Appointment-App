import React from 'react'
import './Home.css'
import Slideshow from '../Slideshow/Slideshow'
import {SlideData} from '../Slideshow/SlideData'



export default function Home({ user }) {
  console.log(user)
  
  return (
    <>
      <h3>Hello {user ? user.first_name : null}! Welcome to Pickadoc</h3>
    <br />
    <br />
    <br />


      <div>
        <Slideshow slides={SlideData} />
      </div>
    
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="div6">Find the doctor who's right for you, when and where you need it. The best doctors in your area are included here.</div>

    </>
  )
}