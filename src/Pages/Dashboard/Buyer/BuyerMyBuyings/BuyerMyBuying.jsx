import { useEffect, useState } from "react";

const BuyerMyBuying = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data)

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
            {data.map((datum, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{datum.name.common}</td>
                <td>{datum.population}</td>
                <td>{datum.region}</td>
                <td>{datum.area}</td>
                <td>{datum.flag}</td>
                <td>{datum.startOfWeek}</td>
                <td><button onClick={()=>window.my_modal_3.showModal()} className="btn">See Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerMyBuying;
