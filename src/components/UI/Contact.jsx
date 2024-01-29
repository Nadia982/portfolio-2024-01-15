import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Contact Me
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556965.22696752!2d-2.938646469620843!3d51.25523999304209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875c4afb79659df%3A0x946699b2f9eba8a1!2sGuildford!5e0!3m2!1sen!2suk!4v1706570936473!5m2!1sen!2suk" 
              className="border-0 w-full h-full "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Contact;
