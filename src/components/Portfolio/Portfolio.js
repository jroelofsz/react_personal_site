import React from "react";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="mainContent">
        <h2 className="m.c.Heading">Portfolio Items</h2>
        <ul className="portfolioItems">
          <li className="portItem">
            <a
              href="http://storefront.jacobroelofsz.com"
              className="portfolioItem"
              target="_blank"
              rel="noreferrer"
            >
              ASP.NET MVC Storefront Application
            </a>
          </li>
          <li className="portItem">
            {" "}
            <a
              href="http://jacobroelofsz.com"
              className="portfolioItem"
              target="_blank"
              rel="noreferrer"
            >
              MVC Personal Site
            </a>
          </li>
          <li className="portItem">
            {" "}
            <a
              href="http://fed1studioproject.jacobroelofsz.com"
              className="portfolioItem"
              target="_blank"
              rel="noreferrer"
            >
              FED1 Studio Project (HTML & CSS only)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
