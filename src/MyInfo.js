import React from "react";
// import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";
import content from "./content";
import "../styles/style.css";

function NavigationItem(props) {
  return (
    <li>{props.itemName}</li>
  )
}

function NavigationBar() {
  return (
    <nav id="site-nav" role="navigation">
      <ul>
        <NavigationItem itemName={"HOME"}/>
        <NavigationItem itemName={"PROJECTS"}/>
        <NavigationItem itemName={"ABOUT"}/>
        <NavigationItem itemName={"TRAJECTORY"}/>
      </ul>
    </nav>
  )
}

function ShortDescription() {
  return (
    <div>
      {`${content.age} years old ${content.position} from ${content.location}. Currently working at ${content.company}.`}
    </div>
  );
}

function PortfolioShowcase() { 
  return (
    <div>
      <h2>{content.portfolio.length > 1 ? `This is a list of the projects I've worked on:` : `This is the project I've worked on:`}</h2>
    </div>
  )
}
function MyInfo() {
  return (
    <div>
      <NavigationBar/>
      <h1>
        Hello! I'm {content.name}
      </h1>
      <ShortDescription/>
      <PortfolioShowcase/>
    </div>
    );
}


export default hot(module) (MyInfo);