import avi from "./img/Watermark.png";
import "./styles.css";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Education from "./Education";
import Work from "./Work";
import Code from "./Code";
import Projects from "./Projects";

function App() {
  const [education, seteducation] = useState(false);
  const [work, setwork] = useState(false);
  const [code, setcode] = useState(false);
  const [projects, setprojects] = useState(true);

  return (
    <>
      <div className="hero px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand mx-5">KRVTZ</span>
          <div>
            <span className="mx-4 nav-menu">Home</span>
            <span className="mx-4 nav-menu">About Me</span>
            <span className="mx-4 nav-menu">Resume</span>
            <span className="mx-4 nav-menu">Testimonial</span>
            <span className="mx-4 nav-menu">Contact</span>
          </div>
        </nav>
        <div className="hero-2 row justify content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center intro-section">
              <span className="I-am">
                Hi, my name is <span className="name">Chris Norton</span>
              </span>
              <span className="intro-adj py-2">Industrious Dev</span>
              <span className="intro-subheading">
                Specialized in front end and back end applications
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire">Hire Me</button>
                <button className="btn-cv">
                  <i class="fal fa-arrow-down" id="down"></i> CV
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content- center avi">
              <img className="img-fluid" alt="heroimage" src={avi}></img>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="about-me-section aboutme my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text"> About Me </span>
          <div className="row justify-content center shadow-lg my-5 about-me-pannel">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center d-flex flex-column">
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_fs006iff.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
              <span className="quote">
                "Desire! That's the one secret of every man's career. Not
                education. Not being born with hidden talents. Desire" - Johnny
                Carson
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="about-txt">
                My developer journey began while I was studying Engineering in
                college. While learning basic programming concepts in
                university, I took an interest in learning to build complex
                stand-alone applications on my own. I eventually grew to work on
                multiple web applications for various clients.
                <br />I have developed a deep love for learing about development
                in both hardware and software. A more detailed look at my
                experices can be seen in my <span>resume</span>
              </span>
              <span className="highlights">Skills</span>
              <span className="skills">
                <ul>
                  <li>JavaScript (ES6+), Node, React</li>
                  <li>Java</li>
                  <li>C#, ASP</li>
                  <li>PHP</li>
                  <li>Python, DJango</li>
                  <li>MongoDB, MYSQL</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-section d-flex flex-column">
        <span className="about-me-text">Resume</span>

        <div className="resume-section row">
          <div
            className="col-lg-4 col-md-4 resume-left d-flex flex-row px-0 shadow-lg"
            style={{ width: "20%", marginInline: "auto", height: "400px" }}
          >
            <div className="d-flex flex-column bg-new text-white">
              <div className="d-flex flex-column">
                <span class="resume-icon">
                  <i class="fab fa-github-alt"></i>
                </span>
                <span class="resume-icon">
                  <i class="fas fa-cog"></i>
                </span>
                <span class="resume-icon">
                  <i class="fas fa-code"></i>
                </span>
                <span class="resume-icon">
                  <i class="fas fa-user-tie"></i>
                </span>
              </div>
            </div>
            <div className="d-flex flex-column">
              <span className="resume-menu">Projects</span>
              <span className="resume-menu">Work</span>
              <span className="resume-menu">Code</span>
              <span className="resume-menu">Education</span>
            </div>
          </div>

          <div className="col-lg-8 col-md-8 col-sm-12 resume-right">
            {education === true && <Education />}
            {work === true && <Work />}
            {code === true && <Code />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
