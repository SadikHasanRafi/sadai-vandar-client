import React, { useState } from "react";
import useMultipleAPIs from "../../Hooks/useMultipleAPIs";
import { IconSearch } from "@tabler/icons-react";

const ShowAllProduct = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { products } = useMultipleAPIs();
  //   setFilteredData(products)

  const handleInputChange = (event) => {
    const searchInput = event.target.value.trim().toLowerCase();
    if (searchInput === "") {
      setFilteredData(products);
    } else {
      const filteredProducts = products.filter((product) =>
        product?.name.toLowerCase().includes(searchInput)
      );
      setFilteredData(filteredProducts);
    }
  };

  console.log(products);
  return (
    <div className="min-h-screen flex w-full justify-center">
      <div className="my-20">
        <p className="text-center font-semibold text-3xl mb-10">All Products</p>
        <div className="w-full flex justify-center mb-12 join">
          <input
            type="text"
            placeholder="Search any product by category"
            className="input border-gray-300 w-[30vw] join-item"
            onChange={handleInputChange}
          />
          <button className="btn join-item btn-primary">
            Search <IconSearch size={16}></IconSearch>
          </button>
        </div>
        <div className="w-[60vw]">
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-4 gap-6">
              {filteredData.map((product, index) => (
                <div key={index}>
                  <div className="p-5 shadow-md text-primary-content rounded-lg h-full">
                    <div className="text-black mb-5">
                      <h2 className="text-xl font-semibold mb-3">
                        {product.name || "Name Undefined"}
                      </h2>
                      <h2>Company: {product.company || "Company Undefined"}</h2>
                      <h2>
                        Location: {product.location || "Location Undefined"}
                      </h2>
                      <h2>
                        Precise Location:{" "}
                        {product.preciseLocation || "Location Undefined"}
                      </h2>
                      <h2>Price: Tk.{product.sellPrice || " Undefined"}</h2>
                    </div>
                    <div className="flex justify-end">
                      <button className="btn btn-primary btn-sm btn-outline">
                        + Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mt-24 text-2xl italic">No product found</div>
          ) }
        </div>
      </div>
    </div>
  );
};

export default ShowAllProduct;
