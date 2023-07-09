/* eslint-disable no-unused-vars */
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-primary">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
      <p className="mt-6 text-base leading-7">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="/"
          className="btn capitalize btn-primary btn-md"
        >
          Go back home
        </Link>
        <Link to="contact-us" className="btn btn-md btn-ghost hover:bg-white hover:text-primary capitalize text-[16px]">
          <p>Contact support</p> <span className="mt-[2px]"><IconArrowNarrowRight></IconArrowNarrowRight></span>
        </Link>
      </div>
    </div>
  </main>
  );
};

export default NotFound;
