import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Grid } from "@material-ui/core";

function Footer() {
  return (
    <div
      style={{
        marginTop: "15%",
        height: "620px",
        widht: "100%",
        backgroundColor: "#004d4d",
        color: "whitesmoke",
      }}
    >
      <Grid
        container
        justify="center"
        style={{ marginTop: "15rem", color: "whitesmoke" }}
      >
        <TwitterIcon
          style={{ fontSize: "50px", marginRight: "6rem", marginTop: "4rem" }}
        ></TwitterIcon>
        <FacebookIcon
          style={{ fontSize: "50px", marginRight: "6rem", marginTop: "4rem" }}
        ></FacebookIcon>
        <InstagramIcon
          style={{ fontSize: "50px", marginRight: "6rem", marginTop: "4rem" }}
        ></InstagramIcon>
        <YouTubeIcon
          style={{ fontSize: "50px", marginRight: "6rem", marginTop: "4rem" }}
        ></YouTubeIcon>
        <LinkedInIcon
          style={{ fontSize: "50px", marginTop: "4rem" }}
        ></LinkedInIcon>
      </Grid>
      <br />
      <hr style={{ width: "80%", textAlign: "center", marginTop: "2rem" }}></hr>
      <h1
        style={{
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        We are a group of enthusiasts
      </h1>
      <h2 style={{ textAlign: "center" }}>
        Who want to coordinate bus transport work in Yerevan
      </h2>
      <Grid container style={{ marginTop: "100px" }}>
        <CallIcon style={{ marginLeft: "10rem", fontSize: "30px" }}></CallIcon>
        <b style={{ marginRight: "7rem", fontSize: "20px", color: "white" }}>
          +374 00 00 00
        </b>
        <EmailIcon
          style={{ marginRight: "0.5rem", fontSize: "30px" }}
        ></EmailIcon>
        <b style={{ marginRight: "7rem", fontSize: "20px", color: " #3568ce" }}>
          yerevanbustransport@gmail.com
        </b>
        <LocationOnIcon
          style={{ marginRight: "0.5rem", fontSize: "30px" }}
        ></LocationOnIcon>
        <text style={{ marginRight: "7rem", fontSize: "20px" }}>
          <text>24/15 Azatutyan Ave</text>
          <br />
          Yerevan , Armenia
        </text>
      </Grid>
      <hr style={{ width: "80%", textAlign: "center", marginTop: "4rem" }}></hr>
      <div
        style={{
          textAlign: "center",
          fontSize: "20px",
          color: "white",
          marginTop: "2rem",
        }}
      >
        &copy; Code Republic 2021
      </div>
    </div>
  );
}

export default Footer;
