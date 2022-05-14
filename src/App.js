// import avi from "./img/Watermark.png";
import "./styles.css";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js";
import "./css/themify-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import Education from "./Education";
import Work from "./Work";
import Code from "./Code";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

function App() {
  const [education, seteducation] = useState(false);
  const [work, setwork] = useState(false);
  const [code, setcode] = useState(true);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Self-Driven",
        "AWS",
        "SEO",
        "Adaptable",
        "Team Player",
        "Problem Solver",
      ],
      startDelay: 0,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      autoInsertCss: true,
      cursorChar: "_",
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const el = useRef(null);

  function setAllFalse() {
    setcode(false);
    seteducation(false);
    setwork(false);
    setprojects(false);
  }

  function changeState(function1, state1) {
    setAllFalse();
    // document.getElementById("resume-menu").className = "selected";
    function1(state1);
  }

  return (
    <>
      <div className="bg-new navbar-mobile">
        {" "}
        <div className="bars" onClick={() => setopennav(!opennav)}>
          {" "}
        </div>{" "}
      </div>
      <nav
        className={
          !opennav
            ? "d-flex flex-rows  navbar-new bg-new px-9  transition-all"
            : "d-flex flex-rows  navbar-fixed-new bg-new px-9 py-5 transition-all"
        }
      >
        <span className="brand mx-5">Chris Norton</span>
        <div className="d-flex flex-rows nav-web">
          <a className="mx-4 nav-menu" href="#home">
            Home
          </a>
          <a className="mx-4 nav-menu" href="#aboutme">
            About Me
          </a>
          <a className="mx-4 nav-menu" href="#resume">
            Resume
          </a>
          <a className="mx-4 nav-menu" href="#testimonials">
            Testimonials
          </a>
          <a className="mx-4 nav-menu" href="#contactme">
            Contact
          </a>
        </div>
      </nav>
      <div className="nav-hero" id="home">
        <div className="hero px-10 py-2">
          <div className="hero-2 row justify content-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center intro-section">
                <span className="I-am">
                  Hi, my name is <span className="name">Chris Norton</span>
                </span>
                <span
                  className="intro-adj py-2"
                  ref={el}
                  style={{ minHeight: "80px" }}
                >
                  Industrious
                </span>
                <span className="intro-subheading">
                  Specialized in web development
                </span>
                <div className="d-flex flex-row justify-content-center mt-5">
                  <a href="#contactme" className="btn-hire">
                    <span className="btn-text">
                      Hire <span className="btn-text">Me</span>
                    </span>
                  </a>
                  <a
                    className="btn-cv"
                    href="https://docs.google.com/document/d/16Z1hdj_S8EZhvPj-cbbb61BxG5uMD7h_/edit?usp=sharing&ouid=118030389981850445474&rtpof=true&sd=true"
                    target="blank"
                  >
                    <span className="btn-text">
                      <i className="ti-download" id="down"></i>
                      CV
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>

        <div className="about-me-section aboutme my-5" id="aboutme">
          <div className="d-flex flex-column">
            <span className="about-me-text revealUp"> About Me </span>
            <div className="row justify-content center shadow-lg my-5 about-me-pannel">
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center d-flex flex-column">
                <span className="graphic">
                  <lottie-player
                    src="https://assets6.lottiefiles.com/packages/lf20_esw9ibjj.json"
                    background="transparent"
                    className=""
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                </span>
                <span className="quote">
                  "Desire! That's the one secret of every man's career. Not
                  education. Not being born with hidden talents. Desire" -
                  Johnny Carson
                </span>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
                <span className="about-txt">
                  My developer journey began while I was studying Engineering in
                  college. While learning basic programming concepts in
                  university, I took an interest in learning to build complex
                  stand-alone applications on my own. I eventually grew to work
                  on multiple web applications for various clients.
                  <br />I have developed a deep love for learing about
                  development in both hardware and software. A more detailed
                  look at my experiences can be seen in my <span>resume</span>
                </span>
                <span className="highlights">Skills</span>
                <div className="skills row" id="skills">
                  <div className=" col-sm-4">
                    <ul>
                      <li>JS ES6+, Node, React</li>
                      <li>PHP</li>
                      <li>MongoDB, MYSQL</li>
                      <li>Git</li>
                    </ul>
                  </div>
                  <div className="col-sm-4">
                    <ul>
                      <li>Bootstrap,Sass,Flexbox</li>
                      <li>(light) C#, ASP NET</li>
                      <li>(light) Python, Django</li>
                      <li>(light) Java</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-section-outer d-flex flex-column" id="resume">
          <span className="about-me-text revealUp">Resume</span>
          <div className="d-flex flex-rows">
            <ul className="resume-menu d-flex flex-rows" id="resume-menu">
              <li className="mx-4 nav-menu" href="#">
                <span
                  className={
                    code === false ? "resume-menu" : "resume-menu selected"
                  }
                  onClick={() => {
                    changeState(setcode, true);
                  }}
                >
                  Skills
                </span>
              </li>
              <li className="mx-4 nav-menu" href="#">
                <span
                  className={
                    projects === false ? "resume-menu" : "resume-menu selected"
                  }
                  onClick={() => {
                    changeState(setprojects, true);
                  }}
                >
                  Sites
                </span>
              </li>

              <li className="mx-4 nav-menu" href="#">
                <span
                  className={
                    work === false ? "resume-menu" : "resume-menu selected"
                  }
                  onClick={() => {
                    changeState(setwork, true);
                  }}
                >
                  Work
                </span>
              </li>
              <li className="mx-4 nav-menu" href="#">
                <span
                  className={
                    education === false ? "resume-menu" : "resume-menu selected"
                  }
                  onClick={() => {
                    changeState(seteducation, true);
                  }}
                >
                  Education
                </span>
              </li>
            </ul>
          </div>
          {education === true && <Education />}
          {work === true && <Work />}
          {code === true && <Code />}
          {projects === true && <Projects />}
        </div>
        <div className="testimonials-section my-5" id="testimonials">
          <div className="testimonials-inner-part d-flex flex-column">
            <span className="about-me-text about-me-testimonial">
              Testimonials
            </span>
            <Testimonials />
          </div>
        </div>
        <div className="contact-section py-4" id="contactme">
          <div className="relative-bg"></div>

          <div className="contact-inner-part d-flex flex-column">
            <span className="about-me-text">Contact</span>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
