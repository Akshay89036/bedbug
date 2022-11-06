import React, { useState } from "react";

const Testimonials = () => {
  return (
    <div id="screenshot" class="Screenshot">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div className="titlepage">
              <h2>Happy Client Testimonials</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div
              id="main_slider"
              class="carousel slide banner-main"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <span class="first-slide">
                    bedbugzbgone is definitely a company I would recommend to
                    anyone dealing with bed bug issues. We went for heat
                    treatment and were very happy with the easy prep <br />
                    vthey asked us to do. All other companies were asking for a
                    lot of prep work which would’ve have taken weeks to
                    complete. After two weeks, the owner of the company himself
                    came to do an inspection to make sure everything was good.
                    So far so good!"
                  </span>
                  <div className="testiminial-author">text</div>
                </div>
                <div class="carousel-item">
                  <span class="second-slide">
                    After researching options we decided to go with
                    bedbugzbgone. They provided a one day treatment with less
                    prep work and a guarantee.
                    <br /> The technicians were professional and spent the day
                    at our home ensuring all areas of our home were treated with
                    the high temperature. When we returned home we were relieved
                    and pleased with the service provided. We knew right away
                    our home was treated with care. After a 2 week inspection we
                    have seen no evidence of any bedbugs. Would recommend
                    bedbugzbgone.
                  </span>
                  <div className="testiminial-author">text</div>
                </div>
                <div class="carousel-item">
                  <span class="third-slide">
                    Bedbugzbgone is great, very experienced and professional to
                    fight bed bugs. I live in a condo and I had a problem with
                    bed bugs,
                    <br />
                    he told me that they are coming from your neighbor unit, and
                    he was correct. he figured out the whole problem from the
                    source, and I am very pressed to deal with pestend . I am
                    highly recommending Bedbugzbgone
                  </span>
                  <div className="testiminial-author">text</div>
                </div>
              </div>
              <a class="" href="#main_slider" role="button" data-slide="prev">
                <i class="fa fa-square-arrow-left"></i>
              </a>
              <a class="" href="#main_slider" role="button" data-slide="next">
                <i class="fa fa-square-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
