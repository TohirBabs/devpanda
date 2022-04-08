import React from 'react'
import "./App.css"
import Features from './Components/Features/Features'
import Header from "./Components/Head/Header"
import Home from './Components/Hero/Home'
import Portfolio from './Components/Portfolio/Portfolio'
import Resume from './Components/Resume/Resume'
// import Testimonial from './Components/Testimonial/Testimonial'
// import Blog from './Components/Blog/Blog'
// import Contact from './Components/Contact/Contact'
// import Footer from './Components/Footer/Footer'

const App = () => {
  return(
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      {/* <Blog /> */}
    </>
  ) 
}

export default App
