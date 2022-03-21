import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MetaData from "../MetaData";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/error_spy/";
  };
  return (
    <div className="aboutSection">
      <MetaData title={"about"} />
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dbfxhctfy/image/upload/v1645872354/Snapchat-1580226232_e0j52l.jpg"
              alt="Founder"
            />
            <Typography>Sachin Yadav</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Sachin Yadav. Only for the
              purpose of final year project
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.facebook.com/profile.php?id=100025470503879"
              target="blank"
            >
              <FacebookIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/error_spy/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
