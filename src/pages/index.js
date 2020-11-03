import React, {useState} from 'react'

import SideBar from "../SideBar"

import Navbar from "../Navbar"
import HeroSection from '../HeroSection'



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
    
        </>
    )
}

export default Home
