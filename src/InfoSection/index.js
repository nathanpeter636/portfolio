import React from "react";

import { Button } from "../Button/ButtonElements";

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
              <TopLine> {topLine} </TopLine>

              <Heading lightText={lightText}> {headline}</Heading>

              <Subtitle darkText={darkText}>
                My motto as a developer is if you are the smartest person in the
                room, you are in the wrong room.<br></br>
                <br></br>I follow the most modern coding practices and
                created this responsive portfolio specifically in React with a
                range of modern technical features.{" "}
                <br></br>
                <br></br>
                I'm committed to providing value to your business, check out my
                work to see what I can offer you. <br></br>
                <br></br>
              </Subtitle>

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
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
