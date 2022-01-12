import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="w-full text-center flex items-center justify-center">
      <h1 className="font-primary text-3xl font-bold">{title}</h1>
    </div>
  );
}

export default SectionTitle;
