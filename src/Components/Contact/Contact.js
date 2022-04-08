import React, { useState } from 'react'
import "./Contact.css"

const Contact = () => {

    const[data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        subject:'',
        message:'',
    })
    const InputEvent = (event) =>{
        const {name,value} = event.target

        setData((preVal) =>{
            return{
                ...preVal,
                [name]:value
            }
        })
    }


    const formSubmit= (event) =>{
        event.preventDefault()
        alert(
            `My name is ${data.fullname}
            My Phone Number is ${data.phone}
            My email adree is ${data.email}
            My subject on ${data.subject}
            Here is my message : ${data.message}`
        )
    }

  return (
    <>
    
     <section className='Contact' id='contact'>
         <div className='container top'>
             <div className='heading text-center'>
                 <h4 className='uppercase'>
                     contact
                 </h4>
                 <h1>Contact Me With</h1>
             </div>

            <div className='content d_flex'>
                 <div className='left'>
                    <div className='box box_shadow'>
                        <div className='img'>
                            <img src='' />
                        </div>
                        <div className='details'>
                            <h1>Tndsnd Balikesne</h1>
                            <p>'Lorem ipsum odor amet, consectetuer adipiscing elit. Imperdiet erat nullam tortor quis elit lacus blandit vitae. Nostra dapibus bibendum; curae magnis commodo metus vestibulum tristique. Tristique'</p>
                            <br />
                            <p>Phone: +234 817 715 8461</p>
                            <p>Email: tohirbabs@gmail.com</p> <br />
                            <span>FIND ME WITH</span>
                            <div className='button f_flex'>
                                <button className='btn_shadow'>
                                    <i className='fab fa-facebook-f'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <i className='fab fa-instagram'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <i className='fab fa-linkedin-in'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className='right box_shadow'>
                     <form onSubmit={formSubmit}>
                         <div className='f_flex contact-form'>
                             <div className='input row'>
                                <span>YOUR NAME</span>
                                <input type='text' name="fullname" value={data.fullname} onChange={InputEvent} />
                             </div>
                             <div className='input row'>
                                <span>YOUR  NUMBER</span>
                                <input type='phone' name="phone" value={data.phone} onChange={InputEvent} />
                             </div>
                             <div className='input'>
                                <span>EMAIL</span>
                                <input type='email' name="email" value={data.email} onChange={InputEvent} />
                             </div>
                             <div className='input'>
                                <span> SUBJECT</span>
                                <input type='text' name="subject" value={data.subject} onChange={InputEvent} />
                             </div>
                             <div className='input'>
                                <span>MESSAGE</span>
                                <textarea cols='30' rows='10' name="message" value={data.message} onChange={InputEvent}>
                                </textarea>

                             </div>
                             <button className='btn_shadow'>
                                SEND MESSAGE <i className='fa fa-long-arrow-down'></i>
                             </button>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
     </section>
    
    </>
  )
}

export default Contact