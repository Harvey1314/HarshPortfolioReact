import React from "react";

function Navbar(props) {
  const isActive = props.isActive;
  return (
    <div>
      <nav className="bg-[#27374D] text-[#DDE6ED] w-screen">
        <div className="flex align-middle justify-between p-5">
          <a
            href="/HarshPortfolioReact/Home"
            className="text-2xl font-quicksand font-bold"
          >
            HARSH
          </a>
          <ul className="flex align-middle justify-center list-none">
            <li className="transform translate-x-0 hover:translate-y-1 transition-transform duration-300 ease-in-out">
              <a
                href="/HarshPortfolioReact/Home"
                className={`px-8 font-quicksand hover:shadow-custom rounded-3xl py-2 ${
                  isActive === "1"
                    ? "py-2 text-[#27374D] bg-[#DDE6ED] rounded-3xl font-bold"
                    : ""
                }`}
              >
                Home
              </a>
            </li>
            <li className="transform translate-x-0 hover:translate-y-1 transition-transform duration-300 ease-in-out">
              <a
                href="/HarshPortfolioReact/Projects"
                className={`px-8 font-quicksand hover:shadow-custom rounded-3xl py-2 ${
                  isActive === "2"
                    ? "py-2 text-[#27374D] bg-[#DDE6ED] rounded-3xl font-bold"
                    : ""
                }`}
              >
                Projects
              </a>
            </li>
            <li className="transform translate-x-0 hover:translate-y-1 transition-transform duration-300 ease-in-out">
              <a
                href="/HarshPortfolioReact/Contact"
                className={`px-8 font-quicksand hover:shadow-custom rounded-3xl py-2 ${
                  isActive === "3"
                    ? "py-2 text-[#27374D] bg-[#DDE6ED] rounded-3xl font-bold"
                    : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
