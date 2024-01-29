import "./App.css";

import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Hero from "./components/UI/Hero"
import Projects from "./components/UI/Projects"
import About from './components/UI/About'
import Contact from './components/UI/Contact'

function App(){
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Projects/>
      <About/>
      <Contact/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
