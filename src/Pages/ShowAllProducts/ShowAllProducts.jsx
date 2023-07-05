import { useEffect, useState } from "react";

const ShowAllProducts = () => {
  const [datum, setDatum] = useState([]);
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setDatum(json));
  }, [])
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="my-20">
        <p className="text-center font-semibold mb-10 text-3xl">Products</p>
        <div className="w-[70vw] grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-2">
          { datum.map((data, index) => (
              <div className="bg-gray-50 p-4 sm:p-6" key={index}>
                {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                10th Oct 2022
              </time> */}

                <div className="">
                  <h3 className="mt-0.5 text-lg text-gray-900">{data.title}</h3>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {data.body}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn">See details</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShowAllProducts;
