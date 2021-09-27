import React, {useState} from 'react'
import siteLogo from "../images/JRoelofszLogo.png";

export default function Header(props) {
    const [toggleNav, setToggleNav] = useState(false);

    const handleContentChange = (content) => {
        props.setShowContent(content);

        setToggleNav(false);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
  return (
    <header>
      <nav className="navbar navbar-exapnd-lg">
        <button className="navbar-brand">
          <img src={siteLogo} alt="Jacob Roelofsz site logo"/>
        </button>
        <button className="menuToggle" onClick={() => setToggleNav(true)}>
            <div className="hamburger-outer">
                <div className="hamburger-inner"></div>
                <div className="hamburger-inner"></div>
                <div className="hamburger-inner"></div>
            </div>
        </button>
        {toggleNav && (
            <div className="menu">
                <button className="close-menu" onClick={() => setToggleNav(false)}>
                    &times;
                </button>
                <ul>
                    <li onClick={() => handleContentChange("Home")}>Home</li>
                    <li onClick={() => handleContentChange("Portfolio")}>Portfolio (Hard coded)</li>
                    <li onClick={() => handleContentChange("ReactLink")}>Portfolio (Using Data)</li>
                </ul>
            </div>
        )}
      </nav>
    </header>
  );
}
