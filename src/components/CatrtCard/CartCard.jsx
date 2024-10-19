import React from "react";
import { useDispatch } from "react-redux";
import { addItem, deleteItem, removeItem } from "../../features/cart/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div
      key={item.id}
      className="flex items-center border-b border-gray-200 py-4 last:border-b-0"
    >
      <img
        src={item.image}
        alt={item.name}
        width={100}
        height={100}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => dispatch(removeItem(item))}
            className="bg-gray-200 px-2 py-1 rounded-l"
          >
            -
          </button>
          <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
          <button
            onClick={() => dispatch(addItem(item))}
            className="bg-gray-200 px-2 py-1 rounded-r"
          >
            +
          </button>
        </div>
        <p className="mt-2">Total: ${item.price * item.quantity}</p>
      </div>
      <button
        onClick={() => dispatch(deleteItem(item))}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
      >
        Delete
      </button>
    </div>
  );
}
