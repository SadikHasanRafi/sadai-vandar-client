import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import axios from "axios";
import Loading from "../../../../Components/Loading/Loading";

const AllExpiredProducts = () => {
  const { user } = useContext(AuthContext);
  const [expiredProducts, setExpiredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${user?.uid}`
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
    setIsLoading(false);
  }, [user?.uid]);

  const handleDeleteProducts = async (expiredProduct) => {
    try {
      setIsLoading(true);
      const reply = await axios.delete(
        `http://localhost:5000/delete_products/${expiredProduct._id}`
      );
      if (reply.status === 200) {
        const response = await axios.get(
          `http://localhost:5000/products/${user?.uid}`
        );
        if (response.data) {
          const today = new Date();
          const expiredProducts = response.data.filter((product) => {
            const expireDate = new Date(product.expireDate);
            return expireDate < today;
          });
          setExpiredProducts(expiredProducts);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <div>
            <div className="flex justify-center w-full">
              <div className="my-20">
                <p className="text-3xl text-center font-semibold mb-10">
                  All expired products ({expiredProducts.length})
                  {expiredProducts.length === 0 && (
                    <div>No Expired Products Found</div>
                  )}
                </p>
                {expiredProducts.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="table table-md">
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
                            <td>Tk. {expiredProduct.wholesalePrice}</td>
                            <td>Tk. {expiredProduct.sellPrice}</td>
                            <td>
                              Tk.{" "}
                              {expiredProduct.sellPrice /
                                expiredProduct.quantity}
                            </td>
                            <td>{expiredProduct.expireDate}</td>
                            <td>
                              Tk.{" "}
                              {expiredProduct.sellPrice -
                                expiredProduct.wholesalePrice}
                            </td>
                            <td>{expiredProduct.quantity}</td>
                            <td>{expiredProduct.distributorName}</td>
                            <td>{expiredProduct.distributorPhoneNumber}</td>
                            <td>
                            <button
                              className="btn-ghost btn text-error btn-sm m-[7px] hover:btn-error"
                              key={index}
                              onClick={() =>
                                handleDeleteProducts(expiredProduct)
                              }>
                              Delete
                            </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllExpiredProducts;
