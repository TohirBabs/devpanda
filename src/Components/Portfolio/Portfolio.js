import React, { useState } from 'react'
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

import "./music-player.png"

const Portfolio = () => {
  return (
    <>
        <section className='portfolio top' id='portfolio'>
            <div className='container'>
                <div className='heading'>
                    <h4 className='uppercase'>Here's what I,ve been up to</h4>
                    <h1>My Portfolio</h1>
                </div>

                <div className='content grid'>
                    {Portfolio_data.map((val, index) =>{
                        return <Card key={index} image={val.image} title={val.title} 
                        category={val.category}
                        about={val.about}
                        link={val.link}
                        totalLikes={val.totalLikes} /> 
                        })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio