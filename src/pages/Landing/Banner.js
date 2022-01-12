import React from "react";
import banner from "../../assets/banner.jpg";

function Banner() {
  return (
    <header className="relative w-screen h-5/6 pt-20">
      <img className="w-full h-full object-cover" src={banner} alt="" />
    </header>
  );
}

export default Banner;
