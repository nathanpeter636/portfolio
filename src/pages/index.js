import React, {useState} from 'react'

import SideBar from "../SideBar"

import Navbar from "../Navbar"


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)


    const toggle = () => {
        setIsOpen(!isOpen)
    }




    return (
        <>
            
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />

        </>
    )
}

export default Home
