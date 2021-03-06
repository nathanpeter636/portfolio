import React, { useState } from "react";

import logo from "../logo.svg";

import Video from "../videos/video.mp4";


import ScrollAnimation from 'react-animate-on-scroll';


import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroPsmall,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Applogo,
} from "./HeroElements";

import { Button } from "../Button/ButtonElements";
const HeroSection = () => {
  const [hover, SetHover] = useState(false);

  const onHover = () => {
    SetHover(!hover);
    console.log("123");
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        
      <ScrollAnimation animateIn="fadeInDown" delay="800" animateOnce>
        <HeroH1>Kia Ora, I'm Nathan Peters</HeroH1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay="1900" animateOnce>
        <HeroP>
        A Front End Developer who focuses on writing clean, efficient, and
          modern code.
        </HeroP>
        </ScrollAnimation>
        <HeroPsmall>
          Site built using React.js <br></br>
          <Applogo src={logo} />
        </HeroPsmall>

        <HeroBtnWrapper>
          <Button
            to="about"
            smooth={true}
            duration={true}
            spy={true}
            exact={true}
            offset={0}
            
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            See More {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
