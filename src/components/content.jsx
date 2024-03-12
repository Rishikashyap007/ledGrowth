import React from "react";
import './content.css'
function Content(){
    return(
        <div className="exclusive-content-container">
        <div className="exclusive-content-section">
          <div className="exclusive-content-text-container">
            <h2 className="exclusive-content-heading">
              GX members are leaders in marquee companies
            </h2>
          </div>
          <div className="exclusive-image-container">
            <img
              src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6530995d295eb56d6df5922f_elevate-logos-p-1080.png"
              alt="exclusive companies"
              className="exclusive-image"
            />
          </div>
          <button id="btn1"> Become A Member</button>
        </div>
      </div> 
    );
}

export default Content;