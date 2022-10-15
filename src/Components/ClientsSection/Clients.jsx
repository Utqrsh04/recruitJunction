import React from "react";
import "./Clients.css";

import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 3,
};

const Clients = () => {
  return (
    <section>
      <div class="clients-section">
        <h1>Our Amazing Clients</h1>
        <div class="clients-row">
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            <div className="circle-card">
              <img
                className="circle-image"
                src="https://martecktalenthunt.in/wp-content/uploads/2022/02/leverage-edu-1.png"
                alt=""
              />
            </div>
            <div className="circle-card">
              {" "}
              <img
                className="circle-image"
                src="https://martecktalenthunt.in/wp-content/uploads/2022/02/innovaed.png"
                alt=""
              />
            </div>
            <div className="circle-card">
              {" "}
              <img
                className="circle-image"
                src="https://martecktalenthunt.in/wp-content/uploads/2022/02/flexc.png"
                alt=""
              />
            </div>
            <div className="circle-card">
              {" "}
              <img
                className="circle-image"
                src="https://martecktalenthunt.in/wp-content/uploads/2022/02/euro-parking-services-2048x829.png"
                alt=""
              />
            </div>
            <div className="circle-card">
              {" "}
              <img
                className="circle-image"
                src="https://martecktalenthunt.in/wp-content/uploads/2022/02/doconline.png"
                alt=""
              />
            </div>
            <div className="circle-card">
              {" "}
              <img
                className="circle-image"
                src="https://martecktalenthunt.in/wp-content/uploads/2022/02/leverage-edu-1.png"
                alt=""
              />
            </div>
            <div className="circle-card">
              {" "}
              <img
                className="circle-image"
                src="https://martecktalenthunt.in/wp-content/uploads/2022/02/leverage-edu-1.png"
                alt=""
              />
            </div>
            <div className="circle-card">
              {" "}
              <img
                className="circle-image"
                src="https://martecktalenthunt.in/wp-content/uploads/2022/02/leverage-edu-1.png"
                alt=""
              />
            </div>
            <div className="circle-card">
              {" "}
              <img
                className="circle-image"
                src="https://martecktalenthunt.in/wp-content/uploads/2022/02/leverage-edu-1.png"
                alt=""
              />
            </div>
          </Flickity>
        </div>
      </div>
    </section>
  );
};

export default Clients;
