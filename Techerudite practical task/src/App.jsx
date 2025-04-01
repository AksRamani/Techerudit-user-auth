import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Services from './components/Services'
import {fetcFrontendData } from "./services/api"
import { useEffect } from 'react'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import TestimonialsAndBlogs from './components/TestimonialsAndBlogs'
import Ourprocess from './components/Ourprocess'
import AboutUs from './components/AboutUs'

function App() {

  useEffect(() => {
    const fetchdata = async()=>{
    let res = await fetcFrontendData();
    console.log(res)
    }    
    fetchdata();
  }, [])
  

  return (
    <>
    <Navbar />
    <HeroSection />
    <Services/>
    <AboutUs/>
    <Ourprocess/>
    <TestimonialsAndBlogs/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
