import React from "react";
// import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";
import content from "./content";
import "../styles/style.css";

function NavigationItem(props) {
  return (
    <li>
      <a href={`#${props.itemName}`}>
        {props.itemName.toUpperCase()}
      </a>
    </li>
  );
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
  );
}

// MARK: Accounts

function Account(props) {
  const icon = `fab fa-${props.name}`;
  console.log(icon);

  return (
    <a href={props.url}>
      <i className={icon}>
      </i>
    </a>
  );
}

// MARK: Contact info

function ContactAccounts(props) {
  const keys = Object.keys(props.accounts);
  return (
    <section className="accountBar">
      {keys.map((value, index) => {
        return(
          <Account name={value} key={index} url={props.accounts[value]}/>
        );
      })}
    </section>
  );
}

function ContactDescription(props) {
  return (
    <section className="description">
      <h1>{props.contact.name}</h1>
      <h2>{props.contact.currentRole}</h2>
      <h3>
        {`${props.contact.age} years old ${props.contact.currentRole} from ${props.contact.location}. Currently working at ${props.contact.company}.`}
      </h3>
      <ContactAccounts accounts={props.accounts}/>
    </section>
  );
}

function ContactImage(props) {
  return (
    <section className="image">
      <img src={props.image} ></img>
    </section>
  );
}

function Contact(props) {
  return (
    <section className="contact">
        <ContactDescription contact={props.contact} accounts={props.accounts}/>
        {/* <ContactImage image={props.contact.image}/> */}
    </section>
  );
}

function PortfolioShowcase() { 
  return (
    <section id="#projects">
      {/* <h2>{content.projects.length > 1 ? `This is a list of the projects I've worked on:` : `This is the project I've worked on:`}</h2> */}
      <h2>{`A cool site in progress! :)`}</h2>
    </section>
  );
}

function Main(props) {
  return(
    <main>
      <Contact contact={props.content.contact} accounts={props.content.accounts}/>
      <PortfolioShowcase/>
    </main>
  );
}

function Portfolio() {

  let categories = Object.keys(content);
  return (
    <React.Fragment>
      {/* <NavigationBar categories={categories}/> */}
      <Main content={content}/>
    </React.Fragment>
  );
}

export default hot(module) (Portfolio);