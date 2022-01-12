import React from "react";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  return (
    <section className="py-36">
      <Header />
      <SectionTitle title="Contact" />

      <div className="max-w-screen-lg mx-auto mt-10 flex flex-col items-center justify-center">
        <iframe
          width="600"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=uic&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>

        <p className="mt-4">Tel no.: 088-112-123</p>
      </div>
    </section>
  );
}

export default Contact;
