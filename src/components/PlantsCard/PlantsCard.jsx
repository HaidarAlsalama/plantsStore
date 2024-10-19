import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

export default function PlantsCard({ id, name, image, price, description }) {
  const dispatch = useDispatch();
  const [disableAddItem, setDisableAddItem] = useState(false);
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    const existingItem = items.find((item) => item.id === id);
    if (existingItem) {
      setDisableAddItem(true);
    } else {
      setDisableAddItem(false);
    }
  }, [items]);

  const handleAddToCart = () => {
    dispatch(addItem({ id, name, image, price, description }));
  };

  return (
    <div
      key={id}
      className="bg-white rounded-lg shadow-md overflow-hidden text-center"
    >
      <div className="relative">
        <img src={image} alt={name} className="w-full h-80" />
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm font-bold rounded">
          SALE
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2 text-xl">{name}</h3>
        <p className="text-gray-600 mb-2 font-extrabold text-xl">${price}</p>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <button
          onClick={handleAddToCart}
          disabled={disableAddItem}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform disabled:bg-green-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
