import React from "react";
import Header from "../../components/Header";
import Banner from "./Banner";
import Services from "./Services";

function Landing() {
  return (
    <div>
      <Header />
      <Banner />

      <div className="max-w-screen-lg mx-auto">{/* <Services /> */}</div>
    </div>
  );
}

export default Landing;
