import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const AddNewProducts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const date = new Date();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  
  const [productData, setProductData] = useState({
    quantity: "",
    wholesalePrice: "",
    sellPrice: "",
    name: "",
    company: "",
    distributorName: "",
    expireDate: "",
    distributorPhoneNumber: "",
    location: "",
    preciseLocation: "",
    shopUID: user?.uid,
    buyingDate: formattedDate,
  });

  console.log(productData);

  useEffect(() => {
    // Parse necessary values as numbers
    const quantity = parseInt(productData.quantity, 10);
    const sellPrice = parseFloat(productData.sellPrice);
    const wholesalePrice = parseFloat(productData.wholesalePrice);

    // Perform calculations
    const profit = sellPrice - wholesalePrice;
    const profitPerUnit = profit / quantity;
    const wholesalePricePerUnit = wholesalePrice / quantity;
    const sellPricePerUnit = sellPrice / quantity;

    // Update productData with the calculated values
    setProductData((prevProductData) => ({
      ...prevProductData,
      profitPerUnit,
      profit,
      wholesalePricePerUnit,
      sellPricePerUnit,
    }));
  }, [productData.quantity, productData.wholesalePrice, productData.sellPrice]);
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleInputChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log(productData);
    try {
      // Send a POST request to the /products API
      await axios.post(
        "http://localhost:5000/products",
        productData
      );

      // Optional: Handle the response as needed
      
      // Optional: Handle the response as needed

      // Clear the input fields
      setProductData({
        quantity: "",
        sellPrice: "",
        name: "",
        wholesalePrice: "",
        expireDate: "",
        wholesalePricePerUnit: "",
        profitPerUnit: "",
        company: "",
        distributorName: "",
        distributorPhoneNumber: "",
        location: "",
        preciseLocation: "",
      });
    } catch (error) {
      console.error("Failed to send data:", error);
    } finally {
      setIsLoading(false);
      toast.success('Successfully toasted!');
      alert("success")
      console.log("success")
    }

    navigate("/available-products");
  };

  return (
    <div className="min-h-screen flex justify-center w-full">
      <div className="my-20">
        <p className="text-center text-3xl font-semibold mb-5">
          Add a new product
        </p>
        <form
          className="grid grid-cols-6 gap-4 shadow-lg p-10 rounded-lg"
          onSubmit={handleFormSubmit}>
          <div className="col-span-6">
            <label className="block mb-2">Product Name:</label>
            <input
              type="text"
              className="input border-gray-300  w-full"
              placeholder="your product name"
              required
              name="name"
              value={productData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-2">
              <span className="text-red-500">*</span>Wholesale Price{" "}
              <small>(all products)</small>:
            </label>
            <input
              type="number"
              className="input border-gray-300 w-full"
              placeholder="Tk."
              required
              name="wholesalePrice"
              value={productData.wholesalePrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2">
              <span className="text-red-500">*</span>Selling Price{" "}
              <small>(all products)</small>:
            </label>
            <input
              type="number"
              className="input border-gray-300 w-full"
              placeholder="Tk."
              required
              name="sellPrice"
              value={productData.sellPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2">
              <span className="text-red-500">*</span>Quantity:
            </label>
            <input
              type="number"
              className="input border-gray-300 w-full"
              placeholder="quantity"
              required
              name="quantity"
              value={productData.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-3">
            <label className="block mb-2">Product Buying Date:</label>
            <input
              disabled
              type="text"
              name="buyingDate"
              className="input border-gray-300 w-full"
              value={productData.buyingDate}
            />
          </div>
          <div className="col-span-3">
            <label className="block mb-2">Product Expire Date:</label>
            <input
              type="date"
              className="input border-gray-300 w-full"
              name="expireDate"
              value={productData.expireDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-6">
            <label className="block mb-2">Company Name:</label>
            <input
              type="text"
              className="input border-gray-300 w-full"
              placeholder="product company name"
              name="company"
              value={productData.company}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-3">
            <label className="block mb-2">Distributer Name:</label>
            <input
              type="text"
              className="input border-gray-300 w-full"
              placeholder="distributor name"
              name="distributorName"
              value={productData.distributorName}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-3">
            <label className="block mb-2">Distributer Phone Number:</label>
            <input
              type="text"
              className="input border-gray-300 w-full"
              placeholder="distributor phone number"
              name="distributorPhoneNumber"
              value={productData.distributorPhoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-6">
            <label className="block mb-2">Product Category:</label>
            <input
              type="text"
              name="category"
              className="input border-gray-300 w-full"
              placeholder="product category"
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn btn-primary mt-3 col-span-6"
          />
        </form>
        {isLoading && <Loading />}
      </div>
        <Toaster></Toaster>
    </div>
  );
};

export default AddNewProducts;

//   <div>
// <form onSubmit={handleFormSubmit}>
//   <div>
//     <label htmlFor="quantity">Quantity:</label>
//     <input
//       type="text"
//       name="quantity"
//       id="quantity"
//       value={productData.quantity}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="sellPrice">Sell Price:</label>
//     <input
//       type="text"
//       name="sellPrice"
//       id="sellPrice"
//       value={productData.sellPrice}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="name">Name:</label>
//     <input
//       type="text"
//       name="name"
//       id="name"
//       value={productData.name}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="wholesalePrice">Original Price:</label>
//     <input
//       type="text"
//       name="wholesalePrice"
//       id="wholesalePrice"
//       value={productData.wholesalePrice}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="expireDate">Expire Date:</label>
//     <input
//       type="text"
//       name="expireDate"
//       id="expireDate"
//       value={productData.expireDate}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="wholesalePricePerUnit">Price Per Unit:</label>
//     <input
//       type="text"
//       name="wholesalePricePerUnit"
//       id="wholesalePricePerUnit"
//       value={productData.wholesalePricePerUnit}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="profitPerUnit">Profit Amount:</label>
//     <input
//       type="text"
//       name="profitPerUnit"
//       id="profitPerUnit"
//       value={productData.profitPerUnit}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="company">Company:</label>
//     <input
//       type="text"
//       name="company"
//       id="company"
//       value={productData.company}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="distributorName">Distributor Name:</label>
//     <input
//       type="text"
//       name="distributorName"
//       id="distributorName"
//       value={productData.distributorName}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="distributorPhoneNumber">
//       Distributor Phone Number:
//     </label>
//     <input
//       type="text"
//       name="distributorPhoneNumber"
//       id="distributorPhoneNumber"
//       value={productData.distributorPhoneNumber}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="location">Location:</label>
//     <input
//       type="text"
//       name="location"
//       id="location"
//       value={productData.location}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="preciseLocation">Precise Location:</label>
//     <input
//       type="text"
//       name="preciseLocation"
//       id="preciseLocation"
//       value={productData.preciseLocation}
//       onChange={handleInputChange}
//     />
//   </div>
//   <button type="submit">Submit</button>
// </form>
// {isLoading && <div>Loading...</div>}
// </div>
