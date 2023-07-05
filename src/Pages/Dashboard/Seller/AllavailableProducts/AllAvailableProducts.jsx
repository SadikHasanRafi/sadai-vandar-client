import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import axios from "axios";
import Loading from "../../../../Components/Loading/Loading";

const AllAvailableProducts = () => {
  const [datum, setDatum] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${user.uid}`);
        if (response.data) {
          const filteredData = response.data.filter((product) => {
            const today = new Date();
            const expireDate = new Date(product.expireDate);
            const isValid = expireDate > today;
            const isShopProduct = product.shopUID === user.uid;
            return isValid && isShopProduct;
          });
          setDatum(filteredData);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }finally{
        console.log(datum)
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center w-full">
      <div className="my-20">
        <p className="text-3xl text-center font-semibold mb-10">
          Available Products ({datum.length})
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
            {datum.map((data, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.company}</td>
                <td>Tk. {data.originalPrice}</td>
                <td>Tk. {data.sellPrice}</td>
                <td>Tk. {data.sellPrice / data.quantity}</td>
                <td>{data.expireDate}</td>
                <td>Tk. {data.sellPrice - data.originalPrice}</td>
                <td>{data.quantity}</td>
                <td>{data.distributorName}</td>
                <td>{data.distributorPhoneNumber}</td>
                <button className="btn-ghost btn text-error btn-sm m-[7px] hover:btn-error" onClick={() => console.log(data)}>Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default AllAvailableProducts;
