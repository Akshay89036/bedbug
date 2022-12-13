import React from "react";
import './introduction.css';
import two from './one.png'
import three from './one.png'
import four from './one.png'

const Introduction = () => {
  return (

    <>

      <div className="container mainconatiner">
        <div className="row">
          <div className="col-md-8  " id="div1">
            {/* Our Pest Control Services
We permanently remove pests so you can love your space again */}
            <h2>BYEBYE BEDBUG Services
            </h2>

            <div className="cardwrapper">
              <div className="servcard"><div class="card-body p-4" style={{ height: "10em" }}>
                <img
                  src={ two }
                  alt=""
                  class="img-fluid d-block mx-auto mb-3 " style={{ height: "8em" }}
                />Bed Bug Extremination</div>
                </div>
              <div className="servcard">Bed bug Inspection</div>
              <div className="servcard">Equipments Rental</div>
            </div>

          </div>
          <div className="col-md-4 " id="div2">
            <form action="" className="brform formwrap">
              <div className="formheadingdiv"><h2 className="formheading"> GET A FREE ESTIMATE </h2></div>
              <input type="text" className="forminput" placeholder="Full Name" />
              <input type="text" className="forminput" placeholder="Email Address" />
              <input type="text" className="forminput" placeholder="Phone Number" />
              <input type="text" className="forminput" placeholder="Full Address" />
              <textarea rows="4" className="forminput" form="usrform" placeholder="Please provide the details to your questions & concerns and we'll get back to you as soon as possible "></textarea>
              <button className="forminput formbutton">Send Request</button>
            </form>

          </div>

        </div>
      </div>

    </>
  )
};

export default Introduction;


//   <div id="about" className="about">
//   <div className="container-fluid">
//     <div className="row flexcss">
//       <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
//         <div className="about-box">
//           <h3>We help you to KILL BedBugs </h3>
//           <h4>
//             Are you losing the war on bed bugs? Have you been using sprays
//             and powder and you are still getting bites?
//           </h4>
//           <p>
//             Bed Bugs have become immune to the pesticide used by
//             professional exterminators developed in the 1970s. Science has
//             proven that heat treatment is the most effective method of
//             killing all stages of bed bugs and eggs within minutes after
//             reaching the thermal death temperature of 45C. Our electric
//             bug removal method uses electric heaters and is safe for
//             everyone: your children, asthma sufferers, the elderly and
//             your pets. Stay at home. There is no need to leave your house
//             during the treatment as we heat one room at a time.
//           </p>
//         </div>
//       </div>
//       <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
//         <div className="about-img">
//           <figure>
//             <img src={one} alt="img"/>
//           </figure>
//         </div>
//       </div>
//     </div>
//     <a  href="#contacta" className="quote_button boxforquote" id="contact_us">Get Quote</a>
//   </div>
// </div>
    // <section class="slider_section">
    //   <div
    //     id="myCarousel"
    //     class="carousel slide banner-main"
    //     data-ride="carousel"
    //   >
    //     <div class="carousel-inner">
    //       <div class="carousel-item active">
    //         <img
    //           class="first-slide"
    //           src={"https://www.thesaurus.com/e/wp-content/uploads/2022/06/20220610_familyCap_1000x562.jpg"}
    //           alt="First slide"
    //         />
    //         <div class="container">
    //           <div class="carousel-caption relative">
    //             <h3 className="banner_h3">We help you to KILL BedBugs </h3>
    //             <h4 className="banner_h4">
    //               Are you losing the war on bed bugs? Have you been using sprays
    //               and powder and you are still getting bites?
    //             </h4>
    //             <p className="banner_p">
    //               Bed Bugs have become immune to the pesticide used by
    //               professional exterminators developed in the 1970s. Science has
    //               proven that heat treatment is the most effective method of
    //               killing all stages of a bed bugs and eggs within minutes after
    //               reaching the thermal death temperature of 45C. Our electric
    //               bug removal method uses electric heaters and is safe for
    //               everyone: your children, asthma sufferers, the elderly and
    //               your pets. Stay at home. There is no need to leave your house
    //               during the treatment as you heat one room at a time.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>