import React from "react";
import "./OurReach.css";
import { useCountUp } from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";

const OurReach = () => {
  useCountUp({
    ref: "counter1",
    end: 3000000,
    enableScrollSpy: true,
    scrollSpyDelay: 0,
  });

  useCountUp({
    ref: "counter2",
    end: 15,
    enableScrollSpy: true,
    scrollSpyDelay: 0,
  });

  useCountUp({
    ref: "counter3",
    end: 15,
    enableScrollSpy: true,
    scrollSpyDelay: 0,
  });

  return (
    <section id="ourreach" className="ourreach">
      <div className="ourreach-section">
        <div className="ourreach-content">
          <h1 className="ourreach-primary-text">Our Reach</h1>
          <div class="ourreach-row">
            <div class="ourreach-box cssanimation sequence fadeInBottom">
              <h1 class="number-counter">
                <span id="counter1" />+
              </h1>
              <h2 className="ourreachbox-text">RESOURCES IN OUR DATABASE</h2>
            </div>
            <div class="ourreach-box cssanimation sequence fadeInBottom">
              <h1 class="number-counter">
                <span id="counter2" />+
              </h1>
              <h2 className="ourreachbox-text">YEARS OF EXPERIENCE</h2>
            </div>

            <div class="ourreach-box cssanimation sequence fadeInBottom">
              <h1 class="number-counter">
                <span id="counter3" />+
              </h1>
              <h2 className="ourreachbox-text">EXPERTISE INTO DOMAINS</h2>
            </div>
          </div>

          {/* <div class="ourreach-row">
            <div class="ourreach-box2 cssanimation sequence fadeInBottom">
              <h1 class="number-counter">
                <span id="counter3" />+
              </h1>
              <h2 className="ourreachbox-text">
                Cities with our network and reach
              </h2>
            </div>
            <div class="ourreach-box2 cssanimation sequence fadeInBottom">
              <h1 class="number-counter">
                <span id="counter4" />+
              </h1>
              <h2 className="ourreachbox-text">
                Clients across different segments
              </h2>
            </div>

            <div class="ourreach-box2 cssanimation sequence fadeInBottom">
              <h1 class="number-counter">
                <span id="counter5" />+
              </h1>
              <h2 className="ourreachbox-text">
                Cities with our network and reach
              </h2>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OurReach;
