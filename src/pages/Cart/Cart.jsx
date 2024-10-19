import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "../../components/CatrtCard/CartCard";
import Navbar from "../../components/Navbar/Navbar";
export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Your Shopping Cart
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
          <p className="text-xl font-semibold mb-4">
            Total Cart Amount: ${totalPrice}
          </p>
          {items.map((item) => (
            <CartCard item={item} key={item.id} />
          ))}
          <div className="mt-6 flex justify-between">
            <Link
              to={"/store"}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300"
            >
              Continue Shopping
            </Link>
            <Link
              to={"#"}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Checkout
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
