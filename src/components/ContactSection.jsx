import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const ContactSection = () => {
  const invert = true; // Use true for dark section styling

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Tell me about your project
          </h2>

          {/* Call to Action */}
          <div className="mt-6 flex">
            <Button href={"/contact"} invert>
              Say Hello
            </Button>
          </div>

          {/* Offices & Map */}
          <div className="mt-10 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-semibold text-white">
              My office Co-ordinates
            </h3>

            {/* Offices List */}
            <ul role="list" className="mt-6 grid gap-6 sm:grid-cols-2">
              <li>
                <Office name="" invert={invert}>
                  Puduvadavalli
                  <br />
                  Sathyamangalam
                  <br />
                  Tamil Nadu
                  <br />
                  638401
                </Office>
              </li>
            </ul>

            {/* Google Map Embed */}
            <div className="mt-8 w-full h-72 overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="My Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038.1507057639194!2d77.17957925005575!3d11.540940953263911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8d89144faf4a1%3A0x3d175cf2538b676c!2sPuduvadavalli%2C%20Tamil%20Nadu%20638401!5e1!3m2!1sen!2sin!4v1770814402985!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0 filter grayscale contrast-125"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
