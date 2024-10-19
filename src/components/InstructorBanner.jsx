import React from 'react';
import { Image } from 'react-bootstrap';
import InstructorBanner from "../images/InstBanner.png"; 


function BannerImage() {
  return (
    <a href="/profile" >

    <Image className=""
    style={{
      display: "block",
      width: "100vw",
      maxHeight: "250px",
      marginTop: "50px"
    }} src={InstructorBanner} alt="Instructor Banner" />
    </a>
  );
}

export default BannerImage;