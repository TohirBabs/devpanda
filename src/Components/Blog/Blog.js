import React, { useState } from 'react'
import "./Blog.css"
import Card from "./Card"
import Blog_data from "./Blog_data"
import blog1 from "./images/blog1.jpg"

const Blog = () => {
    
  return (
    <>
        <section className='Blog top' id='blog'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4 className='uppercase'>visit my Blog and give your feedback</h4>
                    <h1>My Blog</h1>
                </div>

                <div className='content grid'>
                    {Blog_data.map((val, index) =>{
                        return <Card key={index} image={val.image} 
                        title_one={val.title_one}
                        desc_one={val.desc_one} 
                        title_two={val.title_two}
                        desc_two={val.desc_two} 
                        title_three={val.title_three}
                        desc_three={val.desc_three} 
                        date={val.date} /> 
                        })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog