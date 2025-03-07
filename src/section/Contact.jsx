import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkmodeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);

  const { darkMode } = useDarkMode();
  const [result, setResult] = useState("");
  const [token,setToken]= useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    formObject.access_key = "70f42525-aa7b-4e5b-b99e-c7706c7881dc"; // API access key

    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      setResult("Error: Authentication token not found ❌");
     // return;
    
    }
    try {
      const response = await axios.post(
        "https://real-estate-api-production-755d.up.railway.app/contact-us/add-query",
        formObject,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${authToken}`,

          },
        }
      );
    

      console.log("API Response:", response.data);
      if (response.data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        setResult(response.data.message || "An error occurred. ❌");
      }
    } catch (error) {
      console.error("Axios error:", error);
      setResult("Submission failed. Please try again. ❌");
    }
  };

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="contact"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
       } lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
       
      >
        <div data-aos="zoom-in" className="bg-white dark:bg-white p-10 flex flex-col justify-center items-start gap-4 rounded-xl">
          <h1 className="text-2xl text-black font-semibold dark:text-black">Send us a message today</h1>
          <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
            <input type="text" name="name" placeholder="Enter your full name" required className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl" />
            <input type="email" name="email" placeholder="Enter your valid email" required className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl" />
            <input type="number" name="phone" placeholder="Enter your valid mobile number" required className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl" />
            <textarea name="message" cols="30" rows="5" placeholder="Enter your message here..." required className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"></textarea>
            <button type="submit" className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-black-700 cursor-pointer">
              SEND MESSAGE
            </button>
          </form>
          <span>{result}</span>
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
            className="text-black text-[40px] font-semibold leading-10 dark:text-black"
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
