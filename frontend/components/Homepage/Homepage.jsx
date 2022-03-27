import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <section className="homepage-container">
      <div className="left-hook"></div>
      <div className="right-hook"></div>
      <div className="homepage-main">
        <div className="speechcards">
          <div className="info-cards">
            <div className="info-cards__left">
              <img src={window.homepageSearch}></img>
              <p>
                Find the best answer to your technical questions, help others
                answers theirs
              </p>
              <Link to={`/questions`}>
                <button>Go to questions</button>
              </Link>
            </div>

            <div className="info-cards__right">
              <img className="saturn" src={window.homepageSaturn}></img>
              <p>Want a secure, private space for your technical knowledge?</p>
              {/* <div className="personal-links-top">
                <a href="https://github.com/kevinledev">
                  <i className="fa fa-github"></i>
                </a>
              </div> */}
              <div className="personal-links">
                <a href="https://github.com/kevinledev">
                  {/* <i className="fa fa-github"></i> */}
                  Github
                </a>
                <a
                  className="linkedin-home"
                  href="https://www.linkedin.com/in/kvnle/"
                >
                  {/* <i id="linkedin" className="fa fa-linkedin"></i> */}
                  LinkedIn
                </a>
                {/* <div className="angellist-home">
                  <i class="fa fa-angellist"></i>
                </div> */}
              </div>
              {/* <p>View my developer links</p> */}
            </div>
          </div>
          <div className="speech-bubbles">
            <div className="speechbubble-left"></div>
            <div className="speechbubble-right"></div>
          </div>
        </div>

        <div className="left-diagonal-windows">
          <div className="ldwl"></div>
          <div className="ldwr"></div>
        </div>
        <div className="right-diagonal-windows">
          <div className="rdwl"></div>
          <div className="rdwr"></div>
        </div>

        <div className="textlines-art">
          <div className="join-tl">
            <div className="textline1"></div>
            <div className="textline2"></div>
          </div>
          <div className="textline3"></div>
          <div className="join-tl">
            <div className="textline4"></div>
            <div className="textline4"></div>
          </div>
          <div className="textline1"></div>
          <div className="textline1"></div>
          <div className="textline1"></div>
          <div className="textline3"></div>
          <div className="join-tl">
            <div className="textline2"></div>
            <div className="textline1"></div>
          </div>
          <div className="join-tl">
            <div className="textline4"></div>
            <div className="textline2"></div>
          </div>
          <div className="join-tl">
            <div className="textline2"></div>
            <div className="textline1"></div>
          </div>
          <div className="textline3"></div>
          <div className="textline5"></div>
        </div>

        <div className="left-diagonal-windows">
          <div className="ldwl"></div>
          <div className="ldwr"></div>
        </div>
        <div className="right-diagonal-windows">
          <div className="rdwl"></div>
          <div className="rdwr"></div>
        </div>

        <div className="textlines-art-2">
          <div className="rtextline5"></div>
          <div className="rtextline3"></div>
          <div className="join-tl">
            <div className="rtextline2"></div>
            <div className="rtextline1"></div>
          </div>
          <div className="join-tl">
            <div className="rtextline4"></div>
            <div className="rtextline2"></div>
          </div>
          <div className="join-tl">
            <div className="rtextline2"></div>
            <div className="rtextline1"></div>
          </div>
          <div className="rtextline3"></div>
          <div className="rtextline1"></div>
          <div className="rtextline1"></div>
          <div className="rtextline1"></div>
          <div className="join-tl">
            <div className="rtextline4"></div>
            <div className="rtextline4"></div>
          </div>
          <div className="join-tl">
            <div className="rtextline1"></div>
            <div className="rtextline2"></div>
          </div>
          <div className="rtextline3"></div>
        </div>

        <div className="welcome-text-container">
          <h1>
            Every <span>time traveler</span> has a
          </h1>
          <h1 className="welcomebottom">tab open to Stack Overclone</h1>
        </div>
        <div className="dash-thing"></div>
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
      </div>
    </section>
  );
};
export default Homepage;
