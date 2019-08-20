import React from "react";
// import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";
import content from "./content";
import "../styles/style.css";

function NavigationItem(props) {
  return (
    <li>{props.itemName.toUpperCase()}</li>
  )
}

function NavigationBar(props) {
  return (
    <nav id="site-nav" role="navigation">
      <ul>
        {props.categories.map((value, index) => {
          return <NavigationItem key={index} itemName={value}/>
        })}
      </ul>
    </nav>
  )
}

function ShortDescription() {
  return (
    <div>
      {`${content.contact.age} years old ${content.contact.currentRole} from ${content.contact.location}. Currently working at ${content.contact.company}.`}
    </div>
  );
}

function PortfolioShowcase() { 
  return (
    <div>
      <h2>{content.projects.length > 1 ? `This is a list of the projects I've worked on:` : `This is the project I've worked on:`}</h2>
    </div>
  )
}
function MyInfo() {

  let categories = Object.keys(content);
  return (
    <div>
      <NavigationBar categories={categories}/>
      <h1>
        Hello! I'm {content.contact.name}
      </h1>
      <ShortDescription/>
      <PortfolioShowcase/>
    </div>
    );
}


export default hot(module) (MyInfo);