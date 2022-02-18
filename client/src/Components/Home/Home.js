import React from 'react'
import './Home.css'
import Slideshow from '../Slideshow/Slideshow'
import {SlideData} from '../Slideshow/SlideData'



export default function Home({ user }) {
  
  return (
    <>
      <h3 className="welcome">Hello {user ? user.first_name : null}! Welcome to Pickadoc</h3>
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
    <div className="div6">Trust us to find the doctor who's right for you.</div>

    </>
  )
}