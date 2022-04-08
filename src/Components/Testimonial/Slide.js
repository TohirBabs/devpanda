import React from 'react'
import prof from './professor.jpg'
import TestimonialApi from './TestimonialApi'

const Slide = ({ id, image, design, name, officer, post, date, desc, valIndex, index}) => {
    let position = "nextSlide"
    if (valIndex === index){
        position = 'activeSlide'
    }

    if (valIndex === index - 1 || (index === 0 && valIndex === TestimonialApi.length - 1)){
        position = 'lastSlide'
    } 


  return (
    <>
        <article className={`d_flex ${position}`} key={id}>
        {/* <article className='slide box d_flex'> */}
            <div className='left box_shadow'>
                <div className='img'>
                    <img src={prof} alt='' />
                </div>

                <div className='details mtop'>
                    <span>{design}</span>
                    <h2>{name}</h2>
                    <label>officer</label>
                </div>
            </div>

            <div className='right'>
                <div className='icon'>
                <div className='quote'>
                    <i className='fas fa-quote-right'></i>
                </div>
                </div>

                <div className='content box_shadow mtop'>
                    <h1>{post}</h1>
                    <h3>{date}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </article>
    
    </>
  )
}

export default Slide