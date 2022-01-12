import React from "react";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";

function Technology() {
  return (
    <section className="py-36">
      <Header />
      <SectionTitle title="Technology Used" />
      <div className="max-w-screen-lg mx-auto mt-10 flex flex-col items-center justify-center">
        <p className="text-lg">1. React JS </p>
        <p className="text-lg">2. Firebase </p>
        <p className="text-lg">3. Tailwind CSS </p>
        <p className="text-lg">4. AntD</p>
      </div>
    </section>
  );
}

export default Technology;
