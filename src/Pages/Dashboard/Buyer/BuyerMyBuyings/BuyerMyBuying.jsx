import { useContext } from "react";
import useMultipleAPIs from "../../../../Hooks/useMultipleAPIs";
import { AuthContext } from "../../../../Context/AuthProvider";

const BuyerMyBuying = () => {
  const { registeredUsers , transactions } = useMultipleAPIs()
  // console.log("🚀 ~ file: BuyerMyBuying.jsx:8 ~ BuyerMyBuying ~ transactions:", transactions)
  // console.log("🚀 ~ file: BuyerMyBuying.jsx:8 ~ BuyerMyBuying ~ registedUsers:", registeredUsers)
  const { user } = useContext(AuthContext);
  // console.log("🚀 ~ file: BuyerMyBuying.jsx:9 ~ BuyerMyBuying ~ user:", user?.uid)
  
  const x = registeredUsers.filter((usr) => user?.uid===usr?.uid)
  console.log("🚀 ~ file: BuyerMyBuying.jsx:13 ~ BuyerMyBuying ~ x:", x)
  

  // useEffect(() => {
  //   fetch("http://localhost:5000/transactions")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);


  return (
    <div className="grid justify-center w-full">
        <dialog id="my_modal_3" className="modal">
  <form method="dialog" className="modal-box">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p>
  </form>
</dialog>
      <div className="overflow-x-auto my-20">
        <p className="text-center font-semibold mb-10 text-3xl">Products</p>
        <table className="table table-lg">
          <thead>
            <tr className="text-[16px] capitalize">
              <th></th>
              <th>Name</th>
              <th>Population</th>
              <th>Region</th>
              <th>area</th>
              <th>Flag</th>
              <th>Holiday</th>
            </tr>
          </thead>
          <tbody>
            {/* {data.map((datum, index) => (
              <tr key={index}> */}
                {/* <th>{index + 1}</th>
                <td>{datum}</td>
                <td>{datum}</td>
                <td>{datum}</td>
                <td>{datum}</td>
                <td>{datum}</td>
                <td>{datum}</td>
                <td><button className="btn">See Details</button></td> */}
                {/* {console.log(registeredUsers)} */}
              {/* </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerMyBuying;
