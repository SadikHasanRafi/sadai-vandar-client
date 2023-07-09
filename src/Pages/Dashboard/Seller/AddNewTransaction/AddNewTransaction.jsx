import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../../Components/Loading/Loading";
import axios from "axios";
import useMultipleAPIs from "../../../../Hooks/useMultipleAPIs";

const AddNewTransaction = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState([]);

  const [inputValues, setInputValues] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [email, setEmail] = useState("");
  const { registeredUsers } = useMultipleAPIs();
  const [userFound, setUserFound] = useState("");
  const [buyerUID, setBuyerUID] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [insertedId, setInsertedId] = useState("");
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const responseProducts = await axios.get(
          "http://localhost:5000/products"
        );
        let products = responseProducts.data;
        products = products.filter((item) => item.shopUID === user?.uid);
        setProductData(products);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user?.uid]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleAddFields = (product, index) => {
    const inputValue = inputValues[index];
    const updatedProducts = [...productData]; // Create a copy of the productData array
    updatedProducts[index].orderAmount = inputValue; // Add orderAmount property to the corresponding product

    // Create a new array to store the updated products
    const updatedProductsArray = [...selectedProducts, updatedProducts[index]];
    console.log("Updated products array:", updatedProductsArray);

    // Update the state variable with the updated products array
    setSelectedProducts(updatedProductsArray);
  };

  const handleRemove = (product) => {
    const updatedProducts = selectedProducts.filter(
      (selectedProduct) => selectedProduct._id !== product._id
    );
    setSelectedProducts(updatedProducts);
  };

  const handleEmailSearch = async () => {
    const foundUser = registeredUsers.find((user) => user?.email === email);

    if (foundUser) {
      setBuyerUID(foundUser?.uid);
      setUserFound("User found.");
      console.log(foundUser);
    } else {
      console.log("Anonymous");
      setBuyerUID("anonymous");
      setUserFound("User not found.");
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedProducts);
    setUserFound("");

    try {
      // Iterate over the selectedProducts array
      for (const transaction of selectedProducts) {
        // Make a POST request for each transaction
        console.log(transaction);
        //   console.log("🚀 ~ file: AddNewTransaction.jsx:97 ~ handleOnSubmit ~ transaction:", transaction)

        let data = {
          buyerUID: buyerUID || "anonymous",
          price: transaction.wholesalePricePerUnit * parseInt(transaction.orderAmount),
          shopUID: user?.uid,
          productID: transaction._id,
          quantity: transaction.orderAmount,
          time: new Date(),
          mainPrice: transaction.wholesalePrice,
          company: transaction.company,
          buyerEmail: email,
          productName: transaction.name,
          sellPrice: transaction.sellPrice
        };
        console.log(transaction)
        const response = await axios.post(
          "http://localhost:5000/transactions",
          data
        );
        console.log("🚀 ~ file: AddNewTransaction.jsx:118 ~ handleOnSubmit ~ data:", data)

        console.log("Transaction created successfully:", response.data);
      }
    } catch (error) {
      console.error("Failed to create transaction:", error);
    } finally {
      setUserFound("");
    }
  };

  return (
    <div className="flex justify-center w-full">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="my-20">
            {/* <button onClick={handleMakeTransaction} className="btn btn-outline btn-primary">Make a Transaction</button> */}
            <p className="text-3xl text-center font-semibold mb-10">
              Add a new transaction
            </p>
            <div>
              <table className="table table-md">
                <thead>
                  <tr className="text-[16px] capitalize">
                    <th></th>
                    <th>Company</th>
                    <th>Name</th>
                    <th>Remaining</th>
                    <th>Price Per Unit</th>
                    <th>Order Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {productData.map((product, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{product.company}</td>
                      <td>{product.name}</td>
                      <td>{product.quantity}</td>
                      <td>{product.sellPrice / product.quantity}</td>
                      <td>
                        <input
                          name={index}
                          type="number"
                          placeholder="Type here"
                          className="input input-sm  border-gray-300 w-full"
                          value={inputValues[index] || ""}
                          onChange={handleInputChange}
                        />
                      </td>
                      <td>
                        <button
                          className="btn-ghost btn text-success btn-sm hover:btn-success"
                          type="button"
                          onClick={() => handleAddFields(product, index)}>
                          + Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr />

            {selectedProducts.length >= 1 && (
              <div className="mt-10">
                <div className="overflow-x-auto  border rounded-lg p-5">
                  <p className="text-center text-xl font-medium mb-5">Orders</p>
                  <table className="table table-md">
                    <thead>
                      <tr className="text-[16px] capitalize">
                        <th></th>
                        <th>Company</th>
                        <th>Name</th>
                        <th>Remaining</th>
                        <th>Price Per Unit</th>
                        <th>Order Amount</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedProducts.map((product, index) => (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>{product.company}</td>
                          <td>{product.name}</td>
                          <td>{product.quantity}</td>
                          {/* //!this could be error as sellPrice become  wholeSalePrice */}
                          <td>{product.sellPrice / product.quantity}</td>
                          <td>{product.orderAmount || "Undefined"}</td>
                          <td>
                            <button
                              onClick={() => handleRemove(product)}
                              className="btn-ghost btn text-error btn-sm hover:btn-error">
                              - Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {selectedProducts.length >= 1 && (
                    <button
                      onClick={() => window.my_modal_3.showModal()}
                      className="btn btn-outline btn-primary w-full mt-5">
                      Purchase
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Enter your registered email</p>
          <input
            value={email}
            type="text"
            placeholder="Enter Your Email"
            onChange={handleEmailChange}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          {userFound && <p className="italic text-gray-500">No user found</p>}
          <form onSubmit={handleOnSubmit}>
            <div className="modal-action">
              <span>
                <button onClick={handleEmailSearch} className="btn btn-primary">
                  Search
                </button>
              </span>
              <button type="submit" className="btn">
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog> */}

      {/* <button className="btn" onClick={() => window.my_modal_3.showModal()}>
        open modal
      </button> */}

      <dialog id="my_modal_3" className="modal">
        <p method="dialog" className="modal-box max-w-sm p-8">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Enter your registered email</h3>
          <form onSubmit={handleOnSubmit} className="w-full pt-5">
            <input
              value={email}
              type="text"
              placeholder="Enter Your Email"
              onChange={handleEmailChange}
              className="input border-gray-300 w-full"
            />
            {/* {!userFound && <p className="italic text-gray-500">No user found</p>}
          {userFound && <p className="italic text-gray-500">This user is available</p>} */}

            {/* { email === "" && (<p></p>)}
          { email !== "" && !userFound && (<p>User Not Found</p>)}
          { userFound && (<p>User Found</p>)} */}
            <p>{userFound}</p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <p
                className="btn btn-primary w-full btn-outline"
                onClick={handleEmailSearch}>
                Search
              </p>
              <button type="submit" className="btn btn-primary w-full">
                Confirm
              </button>
            </div>
          </form>
        </p>
      </dialog>
    </div>
  );
};

export default AddNewTransaction;
