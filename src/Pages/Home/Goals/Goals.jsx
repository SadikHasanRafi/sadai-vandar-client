import React from "react";

const Goals = () => {
  return (
    <div className="min-h-[50vh] flex flex-col justify-center">
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-center font-bold text-3xl mb-10">Our Goals</p>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-gray-100 p-8">
              <p className="line-clamp-2 sm:line-clamp-none text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-100 p-8">
              <p className="line-clamp-2 sm:line-clamp-none text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>

            <blockquote className="rounded-lg bg-gray-100 p-8">
              <p className="line-clamp-2 sm:line-clamp-none text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt voluptatem alias ut provident sapiente repellendus.
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Goals;
