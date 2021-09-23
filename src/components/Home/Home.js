import React from "react";
import CardProfile from "./CardProfile";
import picOfMe from "../../images/defaultProfilePic.jpg";
import "./Home.css";
import CardSection from "./CardSection";

export default function Home() {
  return (
    <section className="home">
        <div className="profile-gallery-item">
          {/* INSERT DEVELOPER CONTENT HERE */}
          <CardProfile
            profileImage={picOfMe}
            alt="Profile picture of Jacob Roelofsz"
            profileName="Jacob Roelofsz"
            intro="Hello, my name is Jacob Roelofsz, for the past 2 years I’ve been working in the remodeling industry. I assisted with projects on renovating houses for property turnover. This gave me a brand-new insight on project management and problem solving. During that time, I also decided to explore my love for computers and technology, which led me to coding. I started with Code Academy, I taught myself HTML and CSS and decided that wasn’t enough. I knew my high school career was coming to an end soon so I decided I would attend Centriq Training to feed my drive to learn code."
            link="http://jacobroelofsz.com"
            linkText="MVC Personal Site"
          />
          <CardSection
          title="Favorite Technologies"
          sectionDescription={
            <React.Fragment>
              <ul>
                <li>ReactJS</li>
                <li>ASP.NET MVC</li>
                <li>C#</li>
              </ul>
            </React.Fragment>
          }
          />
        </div>
    </section>
  );
}
