/* eslint-disable no-unused-vars */
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React from "react";
import img from "../../../assets/pexels-satoshi-hirayama-1979828.jpg"
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage:
            `url(${img})`,
        }}>
        <div className="hero-overlay bg-opacity-80 bg-green-950"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl text-white text-center">
            <h1 className="mb-5 text-7xl font-bold -leading-4">Manage Your Purchases Efficiently and Save Costs</h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="/signup" className="btn capitalize btn-primary btn-md"
        >
          Get started
        </Link>
        <Link  className="btn btn-md btn-ghost hover:bg-transparent capitalize text-[16px]">
          <p>Learn More</p> <span className="mt-[2px]"><IconArrowNarrowRight></IconArrowNarrowRight></span>
        </Link>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
