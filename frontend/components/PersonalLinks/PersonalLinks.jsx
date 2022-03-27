import React from "react";

const PersonalLinks = () => {
  return (
    <div className="personal-links-container">
      <div className="floating-plinks">
        <div className="fixed-links">
        <a id="linkedin" href="https://www.linkedin.com/in/kvnle/">
          <i id="linkedin" className="fa fa-linkedin"></i>
        </a>
        <a id="github" href="https://github.com/kevinledev">
          <i className="fa fa-github"></i>
        </a>
        {/* <i id="angellist" class="fa fa-angellist"></i> */}
        </div>
      </div>
    </div>
  );
};

export default PersonalLinks;
