import Img from "gatsby-image";
import React from "react";
import { IAbout } from "../../contracts/about/iabout";
import { GetAbout } from "../../hooks/about/about-graphql";
import "./hero.scss";

const Hero = ({ }) => {
  const about: IAbout = GetAbout().sanityAbout;
  return <div className="hero-container" id="about" >
    <div className="hero-content-container">
      <div className="about-image-container">
        <Img className="about-image" fluid={about.mainImage.asset.fluid} />
      </div>
      <div className="about-content-container">
        <h2>{about.title}</h2>
        <p>{about.description}</p>
      </div>
    </div>
  </div> 
}

export default Hero