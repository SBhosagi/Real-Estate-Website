import React, { useEffect } from "react";
import aboutimg from "../assets/images/about.jpg";
import { useDarkMode } from "../components/DarkmodeContext";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <section
      id="about"
      className={`${darkMode ? "dark:bg-black" : "light bg-transparent"}
 w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center  items-centergap-10`}
    >
      <div>
        <img
          data-aos="zoom-in"
          src={aboutimg}
          alt="about image"
          className="rounded-2xl lg:w-[500px] lg:h-[600px]"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" className="text-red-500 dark:text-red gap-8" >
          WHO WE ARE
        </h1>
        <h1 data-aos="zoom-in" 
        className={`${darkMode ? 'text-white' : 'text-black' } text-[40px] font-semibold leading-10 `}>
          We help clients buy and sell houses since 1989</h1>
        <p data-aos="zoom-in"  className={' text-xl  text-justify {darkMode ?  dark:text-gray-600'}>Since 1989, we have been dedicated to helping clients buy and sell homes with confidence and ease. With decades of experience in the real estate market, we have built a reputation for trust, professionalism, and exceptional service.</p>
        <button data-aos="zoom-in" className='bg-red-600 dark:bg-red-600 dark:hover:bg-black dark:hover:text-white text-lg p-4  text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                            VIEW MORE
                        </button>
      </div>
    </section>
  );
};
 
export default About;
