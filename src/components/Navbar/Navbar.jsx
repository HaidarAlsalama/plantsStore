import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <Link to={"/"} className="flex items-center space-x-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3968/3968269.png"
          alt="Paradise Nursery Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h1 className="text-xl font-bold">Paradise Nursery</h1>
          <p className="text-sm">Where Green Meets Serenity</p>
        </div>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/store" className="hover:underline">
              Plants
            </Link>
          </li>
          <li className="relative">
            <Link to={"/cart"} className="hover:underline">
              Cart
            </Link>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalQuantity}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
