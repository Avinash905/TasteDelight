import { useState } from "react";
import { data } from "../data";

const MenuFood = () => {
  const [items, setItems] = useState(data);

  const filterType = (type) => {
    return setItems(
      data.filter((ele) => {
        return ele.type === type;
      })
    );
  };

  const filterPrice = (price) => {
    return setItems(
      data.filter((ele) => {
        return ele.price === price;
      })
    );
  };

  return (
    <section className="max-w-6xl mx-auto p-6 pt-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl text-red-500 font-bold text-center">
          Top Rated Menu Items
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h4 className="font-bold">Filter Type</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setItems(data);
                }}
                className="text-sm text-red-500 border border-red-500 rounded-full py-0.5 px-4 hover:bg-red-500 hover:text-white"
              >
                All
              </button>
              <button
                onClick={() => {
                  filterType("indian");
                }}
                className="text-sm text-red-500 border border-red-500 rounded-full py-0.5 px-4 hover:bg-red-500 hover:text-white"
              >
                Indian
              </button>
              <button
                onClick={() => {
                  filterType("chinese");
                }}
                className="text-sm text-red-500 border border-red-500 rounded-full py-0.5 px-4 hover:bg-red-500 hover:text-white"
              >
                Chinese
              </button>
              <button
                onClick={() => {
                  filterType("italian");
                }}
                className="text-sm text-red-500 border border-red-500 rounded-full py-0.5 px-4 hover:bg-red-500 hover:text-white"
              >
                Italian
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold">Filter Price</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  filterPrice("$");
                }}
                className="text-sm text-red-500 border border-red-500 rounded-full py-0.5 px-4 hover:bg-red-500 hover:text-white"
              >
                $
              </button>
              <button
                onClick={() => {
                  filterPrice("$$");
                }}
                className="text-sm text-red-500 border border-red-500 rounded-full py-0.5 px-4 hover:bg-red-500 hover:text-white"
              >
                $$
              </button>
              <button
                onClick={() => {
                  filterPrice("$$$");
                }}
                className="text-sm text-red-500 border border-red-500 rounded-full py-0.5 px-4 hover:bg-red-500 hover:text-white"
              >
                $$$
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((ele) => {
            return (
              <div
                key={ele.name}
                className="rounded shadow-lg flex flex-col hover:shadow-xl hover:scale-105  duration-200 ease-linear"
              >
                <img
                  src={ele.image}
                  alt={ele.name}
                  className="h-44 object-cover rounded-t"
                />
                <div className="flex justify-between items-center p-2">
                  <h5 className="font-bold capitalize">{ele.name}</h5>
                  <span className="bg-red-500 text-white rounded-full py-0.25 px-2 text-xs">
                    {ele.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuFood;
