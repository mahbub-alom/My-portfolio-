import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description:
      "UI refers to the screens, buttons, toggles, icons, and other visual elements that you interact with when using a website, app.",
    link: "learn more",
  },
  {
    name: "Development",
    description:
      "Front-end developers build the interface that users see and interact with. They create websites in HTML, CSS, and JavaScript.",
    link: "learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Digital marketing is defined as the use of digital channels to promote a product or service.",
    link: "learn more",
  },
  {
    name: "Product Branding",
    description:
      "Product branding is when marketers introduce a product to the public with its own unique identity.",
    link: "learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row lg:gap-y-16  lg:gap-x-20 lg:mt-52 lg:mb-52"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-15">
              I'm a front-end Developer with over 2 Years of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      {/* <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight></BsArrowUpRight>
                      </a> */}
                      <a className="text-gradient text-sm" href="#">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
