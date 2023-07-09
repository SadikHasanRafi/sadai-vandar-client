import { useEffect, useState } from "react";
import axios from "axios";

const useMultipleAPIs = () => {
  const [products, setProducts] = useState([]);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [rolesAndReviews, setRolesAndReviews] = useState([]);
  const [shopkeepers, setShopkeepers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const responseProducts = await axios.get("http://localhost:5000/products");
        const responseRegisteredUsers = await axios.get("http://localhost:5000/registered-users");
        const responseRolesAndReviews = await axios.get("http://localhost:5000/roles-and-reviews");
        const responseShopkeepers = await axios.get("http://localhost:5000/shopkeepers");
        const responseTransactions = await axios.get("http://localhost:5000/transactions");

        setProducts(responseProducts.data);
        setRegisteredUsers(responseRegisteredUsers.data);
        setRolesAndReviews(responseRolesAndReviews.data);
        setShopkeepers(responseShopkeepers.data);
        setTransactions(responseTransactions.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
  }, []);

  return { products, registeredUsers, rolesAndReviews, shopkeepers, transactions, isLoading, error };
};


export default useMultipleAPIs;
