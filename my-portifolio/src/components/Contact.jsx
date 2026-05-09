import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="py-12 px-6 md:px-12 lg:px-24 max-w-330 mx-auto mb-30 mt-25 flex flex-col md:flex-row gap-12"
    >
      <div className="w-full md:w-1/2">
        <h3 className="text-xl font-main text-font font-medium">
          Vamos trabalhar juntos ?
        </h3>
        <p className="text-s font-others mt-3 text-font font-light">
          Sempre estou interessada em fazer parte de novos projetos e
          oportunidades. Se você tiver alguma pergunta ou apenas quiser dar um
          oi, se sinta livre em me chamar
        </p>

        <div className="mt-15">
          <a href="">
            <p className="flex mt-4 gap-4 items-center text-font font-main">
              {" "}
              <BiLogoGmail className="text-2xl" /> niethilley@gmail.com
            </p>
          </a>
          <a href="">
            <p className="flex mt-4 gap-4 items-center text-font font-main">
              {" "}
              <BiLogoLinkedin className="text-2xl" />
              Niethilley Braz
            </p>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
