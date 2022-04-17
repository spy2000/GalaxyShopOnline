import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import MetaData from "../MetaData";
const About = () => {
  const visitInstagram = (link) => {
    window.location = link;
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
              src="https://res-console.cloudinary.com/dbfxhctfy/thumbnails/transform/v1/image/upload//v1650204398/V2hhdHNBcHBfSW1hZ2VfMjAyMi0wNC0xN19hdF83LjMxLjM0X1BNX2ZoZzNzZQ==/drilldown"
              alt="Founder"
            />
            <Typography>Sachin Yadav</Typography>
            <Typography>Frontend Developer</Typography>
            <Button
              onClick={() =>
                visitInstagram("https://www.instagram.com/error_spy/")
              }
              color="primary"
            >
              Visit Instagram
            </Button>
            <span>
              This website Frontend part is done by me (Sachin Yadav). For this,
              I am using React. Reactjs is a library of javascript to design UI
              (user Interface) for Website.
            </span>
          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dbfxhctfy/image/upload/v1650204694/WhatsApp_Image_2022-04-17_at_7.40.03_PM_pi2gg4.jpg"
              alt="Founder"
            />
            <Typography>Ganesh Dhangekar</Typography>
            <Typography>Backend Developer</Typography>
            <Button
              onClick={() =>
                visitInstagram("https://www.instagram.com/ganesh_dhangekar07/")
              }
              color="primary"
            >
              Visit Instagram
            </Button>
            <span>
              This website Backend part is done by me (Ganesh Dhangekar). For
              this, I am using Nodejs. Nodejs is a library of javascript to
              manage Backend of the Website.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
