import React from "react";
import Card from "./ProjectCard";



export default function Project() {
  const githubProject = [
    {
      id: 0,
      Name: "Urban Reach Intern Project",
      github: "http://github.com/ajaykrmnc/ur-bend-fend",
      Live: "https://urbanreach.netlify.app",
      img: 'urbanreach.png',
      intro: ""
    },
    {
      id: 3,
      Name: "Battex",
      github: 'https://github.com/ajaykrmnc/evexchanz',
      img: 'battex.jpg',
      Live: "https://xparkle.netlify.app"
   },
    {
      id: 1,
      Name: "My 3D portfolio",
      github: "http://github.com/ajaykrmnc/",
      Live: "https://ajaykrgupta.netlify.app",
      img: 'ajaykrgupta.png',
      intro: ''
    },
    {
      id: 2,
      Name: "Recursive Tree",
      Live: "https://visionmap.netlify.app",
      github: 'http://github.com/ajaykrmnc/',
      img: 'visionmap.png',
      intro:''
    },
    {
      id: 6,
      Name: 'Memories',
      github: 'http://github.com/ajaykrmnc/',
      Live: 'https://we-amigos.netlify.app',
      img: 'Memories.jpg',
      intro : ''
    },
    {
      id: 7,
      Name: "Tindog",
      github:'https://github.com/ajaykrmnc/tindog',
      Live: 'https://ajaykrmnc.github.io/tindog/',
      img: 'tindog.png',
      intro : ''
    },
    {
      id: 4,
      Name: "Tata Suceess",
      github: 'http://github.com/ajaykrmnc/',
      Live: 'https://tata-success.netlify.app',
      img: 'tata-success.png',
      intro : '',
    },
    {
      id: 8,
      Name: "EcoPoolCabs",
      github:'',
      Live: '',
      img: 'ecopool.png',
    },

    
  ];
  return (
    <div className = "about-wrapper">
    <div><h1>Project</h1></div>
    <div className = "ProjectBox">
      {githubProject.map((item) => (
        <div className = "">
          <Card Name={item.Name} github={item.github} Live={item.Live} img={item.img} intro = {item.intro}/>
        </div>
      ))}
    </div>
    </div>
  );
}
