import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import axios from "axios";

const AllExpiredProducts = () => {
  const { user } = useContext(AuthContext);
  const [expiredProducts, setExpiredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${user.uid}`
        );
        if (response.data) {
          const today = new Date();
          const expiredProducts = response.data.filter((product) => {
            const expireDate = new Date(product.expireDate);
            return expireDate < today;
          });
          setExpiredProducts(expiredProducts);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, [user.uid]);

  return (
    <div className="flex justify-center w-full">
      <div className="my-20">
        <p className="text-3xl text-center font-semibold mb-10">
          All expired products ({expiredProducts.length})
        </p>
        <div>
        <table className="table">
          <thead>
            <tr className="text-[16px] capitalize">
              <th></th>
              <th>Product</th>
              <th>Company</th>
              <th>Original Price</th>
              <th>Selling Price</th>
              <th>Price Per Unit</th>
              <th>Expire Date</th>
              <th>Profit</th>
              <th>Quantity</th>
              <th>Distributor</th>
              <th>Distributor Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {expiredProducts.map((expiredProduct, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{expiredProduct.name}</td>
                <td>{expiredProduct.company}</td>
                <td>Tk. {expiredProduct.originalPrice}</td>
                <td>Tk. {expiredProduct.sellPrice}</td>
                <td>Tk. {expiredProduct.sellPrice / expiredProduct.quantity}</td>
                <td>{expiredProduct.expireDate}</td>
                <td>Tk. {expiredProduct.sellPrice - expiredProduct.originalPrice}</td>
                <td>{expiredProduct.quantity}</td>
                <td>{expiredProduct.distributorName}</td>
                <td>{expiredProduct.distributorPhoneNumber}</td>
                <button className="btn-ghost btn text-error btn-sm m-[7px] hover:btn-error" onClick={() => console.log(expiredProduct)}>Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default AllExpiredProducts;
