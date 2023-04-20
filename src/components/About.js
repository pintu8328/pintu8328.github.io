import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
  });

  return (
    <div className="about" id="About">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              An aspiring full-stack developer with a specialization in MERN stack. Enthusiastic, hard-working, and passionate about coding. With the ability to contribute toward the organizational goal, looking forward to working as a software developer, and developing skills in a challenging work environment.
              </div>

              <div className="header__buttons_myBtn">
                <div>
                <a
                  href="https://drive.google.com/file/d/1XmX9tDEr-h6YFzQPzy7xSc-73BXUDMue/view?usp=sharing"
                  target="_blank"
                 
                  className="btn btn-outline"
                >
                  View Resume
                </a>
                </div>
                <div>
                <a
                  href="https://drive.google.com/uc?export=download&id=1XmX9tDEr-h6YFzQPzy7xSc-73BXUDMue"
                  className="btn btn-outline"
                >
                  Download Resume
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;