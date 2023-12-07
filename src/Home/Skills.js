// src/components/Skills.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  const skillsData = [
    { name: "HTML", icon: faHtml5, level: 90 },
    { name: "CSS", icon: faCss3, level: 85 },
    { name: "JavaScript", icon: faJs, level: 80 },
    { name: "React.js", icon: faReact, level: 75 },
    { name: "Node.js", icon: faNodeJs, level: 70 },
    { name: "Git", icon: faGit, level: 80 },
  ];

  return (
    <div className="bg-[#DDE6ED] p-8 pb-28 pt-20 rounded-lg shadow-md">
      <h2 className="text-4xl text-[#27374D] font-bold mb-6 text-center">
        My Skills
      </h2>
      <div className="flex flex-wrap mt-10 mb-5">
        <div className="w-full md:w-1/2 px-5 pt-10">
          {skillsData.slice(0, 3).map((skill, index) => (
            <div key={index} className="mb-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-[#526D82] mr-2 text-3xl"
                  />
                  <span className="text-2xl text-[#27374D] font-bold">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[#27374D] font-bold">{skill.level}%</span>
              </div>
              <div className="relative w-full bg-[#9DB2BF] h-4 rounded-full">
                <div
                  className="absolute top-0 left-0 bg-[#27374D] h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 px-5 py-10">
          {skillsData.slice(3).map((skill, index) => (
            <div key={index} className="mb-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-[#526D82] mr-2 text-3xl"
                  />
                  <span className="text-2xl text-[#27374D] font-bold">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[#27374D] font-bold">{skill.level}%</span>
              </div>
              <div className="relative w-full bg-[#9DB2BF] h-4 rounded-full">
                <div
                  className="absolute top-0 left-0 bg-[#27374D] h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
