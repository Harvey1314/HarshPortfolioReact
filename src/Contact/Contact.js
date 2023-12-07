import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import FooterBlue from "../Footer/FooterBlue";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      <Navbar isActive="3" />
      <div
        className={` transform transition duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-center w-[100vw] min-h-[calc(100vh-72px-56px)] items-center">
          <article className="mx-auto p-10 bg-[#DDE6ED] h-full w-[100vw] md:w-[50%]  rounded-md flex flex-col justify-center">
            <section className="flex flex-col justify-center align-middle">
              <div className="text-center">
                <p className="text-[#27374D] text-2xl font-bold">Contact</p>

                <h2 className="text-xl font-semibold text-[#27374D] mb-4 p-3">
                  Please Drop Me a Message.
                </h2>

                <p className="text-[#9DB2BF]">
                  Get in touch with me. <br></br>
                  Fill out the form, and I’ll be in touch as soon as possible.
                </p>

                <ul className="contact-list mt-6">
                  <li className="flex items-center justify-center">
                    <ion-icon
                      name="location-outline"
                      class="text-[#27374D]"
                    ></ion-icon>
                    <div className="ml-3">
                      <h3 className="font-bold text-[#27374D]">Address:</h3>
                      <p className="text-[#27374D]">
                        Apt F, 3940 Olive Street, Saint Louis, 63108 MO
                      </p>
                    </div>
                  </li>

                  <li className="contact-list-item flex items-center justify-center mt-4">
                    <ion-icon
                      name="call-outline"
                      class="text-[#27374D]"
                    ></ion-icon>
                    <div className="ml-3">
                      <h3 className="font-bold text-[#27374D]">Phone:</h3>
                      <a href="tel:01234567789" className="text-[#27374D]">
                        (+1) 513 410 9905
                      </a>
                    </div>
                  </li>

                  <li className="contact-list-item flex items-center justify-center mt-4">
                    <ion-icon
                      name="mail-outline"
                      class="text-[#27374D]"
                    ></ion-icon>
                    <div className="ml-3">
                      <h3 className="font-semibold text-[#27374D]">Email:</h3>
                      <a
                        href="mailto:haarsh1314@gmail.com"
                        className="text-[#27374D]"
                      >
                        haarsh1314@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="mt-6">
                    <ul className="contact-social-list flex space-x-4 justify-center">
                      <li>
                        <a
                          href="mailto:haarsh1314@gmail.com"
                          className="contact-social-link"
                        >
                          <div className="tooltip bg-[#27374D] text-[#DDE6ED] p-3 rounded-lg">
                            Mail
                          </div>
                          <ion-icon name="mail"></ion-icon>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/Harvey1314"
                          className="contact-social-link"
                        >
                          <div className="tooltip bg-[#27374D] text-[#DDE6ED] p-3 rounded-lg">
                            Github
                          </div>
                          <ion-icon name="logo-github"></ion-icon>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/harsh-p-a4a134138"
                          className="contact-social-link"
                        >
                          <div className="tooltip bg-[#27374D] text-[#DDE6ED] p-3 rounded-lg">
                            Linkedin
                          </div>
                          <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <form
                action="https://formcarry.com/s/JTb-CMWPmX"
                method="post"
                className="contact-form mt-8"
              >
                <div className="form-wrapper w-[80%] mx-auto mb-4">
                  <label
                    htmlFor="name"
                    className="form-label text-[#27374D] font-semibold"
                  >
                    Name
                  </label>
                  <div className="input-wrapper flex items-center border border-gray-300 rounded-md">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="e.g Harsh Patel"
                      className="input-field flex-1 p-2 rounded-lg"
                    />
                    <ion-icon
                      name="person-circle"
                      class="text-gray-400"
                    ></ion-icon>
                  </div>
                </div>

                <div className="form-wrapper w-[80%] mx-auto mb-4">
                  <label
                    htmlFor="message"
                    className="form-label text-[#27374D] font-semibold"
                  >
                    Message
                  </label>
                  <div className="input-wrapper flex items-center border border-gray-300 rounded-md">
                    <textarea
                      name="message"
                      id="message"
                      required
                      placeholder="Write message..."
                      className="input-field flex-1 p-2 rounded-lg"
                    ></textarea>
                    <ion-icon
                      name="chatbubbles"
                      class="text-gray-400"
                    ></ion-icon>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn btn-primary bg-[#27374D] text-[#DDE6ED] px-4 py-2 rounded-md hover:bg-[#9DB2BF] hover:text-[#27374D]"
                  >
                    Send
                  </button>
                </div>
              </form>
            </section>
          </article>
        </div>
      </div>
      <FooterBlue />
    </>
  );
}

export default Contact;
