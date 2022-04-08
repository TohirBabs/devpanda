import React, { useState } from 'react'
import "./Header.css"
import logo from "./logo.jpg"

const Header = () => {
    // when scroll header at top
    window.addEventListener("scroll", function() {
        const header = document.getElementById('header')
        header.classList.toggle("active", window.scrollY > 100)
    })

    // toggle menu
    const [Mobile, setMobile] = useState(false);

  return ( 
    
    <>
        <header className='header' id='header'>
            <div className='container d_flex'>
                <div className='logo f_flex'>
                    <img src={logo} alt='' />
                    <h1 className='name uppercase'>tohir babs</h1>
                </div>

                <div className='navlink d_flex'>
                    <ul className={Mobile ? "link f_flex uppercase show" : "link f_flex uppercase hide"} onClick={() => setMobile(false)}>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#features'>features</a></li>
                        <li><a href='#portfolio'>portfolio</a></li>
                        <li><a href='#resume'>resume</a></li>
                        {/* <li><a href='#blog'>blog</a></li>
                        <li><a href='#contact'>contact</a></li>     */}
                    </ul>
                    <a href='https://wa.me/+2348177158461'><button className='home-btn uppercase'>let's chat</button></a>
                    <button className='toggle home-btn' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fas fa-times close '></i> : <i className='fas fa-bars open'></i>}
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header