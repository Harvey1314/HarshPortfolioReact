import React from "react";
import banner from "../about-banner.png";
import Pdf from "./Harsh Patel.pdf";

function Intro() {
  return (
    <div className="bg-[#27374D] p-8 pb-28 pt-20">
      <h2 className="text-4xl text-[#DDE6ED] font-bold mb-6 text-center">
        My Intro
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center py-8">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0 transition duration-500 ease-in-out transform hover:scale-125">
          <img
            src={banner}
            alt="Introduction"
            className="w-[350px] h-[350px] rounded-tl-[20%] rounded-tr-3xl  rounded-br-[20%] rounded-bl-3xl object-cover p-10 mx-auto bg-[#9DB2BF] hover:bg-[#DDE6ED] hover:shadow-custom transition duration-2000 ease-in transform hover:rounded-full"
          />
        </div>

        <div className="w-full sm:w-1/2 px-5 mx-auto">
          <h2 className=" text-[#DDE6ED] rounded-md text-3xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-[#9DB2BF] py-8 text-lg">
            Hello! I’m Harsh Patel, and I’m a developer who has a passion for
            coding and designing. I have both the skill set and professional
            background necessary to dive deep into the software world. As a
            self-motivated team player, I envision an exciting future in the
            industry.
          </p>
          <button
            className="bg-[#DDE6ED] text-[#27374D] font-bold px-4 py-2 rounded-md mt-4"
            onClick={() => window.open(Pdf, "_blank")}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
