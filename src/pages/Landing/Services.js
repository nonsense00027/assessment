import React from "react";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import Vehicle from "../../assets/Vehicle.mp4";

function Services() {
  return (
    <section className="py-36">
      <Header />
      <SectionTitle title="Services Offered" />
      <div className="max-w-screen-lg mx-auto mt-10 flex flex-col items-center justify-center">
        {Vehicle && (
          <video src={Vehicle} autoPlay width={400} loop controls muted></video>
        )}

        <h1 className="text-2xl font-bold mt-10">We offer: </h1>
        <p className="text-lg">1. Student Permit </p>
        <p className="text-lg">2. Non-Professional Driver’s License </p>
        <p className="text-lg">3. Professional Driver’s License </p>
        <p className="text-lg">4. Renewal of Driver’s License </p>
      </div>
    </section>
  );
}

export default Services;
