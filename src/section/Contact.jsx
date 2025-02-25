import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkmodeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
     
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="contact"
        className={`${darkMode ? "dark bg-gray-800" : "light bg-red-100"} lg
        :w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-white p-10 flex flex-col justify-center items-start gap-4 rounded-xl"
        >
          <h1 className="text-2xl text-black font-semibold dark:text-black">
            Send us a message today
          </h1>
          <input
            type="text"
            placeholder="Enter your full name here"
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl "
          />
          <input
            type="email"
            placeholder="Enter your  valid email "
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl "
          />
          <input
            type="number"
            placeholder="Enter your valid mobile number "
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl "
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Enter your message here....."
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl "
          ></textarea>
          <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-black-700 cursor-pointer">
            SEND EMAIL
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500 dark:text-red"
          >
            REACH US
          </h1>
          <h1
            data-aos="zoom-in"
            className={`${darkMode ? 'text-white' : 'text-black' }  text-[40px] font-semibold leading-10 `}
          >
            Get in touch with us <br /> today and our team <br /> will assist
            you
          </h1>
          <p data-aos="zoom-in" data-aos-delay="600" className='text-xl text-gray-600 text-justify dark:text-gray-600'>
            Our experts and developers would love to contribute their expertise
            and insights and help you today. Contact us to help you plan your
            next transaction, either buying or selling a home.
          </p>
          <button  data-aos="zoom-in"className="bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-black-700 cursor-pointer">
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
