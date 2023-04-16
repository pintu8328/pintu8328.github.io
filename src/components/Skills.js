import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLeaf,
  
} from "react-icons/fa";
import {SiExpress,SiPostman} from 'react-icons/si'
import {BiGitBranch} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import {SiChakraui,SiRedux,SiTypescript} from 'react-icons/si'
const Skills = () => {
  const [header] = React.useState({
    subHeading: "SKILLS",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaHtml5 className="commonIcons" />,
      heading: "HTML",
    },
    {
      id: 2,
      icon: <FaCss3 className="commonIcons" />,
      heading: "CSS",
    },
    {
      id: 3,
      icon: <FaJs className="commonIcons" />,
      heading: "JavaScript",
    },
    {
      id: 4,
      icon: <FaReact className="commonIcons" />,
      heading: "React",
    },
    {
      id: 5,
      icon: <FaNodeJs className="commonIcons" />,
      heading: "NodeJS",
    },
    {
      id: 6,
      icon: <FaLeaf className="commonIcons" />,
      heading: "MongoDB",
    },
    {
      id: 7,
      icon: <SiExpress className="commonIcons" />,
      heading: "ExpressJs",
    },
    {
      id: 12,
      icon: <SiRedux className="commonIcons" />,
      heading: "Redux",
    },
    {
      id: 13,
      icon: <SiTypescript className="commonIcons" />,
      heading: "TypeScript",
    },
    {
      id: 8,
      icon: <SiPostman className="commonIcons" />,
      heading: "Postman",
    },
    {
      id: 9,
      icon: <BiGitBranch className="commonIcons" />,
      heading: "Git",
    },
    {
      id: 10,
      icon: <AiFillGithub className="commonIcons" />,
      heading: "Github",
    },
    {
      id: 11,
      icon: <SiChakraui className="commonIcons" />,
      heading: "Chakra ui",
    },
  ]);
  return (
    <div className="services" id="Skills">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info,id) => (
              <div className="col-4 bgMain" key={id}>
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;