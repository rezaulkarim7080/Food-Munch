import React from "react";
import Hero from "../components/Hero";
import aboutImage from "../../about-image.jpg"
import Link from "next/link";


const page = (props) => {
  return (
    <div className="h-screen bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">

      <div>
        <Hero headline={"Welcome to About Pages"} image={aboutImage} />
      </div>
    </div>
  );
};

export default page;
