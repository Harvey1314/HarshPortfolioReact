import React from "react";

const Timeline = () => {
  const educationData = [
    {
      degree: "Master of Computer Science",
      date: "May 2025",
      institution: "Saint Louis University - St Louis, MO",
    },
    {
      degree: "Bachelor of Information Technology (BTech)",
      date: "Jun 2022",
      institution: "Parul University - Gujarat, India",
    },
    {
      degree: "Diploma",
      date: "May 2018",
      institution: "Gujarat Technological University - Gujarat, India",
    },
  ];

  return (
    <div className="bg-[#27374D] p-8">
      <h2 className="text-4xl text-[#DDE6ED] font-bold mb-6 text-center">
        My Education
      </h2>
      <div className="relative wrap overflow-hidden p-10 h-full">
        {educationData.map((education, index) => (
          <div
            key={index}
            className="mb-8 flex justify-center items-center w-full left-timeline"
          >
            <div className="z-20 flex items-center order-1 bg-[#DDE6ED] shadow-xl py-2 px-5 rounded-full mx-9">
              <h1 className="mx-auto font-semibold text-lg text-[#27374D]">
                {index + 1}
              </h1>
            </div>
            <div className="order-1 bg-[#DDE6ED] rounded-lg shadow-xl w-screen md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-[#27374D] text-xl">
                {education.degree}
              </h3>
              <p className="text-sm leading-snug tracking-wide text-[#27374D] fold-medium">
                {education.date} - {education.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
