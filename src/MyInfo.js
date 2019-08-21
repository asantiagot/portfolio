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

// MARK: Contact info

function ContactDescription(props) {
  return (
    <div className="contact">
      <h1>{props.name}</h1>
      <h2>{props.position}</h2>
      {/* <h3>{}</h3> */}
    </div>
  );
}

function ContactImage(props) {
  return (
    <div className="contact right">
      <img src={props.image} ></img>
    </div>
  );
}

function Contact(props) {
  // const shortBio = `${}`;
  return (
    <div>
        <ContactDescription name={props.contact.name} position={props.contact.currentRole}/>
        <ContactImage image={props.contact.image}/>
    </div>
  );

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
      <Contact contact={content.contact}/>

      <ShortDescription/>
      <PortfolioShowcase/>
    </div>
    );
}


export default hot(module) (MyInfo);