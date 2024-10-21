import React from "react";
import { Image } from "react-bootstrap";
import InstructorBanner from "../images/InstBanner.png";

function BannerImage() {
  return (
    <a href="/profile">
      <Image
        className="d-block w-100 mt-5"
        style={{
          height: "250px",
        }}
        src={InstructorBanner}
        alt="Instructor Banner"
      />
    </a>
  );
}

export default BannerImage;
