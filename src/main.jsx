import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";  
import { DarkModeProvider } from './components/DarkmodeContext.jsx'
import Navbar from "./components/Navbar/navbar.jsx";
import Header from "./section/Header.jsx";
import Hero from "./section/Hero.jsx";
import About from "./section/About.jsx";
import PopularAreas from './section/PopularAreas.jsx'
import Properties from "./section/Properties.jsx";
import Services from "./section/Services.jsx";
import Clients from './section/Clients.jsx'
import Contact from './section/Contact.jsx'
import Footer from "./section/Footer.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import LoginForm from "./components/LoginForm.jsx"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <DarkModeProvider>  
   
    <App /> <Navbar/> <Header/><Hero/>  <About/>  <PopularAreas/> <Properties/> <Services/><Clients/> <Contact /> <Footer/> <RegisterForm/> <LoginForm/>
   </DarkModeProvider>
  </React.StrictMode>
);
