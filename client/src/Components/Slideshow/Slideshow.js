import React, {useState} from "react";
import {SlideData} from './SlideData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './Slideshow.css'

const Slideshow = ({ slides }) => {

  const [currentImg, setCurrentImg] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
  }

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }


  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SlideData.map((pic, index) => {
        return (
          <div 
            className={index === currentImg ? "slide active" : "slide"}
            key={index}
          >
            {index === currentImg && (
              <img src={pic.image} alt="medical image" className="image"/> 
            )}
            
          </div>
        )
        
      })}
    </section>
  )
}

export default Slideshow;
