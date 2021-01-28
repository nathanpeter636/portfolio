import React, { useState } from "react";

import SideBar from "../SideBar";

import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";

import styled from "styled-components";

import { homeObjOne, homeObjTwo, homeObjThree } from "../InfoSection/Data";

import Projects from "../Project";
import ProjectModal from "../Project/ProjectModal";
import Footer from "../Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);

    console.log("clicked");
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <HeroSection />

      <InfoSection {...homeObjOne} />

      <Projects />

      <Footer />
    </>
  );
};

export default Home;
