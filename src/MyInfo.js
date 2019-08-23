import React from "react";
// import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";
import content from "./content";
import "../styles/style.css";

function NavigationItem(props) {
  return (
    <a href={`#${props.itemName}`}>
      <li>
        {props.itemName.toUpperCase()}
      </li>
    </a>

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
    <section className="contact">
      <h1>{props.contact.name}</h1>
      <h2>{props.contact.currentRole}</h2>
      <h3>
        {`${props.contact.age} years old ${props.contact.currentRole} from ${props.contact.location}. Currently working at ${props.contact.company}.`}
      </h3>
    </section>
  );
}

function ContactImage(props) {
  return (
    <section className="contact right">
      <img src={props.image} ></img>
    </section>
  );
}

function Contact(props) {
  return (
    <section className="contact">
        <ContactDescription contact={props.contact}/>
        <ContactImage image={props.contact.image}/>
    </section>
  );

}

function PortfolioShowcase() { 
  return (
    <section id="#projects">
      <h2>{content.projects.length > 1 ? `This is a list of the projects I've worked on:` : `This is the project I've worked on:`}</h2>
    </section>
  )
}

function Main(props) {
  return(
    <main>
      <Contact contact={props.contact}/>
      <PortfolioShowcase/>
    </main>
  );
}

function Portfolio() {

  let categories = Object.keys(content);
  return (
    <div>
      <nav>
        <NavigationBar categories={categories}/>
      </nav>
      <main id="#contact">
        <Main contact={content.contact}/>
      </main>
    </div>
  );
}

export default hot(module) (Portfolio);