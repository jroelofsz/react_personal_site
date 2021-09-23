import React from "react";

export default function CardProfile(props) {
  return (
    <section className="col-md-3">
      <h1>ABOUT ME</h1>
        <img src={props.profileImage} alt={props.alt}  />
        <h1>{props.profileName}</h1>
        <p>{props.intro}</p>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="click_button"
        >
          {props.linkText}
        </a>
        
    
    </section>
  );
}
