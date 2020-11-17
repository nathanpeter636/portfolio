import React, {useState} from 'react'

import SideBar from "../SideBar"

import Navbar from "../Navbar"
import HeroSection from '../HeroSection'
import InfoSection from "../InfoSection"

import { homeObjOne, homeObjTwo, homeObjThree } from "../InfoSection/Data"
import Projects from "../Project"




const Home = () => {

    const [isOpen, setIsOpen] = useState(false)


    const toggle = () => {
        setIsOpen(!isOpen)
    }


    

  


    return (
        <>
             
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />

        <HeroSection/>

        <InfoSection {...homeObjOne} />
        
        
       
        <Projects />
        
    
        </>
    )
}

export default Home
