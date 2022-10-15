import React, { useEffect, useState } from "react";

import "./OurReach.css";
import { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const OurReach = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window?.innerHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerHeight]);

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

          <VisibilitySensor
            partialVisibility
            offset={{
              top: windowHeight / 3,
              bottom: windowHeight / 3,
            }}
          >
            {({ isVisible }) => (
              <div class="ourreach-row">
                <div
                  class={`service ${
                    isVisible ? " cssanimation fadeInBottom sequence" : ""
                  }`}
                >
                  <h1 class="number-counter">
                    <span id="counter1" />+
                  </h1>
                  <h2 className="ourreachbox-text">
                    RESOURCES IN OUR DATABASE
                  </h2>
                </div>
                <div
                  class={`service ${
                    isVisible ? " cssanimation fadeInBottom sequence" : ""
                  }`}
                >
                  <h1 class="number-counter">
                    <span id="counter2" />+
                  </h1>
                  <h2 className="ourreachbox-text">YEARS OF EXPERIENCE</h2>
                </div>

                <div
                  class={`service ${
                    isVisible ? " cssanimation fadeInBottom sequence" : ""
                  }`}
                >
                  <h1 class="number-counter">
                    <span id="counter3" />+
                  </h1>
                  <h2 className="ourreachbox-text">EXPERTISE INTO DOMAINS</h2>
                </div>
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </section>
  );
};

export default OurReach;
