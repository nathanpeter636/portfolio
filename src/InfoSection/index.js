import React from "react";

import { Button } from "../Button/ButtonElements";

import ScrollAnimation from 'react-animate-on-scroll';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  imgStart,
  lightText,
  darkText,
  headline,
  description,
  buttonLabel,
  topLine,
  img,
  alt,
  id,
  primary,
  dark,
  dark2
}) => {
  return (
    
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        

        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>

            <ScrollAnimation animateIn="fadeInDown" delay="200" animateOnce>
              <TopLine> {topLine} </TopLine>
              </ScrollAnimation>

              <ScrollAnimation animateIn="bounceIn" delay="1000" animateOnce>
              <Heading lightText={lightText}> {headline}</Heading>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeIn" delay="2000" animateOnce>
              <Subtitle darkText={darkText}>
                My motto as a developer is if you are the smartest person in the
                room, you are in the wrong room.<br></br>
                <br></br>I follow the most up-to-date coding practices and
                created this portfolio with a
                range of modern technical features.{" "}
                <br></br>
                <br></br>
                I'm committed to providing value to your business, check out my
                work to see what I can offer you. <br></br>
                <br></br>
              </Subtitle>
              </ScrollAnimation>

              <BtnWrap>
                <Button
                  to="projects"
                  smooth={true}
                  duration={true}
                  spy={true}
                  exact={true}
                  offset={-30}
                  
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  // dark2={dark2 ? 0 : 0}
                >
                  {buttonLabel}{" "}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>

            <ImgWrap>
            <ScrollAnimation animateIn="fadeInRight" delay="500" animateOnce>
              <Img src={img} alt={alt} />
              </ScrollAnimation>
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
