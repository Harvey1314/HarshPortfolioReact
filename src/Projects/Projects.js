// src/components/Projects.js
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import FooterBlue from "../Footer/FooterBlue";

const projectsData = [
  {
    id: 1,
    title: "NETWORK ADMINISTRATION",
    subtitle: "Infoservops - Vadodara, Gujarat",
    description:
      "Managed all media, press and public relations issues. Planned and organized corporate media and other special events. Cultivated positive relationships with community members through public relations campaigns. Established and maintained cooperative relationships with representatives of community, consumer, employee and public interest groups. Hybride Cloud Environment Using Cloud Computing Troubleshoot based on design and promo Specifications. Coached client representatives on effective communication with public and employees. Researched, negotiated, implemented and tracked advertising and public relations activities.",
    thumbnail:
      "https://i0.wp.com/www.infoservops.com/wp-content/uploads/2023/05/InfoServOps_Web_Logo.png?fit=960%2C290&ssl=1",
    link: "https://github.com/Harvey1314/Internship/blob/main/Harsh%20Certificate.pdf",
  },
  {
    id: 2,
    title: "WEB DEVELOPMENT INTERN",
    subtitle: "Infoservops - Vadodara, Gujarat",
    description:
      "Learn web development as an intern Learn the basics of HTML and CSS. Design banners, webpage speed, Design search engine optimization Built website content and designs using HTML and CSS. Supported staff activities to assist web page launches. Maintained strong education in latest technologies, software and hardware products for use in various projects. Redesigned sites to enhance navigation and improve visual appeal.",
    thumbnail:
      "https://i0.wp.com/www.infoservops.com/wp-content/uploads/2023/05/InfoServOps_Web_Logo.png?fit=960%2C290&ssl=1",
    link: "https://github.com/Harvey1314/Internship/blob/main/Harsh%20Patel.pdf",
  },
  {
    id: 1,
    title: "NETWORK ENGINEER",
    subtitle: "BlueGrey Technologies - Vadodara, Gujarat",
    description:
      "Maintaining, Monitoring ,Troubleshooting and Configuring Wireless Networks including Routers, Switches, Firewalls, Access Points and other network equipments. Working on MikroTik Router ,PFSense Firewall , Unifi Security Gateway, Ubiquiti, UniFi, Cisco, Engenius, Trendnet and Tp-Link Switches, UniFi Access Points and Ruckus Zone Director. Maintaining the Client Properties Network and work closely with Internet Service Provider to keep the Network active and efficient. Respond to network connectivity issues and resolve any wireles network issues within the confines of the office. Update the network maintenance manual and submit a summary of changes to the manual each week to management. Collaborate with third-party support and service vendors to ensure that the network stays operational. Skills: Desktop Support · Network Administration · IT Infrastructure Operations · Windows Administration · Easily Adaptable.",
    thumbnail:
      "https://media.designrush.com/agencies/252512/conversions/Bluegrey-Technologies-logo-profile.jpg",
    link: "https://github.com/Harvey1314/Internship/blob/main/Scanned%20Documents.pdf",
  },
];

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setIsVisible(true);
  }, [isModalOpen]);

  return (
    <>
      <Navbar isActive="2" />
      <div
        className={` transform transition duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <h2 className="text-4xl bg-[#DDE6ED] text-[#27374D] font-bold text-center w-[100vw] p-10 pb-0">
          Projects
        </h2>
        <div
          className={`bg-[#DDE6ED] p-8 rounded-lg shadow-md w-screen min-h-[calc(100vh-72px-56px-80px)] flex flex-col justify-center align-middle ${
            isModalOpen ? "bg-modal" : ""
          }`}
        >
          <div className="flex flex-wrap justify-center align-middle">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="cursor-pointer bg-[#27374D] p-4 m-10 rounded-lg  sm:w-[100%] md:w-[50%] lg:w-[30%]"
                onClick={() => {
                  openProjectModal(project);
                  setIsModalOpen(true);
                }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg text-[#DDE6ED] font-bold text-center">
                  {project.title}
                </h3>
                <h2 className="text-md text-[#DDE6ED] font-bold mb-4 text-center p-2">
                  {project.subtitle}
                </h2>
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-[#DDE6ED] w-screen">
              <div className="bg-[#27374D] p-8 rounded-md max-w-2xl">
                <h2 className="text-3xl text-[#DDE6ED] font-bold mb-4 text-center">
                  {selectedProject.title}
                </h2>
                <h2 className="text-2xl text-[#DDE6ED] font-bold mb-4 text-center">
                  {selectedProject.subtitle}
                </h2>
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover mb-4 rounded-md"
                />
                <p className="text-[#DDE6ED] mb-4 text-justify">
                  {selectedProject.description}
                </p>
                <div className="flex justify-center text-[#DDE6ED]">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#DDE6ED] text-[#27374D] font-bold p-2 rounded-md"
                  >
                    View Project on GitHub
                  </a>
                  <button
                    className="ml-4 font-bold bg-[#DDE6ED] text-[#27374D] p-2 rounded-md"
                    onClick={() => {
                      closeProjectModal();
                      setIsModalOpen(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <FooterBlue />
    </>
  );
}

export default Projects;
