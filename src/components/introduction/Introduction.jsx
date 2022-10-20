import React from "react";

const Introduction = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="container-fluid">
          <div className="row flexcss">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="about-box">
                <h3>We help you to KILL BedBugs </h3>
                <h4>
                  Are you losing the war on bed bugs? Have you been using sprays
                  and powder and you are still getting bites?
                </h4>
                <p>
                  Bed Bugs have become immune to the pesticide used by
                  professional exterminators developed in the 1970s. Science has
                  proven that heat treatment is the most effective method of
                  killing all stages of a bed bugs and eggs within minutes after
                  reaching the thermal death temperature of 45C. Our electric
                  bug removal method uses electric heaters and is safe for
                  everyone: your children, asthma sufferers, the elderly and
                  your pets. Stay at home. There is no need to leave your house
                  during the treatment as you heat one room at a time.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="about-img">
                <figure>
                  <img src="https://img.freepik.com/premium-photo/control-pest-cimex-background-bed-bedbug-bedding_488220-24483.jpg?w=2000" alt="img" />
                </figure>
              </div>
            </div>
          </div>
          <a>Get Quote</a>
        </div>
      </div>
    </>
  );
};

export default Introduction;