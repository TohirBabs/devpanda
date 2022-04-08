import React from 'react'
import Card from './Card'
import "./Resume.css"
import ResumeApi from './ResumeApi'

const Resume = () => {
  return (
    <>
    
        <section className='Resume' id='resume'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h4 className='uppercase'>years  of experience</h4>
                    <h1>My Resume</h1>
                </div>

                <div className='content-section mtop d_flex'>
                    <div className='left'>
                        <div className='heading'>
                            <h2>Education</h2>
                        </div>

                        <div className='content'>
                            {ResumeApi.map((val, index) =>{
                                if(val.category === 'education'){
                                    return <Card key={index} title={val.title} 
                                        year={val.year}
                                        rate={val.rate}
                                        desc={val.desc} />
                                }
                             
                            })}
                        </div>
                    </div>

                    <div className='left'>
                        <div className='heading'>
                            <h2>Experience</h2>
                        </div>

                        <div className='content'>
                            {ResumeApi.map((val, index) =>{
                                if(val.category === 'experience'){
                                    return <Card key={index} title={val.title} 
                                    year={val.year}
                                    rate={val.rate}
                                    desc={val.desc} />
                                }
                             
                            })}
                        </div>
                    </div>


                </div>
            </div>
        </section>

    </>
  )
}

export default Resume