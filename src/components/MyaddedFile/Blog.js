import React from "react";
import Card from "./BlogCard";

export default function Project() {
  const githubProject = [
    {
      id: 1,
      Live: "https://ajaykrmnc.notion.site/534ff5bbb3554f29802630c7bd71d280?v=c91aeeeac9ff4010a3fe35881cd8f57a&pvs=4",
      Name: "Interview Questions",
      intro: 'Some resources for Interview Preparation'
    },
    {
      id: 6,
      Live: "https://bit.ly/ajaydsa",
      Name: "DSA Notes",
      intro: 'DSA notes for Placement Preparation'
    },
    {
      id: 8,
      Live: "https://ajaykrmnc.notion.site/Competitive-Programming-3ce72de9f73e414c933903246f0244bc?pvs=4",
      Name: "CP Notes",
      intro: 'Some resources for CP Preparation'
    },
    {
      id: 9,
      Live: "https://ajaykrmnc.notion.site/History-4dc73dc797d94be3b86d6060a688aa22?pvs=4",
      Name: "Some Archive Notes",
      intro: 'Archive Notes'
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
