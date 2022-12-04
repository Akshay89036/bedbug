import React from "react";
import ContactUs from "./contact-us/ContactUs";
import Introduction from "./introduction/Introduction";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";

const MainPage = () => {
  return (
    <>
      <Introduction />
      <Services />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default MainPage;
