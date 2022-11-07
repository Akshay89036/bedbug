import React, { useState } from "react";
import ServiceCard from "../card/ServiceCard";
import two from "./two.png";
import three from "./three.png";
import four from "./four.png";

const Services = () => {
  const [services] = useState([
    {
      id: 1,
      title: "Bed Bug Extremination",
      image:
        two,
        des:"The safest and efficient way to kill bedbugs",
    },
    {
      id: 2,
      title: "Bed bug Inspection",
      image:
        three,
        des:"Thorough inspection before starting the work to make the service more efficient",
    },
    {
      id: 3,
      title: "Equipments Rental",
      image:
        four,
        des:"we have renting out different types of bedbug extremination equipments",
    },
  ]);

  return (
    <>
      <div id="service" className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Services </h2>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of <br />
                  using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters,
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container margin-r-l">
          <div className="row">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
