import React, {useState, useEffect} from 'react'
import './Testimonial.css'
import Slide from './Slide'
import TestimonialApi from './TestimonialApi'

const Testimonial = () => {

  const [data, setData] = useState(TestimonialApi)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if(index < 0){
      setIndex(lastIndex)
    }
    if (index > lastIndex){
      setIndex(0)
    }
  },[index, data])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
  
    return () => clearInterval(slider) 
  }, [index])
  
  

  return (
    <>
    
    <section className='Testimonial' id='clients'>
        <div className='container'>
            <div className='heading text-center'>
                <h4 className='uppercase'>what clients say</h4>
                <h1>Testimonial</h1>
            </div>

            <div className='slide'>
                {TestimonialApi.map((val, valIndex) =>{
                  return <Slide key={val.id} {...val} valIndex={valIndex} index={index} />
                })}

                <div className='slide_button'>
                  <button className='btn_shadow prev_btn' onClick={() => setIndex(index - 1)}>
                    <i className='fas fa-arrow-left'></i>
                  </button>
                  <button className='btn_shadow next_btn' onClick={() => setIndex(index + 1)}>
                    <i className='fas fa-arrow-right'></i>
                  </button>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Testimonial