import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <section className="homepage-container">
      {/* <div className="left-hook"></div> */}
      {/* <div className="right-hook"></div> */}
      <div className="homepage-main">
        <div className="speechcards">
          <div className="info-cards">
            <div className="info-cards__left">
              <p>
                Find the best answer to your technical questions, help others
                answers theirs
              </p>
              <Link to={`/questions`}>
                <button>Jump to questions</button>
              </Link>
            </div>

            <div className="info-cards__right">
              <p>
                Find the best answer to your technical questions, help others
                answers theirs
              </p>
              <button>this goes somewhere</button>
            </div>
          </div>
          <div className="speech-bubbles">
            <div className="speechbubble-left"></div>
            <div className="speechbubble-right"></div>
          </div>
        </div>

        <div className="welcome-text-container">
          <h1>
            Every <span>developer</span> has a
          </h1>
          <h1>tab open to Stack Overclone</h1>
        </div>
        <div className="static-container">
          <div className="static-container-el">
            <h4>100+ trillion</h4>
            <p>monthly visitors to Stack Overclone</p>
          </div>
          <div className="static-container-el">
            <h4>45+ quadrillion</h4>
            <p>Times a developer got help since 2042</p>
          </div>
          <div className="static-container-el">
            <h4>1790% ROI</h4>
            <p>from companies using Stack Overclone for Teams</p>
          </div>
          <div className="static-container-el">
            <h4>500,000+</h4>
            <p>Stack Overclone for Teams instances active every day</p>
          </div>
        </div>

        {/* <div className="big-info-cards">
          <div className="big-info__left">
            <h2>Stack Over flow logo</h2>
            <img className="logo-main"></img>
            <h1>
              A public platform building the definitive collection of coding
              questions & answers
            </h1>
            <p>
              A commjnity-based space to fint and contribute answers to technial
              callage, and one of the most popular websites in the world.
            </p>
            <button>Join the community</button>
          </div>
          <div className="big-info__right">
            <h2>Stack Over flow Teams</h2>
            <img className="teams-main" />
            <h1>
              A private collaboration & knowledge sharing SaaS platform for
              companies
            </h1>
            <p>
              A web-based platform to increate prodicutivity, decrease cycle
              times, accelarate time to makret, and protect institional
              knowledge.
            </p>
            <p>Getting start</p>
            <div className="buttons-container">
              <button>For large organizations</button>
              <button>For small teams</button>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};
export default Homepage;
