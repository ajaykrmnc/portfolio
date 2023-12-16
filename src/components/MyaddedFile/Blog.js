import React from "react";
import Card from "./BlogCard";

export default function Project() {
  const githubProject = [
    {
      id: 1,
      Live: "https://ajaykrmnc.notion.site/Multisource-BFS-0d24a937ae7a4c6d8c31b22b4f57e828?pvs=4",
      Name: "Multisource BFS",
      intro: 'This is a neat little trick to optimize your code and reach peak performance'
    },
    {
      id: 6,
      Live: "https://bit.ly/ajaydsa",
      Name: "DSA Notes",
      intro: 'DSA notes for Placement Preparation'
    },
    {
      id: 7,
      Live: "https://ajaykrmnc.notion.site/Segment-Tree-1f2ea3cfa67c497c8c7213060394ec32?pvs=4",
      Name: "Segment tree templates",
      intro: 'Segment tree templates for CP and Interview Preparation'
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
