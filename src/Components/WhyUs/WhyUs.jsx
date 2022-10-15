import React from "react";
import "./WhyUs.css";
import Fade from "react-reveal/Fade";

const WhyUs = () => {
  return (
    <section className="whyus-section">
      <div className="whyus">
        <Fade left>
          <div className="whyus-left">
            <h1 className="whyus-primary-text">Why US</h1>

            <h3 className="whyus-secondry-text">
              We lead with a commitment to quality and integrity across the AVI
              IT Services, bringing a passion for client success and a purpose
              to serve and improve the communities in which firms operate. In a
              world where rapid change and unprecedented disruption are the new
              normal, we inspire confidence and empower change in all we do.
            </h3>
          </div>
        </Fade>
        <Fade right>
          <div className="whyus-right">
            <div className="whyus-right-cards">
              <div className="whyus-row1">
                <div class="img-card iCard-style1">
                  <div class="card-content">
                    <div class="card-image">
                      <img
                        src="../../assests/quality.png"
                        alt="whyus-cardImage"
                      />
                    </div>
                    <div class="card-text">
                      <p>
                        We understand the client’s requirements and bring most
                        qualified candidates for them
                      </p>
                    </div>
                  </div>
                </div>

                <div class="img-card iCard-style1">
                  <div class="card-content">
                    <div class="card-image">
                      <img
                        src="../../assests/speed.png"
                        alt="whyus-cardImage"
                      />
                    </div>
                    <div class="card-text">
                      <p>We have never delayed in finding the best talent</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="whyus-row2">
                <div class="img-card row2cards iCard-style1">
                  <div class="card-content">
                    <div class="card-image">
                      <img
                        src="../../assests/control.png"
                        alt="whyus-cardImage"
                      />
                    </div>
                    <div class="card-text">
                      <p>
                        We take control of all the activities required for pre
                        and post selection of the candidates
                      </p>
                    </div>
                  </div>
                </div>

                <div class="img-card row2cards iCard-style1">
                  <div class="card-content">
                    <div class="card-image">
                      <img src="../../assests/cost.png" alt="whyus-cardImage" />
                    </div>
                    <div class="card-text">
                      <p>
                        Our pricing is the best in market and inline with the
                        market trends
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default WhyUs;
