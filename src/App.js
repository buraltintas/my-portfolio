import React, { useRef, useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./index.css";

function App() {
  const projects = useRef();
  const contact = useRef();

  const [engLang, setEngLang] = useState(false);

  const engLangTrue = () => {
    setEngLang(true);
  };

  const engLangFalse = () => {
    setEngLang(false);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollProjects = () => {
    projects.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollContact = () => {
    contact.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <main className="main">
      <div>
        <Header
          engLangTrue={engLangTrue}
          engLangFalse={engLangFalse}
          engLang={engLang}
          scrollTop={scrollTop}
          scrollContact={scrollContact}
          scrollProjects={scrollProjects}
        />
      </div>
      <div>
        <Home
          engLang={engLang}
          scrollProjects={scrollProjects}
          scrollContact={scrollContact}
        />
      </div>
      <div ref={projects}>
        <Projects engLang={engLang} />
      </div>

      <div ref={contact}>
        <Contact />
      </div>
    </main>
  );
}

export default App;
