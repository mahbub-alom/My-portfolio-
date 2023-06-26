import React from "react";
import allchef from "../assets/allchef.png";
import toy from '../assets/portfolio1.png'
import cricket from '../assets/portfolio3.png'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const MyAllProjects = () => {
  return (
    <>
      <h2 className="text-gradient text-4xl text-center">My Projects</h2>
      <section
        id="myallprojects"
        className=" flex justify-center items-center section"
      >
        <motion.div
          variants={fadeIn("down", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-7"
        >
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={allchef} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">All Chef</h2>
              <p>Here i show worldwide all popular chef</p>
              <div className="card-actions justify-end">
                <a
                  href="https://gourmet-place-chef.web.app/"
                  className="btn btn-primary"
                >
                  See Details
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={toy} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Toy Marketplace</h2>
              <p>Here i show a toy e-commerce website</p>
              <div className="card-actions justify-end">
                <a
                  href="https://barbie-doll-house.web.app/"
                  className="btn btn-primary"
                >
                  See Details
                </a>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={cricket} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Crickter Stars club</h2>
              <p>Here i show a summercamp cricket club</p>
              <div className="card-actions justify-end">
                <a
                  href="https://cricket-stars-club.web.app/"
                  className="btn btn-primary"
                >
                  See Details
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default MyAllProjects;
