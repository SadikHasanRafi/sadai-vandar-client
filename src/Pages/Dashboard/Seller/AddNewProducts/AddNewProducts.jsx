import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../../Context/AuthProvider";

const AddNewProducts = () => {
  const { user } = useContext(AuthContext);
  const [quantity, setQuantity] = useState()

  const date = new Date();

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  const [productData, setProductData] = useState({
    quantity: "",
    sellPrice: "",
    name: "",
    originalPrice: "",
    expireDate: "",
    pricePerUnit: "",
    profitAmount: "",
    company: "",
    distributorName: "",
    distributorPhoneNumber: "",
    location: "",
    preciseLocation: "",
    shopUID: user.uid,
    buyingDate: formattedDate,
    remaining: quantity,
  });
  console.log(quantity)
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

    try {
      // Send a POST request to the /products API
      const response = await axios.post(
        "http://localhost:5000/products",
        productData
      );

      setQuantity(productData.quantity)
      

      console.log(response.data); // Optional: Handle the response as needed

      // Clear the input fields
      setProductData({
        quantity: "",
        sellPrice: "",
        name: "",
        originalPrice: "",
        expireDate: "",
        pricePerUnit: "",
        profitAmount: "",
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
    }
  };

  return (
    <div className="min-h-screen flex justify-center w-full">
      <div className="my-20">
        <p className="text-center text-3xl font-semibold mb-5">Add a new product</p>
        <form className="grid grid-cols-6 gap-4 shadow-lg p-10 rounded-lg" onSubmit={handleFormSubmit}>
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
            <label className="block mb-2">Original Price:</label>
            <input
              type="number"
              className="input border-gray-300 w-full"
              placeholder="Tk."
              required
              name="originalPrice"
              value={productData.originalPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2">Selling Price:</label>
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
            <label className="block mb-2">Quantity:</label>
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
        {isLoading && <div>Loading...</div>}
      </div>
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
//     <label htmlFor="originalPrice">Original Price:</label>
//     <input
//       type="text"
//       name="originalPrice"
//       id="originalPrice"
//       value={productData.originalPrice}
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
//     <label htmlFor="pricePerUnit">Price Per Unit:</label>
//     <input
//       type="text"
//       name="pricePerUnit"
//       id="pricePerUnit"
//       value={productData.pricePerUnit}
//       onChange={handleInputChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="profitAmount">Profit Amount:</label>
//     <input
//       type="text"
//       name="profitAmount"
//       id="profitAmount"
//       value={productData.profitAmount}
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
