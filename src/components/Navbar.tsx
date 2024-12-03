import { BsCart } from "react-icons/bs";
import { Cart } from "./shop/Cart";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

function Navbar() {
  const { state, dispatch } = useCart();

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const getTotalQuantity = () => {
    return state.cartProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="uppercase text-lg sm:text-3xl">
          <span className="font-bold">Tech</span>
          <span className="tracking-widest font-thin">Lounge</span>
        </Link>
        <div className="flex w-full justify-center">
          <ul className="flex gap-3 uppercase text-xl font-light">
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 transition duration-200"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-500 transition duration-200"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative w-[150px] flex">
          <button className="relative">
            <BsCart size={24} onClick={toggleCart} />
            <span className="absolute  w-5 h-5 -right-2 top-5 bg-red-500 rounded-full text-white text-[12px]">
              {getTotalQuantity()}
            </span>
          </button>
          <Cart cartItems={state.cartProducts} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
