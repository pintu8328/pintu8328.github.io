import React from "react";
import { FaGithub, FaShareSquare } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";

const Project = () => {
  const [header] = React.useState({
    subHeading: "Projects",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Questymes",
      img: "./images/questymes.png",
      link: "https://sparkly-tartufo-740f31.netlify.app",
      repolink: "https://github.com/masai-builds/team-4-client-questymes/",
      p: "Questymes is a time management app, by usig this app an user can book an appointments and also can see all interviews scheduled for him",
      tech: "TypeScript,chakra-ui,java,mySQL",
    },
    {
      id: 2,
      heading: "Masaischool lms clone",
      img: "./images/lms.png",
      link: "https://learning-management-system-masai.netlify.app/",
      repolink: "https://github.com/masai-builds/team-4-client",
      p: "An educational management system is being developed for Masai schools that provides full-stack web development training. Students can search for lectures and watch previous lectures and attend live lectures and submit assignments. and save lectures by bookmarking them. ",
      tech: "TypeScript,chakra-ui,java,mySQL",
    },
    {
      id: 3,
      heading: "Maxfashion Clone",
      img: "./images/Maxfashion.png",
      link: "https://maxfashion-clone.netlify.app/",
      repolink: "https://github.com/kakashi10-23/Max-clone",
      p: "Max brings international fashion and value to discerning shoppers in over 325 stores across 16 countries.Max offers apparel, footwear and accessories for the entire family - women, men and children.",
      tech: "Html, CSS, JavaScript, ReactJs",
    },

    {
      id: 4,
      heading: "Anthropologie Clone",
      img: "./images/nature.png",
      link: "https://anthropologie-clone.netlify.app/",
      repolink: "https://github.com/pintu8328/Anthropologie_clone",
      p: "Nature’s Basket is India’s pioneering food destination present through physical retail stores, online portal and a mobile application. Our footprint currently extends to over 35 neighbourhood convenience stores in Mumbai, Pune and Bangalore with a diverse product portfolio ranging from fresh fruits and vegetables, fish and meat, artisanal breads, FMCG and staples. ",
      tech: "HTML, CSS, JavaScript",
    },
  ]);
  return (
    <div className="prices" id="Projects">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeading}</h1>

          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-40" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                  <img className="imgx" src={prices.img} alt=""></img>
                </div>
                <p id="desc">{prices.p}</p>
                <p id="desc">
                  <b>TechStack : </b>
                  {prices.tech}
                </p>
                <div className="price__btn">
                  <a
                    href={prices.link}
                    className="btn btn-outline"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <FaShareSquare
                      style={{
                        fontSize: "22px",
                        paddingTop: "5px",
                        color: "white",
                      }}
                    />
                  </a>
                  <a
                    href={prices.repolink}
                    className="btn btn-outline"
                    id="descShow"
                    target="_blank"
                  >
                    <FaGithub
                      style={{
                        fontSize: "25px",
                        paddingTop: "5px",
                        color: "white",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h1 className="githubCalendar">github calendar</h1>
        <div className="githubCalendar">
          <GitHubCalendar username="pintu8328" />
        </div>
        <h1 className="githubCalendar">github statistics</h1>
        <div className="githubCalendar">
        <p>&nbsp;<img align="center" className="img2" src="https://github-readme-streak-stats.herokuapp.com/?user=pintu8328&" alt="pintu8328" /></p>
        </div>
      
      </div>
    </div>
  );
};

export default Project;
