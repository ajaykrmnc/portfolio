import React from "react";
import Card from "./BlogCard";

export default function Project() {
  const githubProject = [
    {
      id: 0,
      Name: "6th sem resources",
      Live: "https://ajaykrmnc.notion.site/91e1d2bc1f4543fd8419105463cce91d?v=1f08156482714d9e989fb8cef3f341c4&pvs=4",
      intro: "This notion web-page contain all the files and resources that I have gone through during 6th sem at college ",
      date: "25 Feb 2023"
    },
    {
      id: 3,
      Name: "VS CODE Debug Setup",
      Live: "https://ajaykrmnc.notion.site/VS-CODE-c48df183908e4365b47d2a88aedecfb0?pvs=4",
      intro: "The important file required to do the debug in C++ in VS CODE"
   },
    {
      id: 1,
      Live: "https://ajaykrmnc.notion.site/Multisource-BFS-0d24a937ae7a4c6d8c31b22b4f57e828?pvs=4",
      Name: "Multisource BFS",
      intro: 'This is a neat little trick to optimize your code and reach peak performance'
    },
    

    
  ];
  return (
    <div className = "about-wrapper">
    <div style = {{display: 'inline-flex',alignItems: 'center'}}>
      <h1 style = {{color: '#001040'}}>Blog &nbsp;</h1>
      <img src = "Notion_app_logo.png" style = {{width: '3rem'}}/>
    </div>
    <div className = "ProjectBox">
      {githubProject.map((item) => (
        <div className = "">
          <Card Name={item.Name} Live={item.Live} img={item.img} intro = {item.intro}/>
        </div>
      ))}
    </div>
    </div>
  );
}
