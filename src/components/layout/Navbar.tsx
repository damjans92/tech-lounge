import { BsCart } from "react-icons/bs";
import { Cart } from "../shop/Cart";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { RiMenu2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

function Navbar() {
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const [openSearch, setOpenSearch] = useState(false);
  // const { screenWidth } = useScreenWidth();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleSearchBar = () => {
    setOpenSearch(!openSearch);
  };

  const toggleCart = () => {
    cartDispatch({ type: "TOGGLE_CART" });
  };

  const getTotalQuantity = () => {
    return cartState.cartProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );
  };

  return (
    <nav className="bg-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
          <RiMenu2Fill size={30} className="mr-2" />
        </button>
        <Link to="/" className="uppercase text-lg sm:text-3xl">
          <span className="font-bold">Tech</span>
          <span className="tracking-widest font-thin">Lounge</span>
        </Link>
        <div className="hidden md:flex w-full justify-center">
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
        <div className="relative w-[150px] flex justify-end gap-3">
          <button className="text-3xl" onClick={toggleSearchBar}>
            <CiSearch />
          </button>
          <button className="relative">
            <BsCart size={24} onClick={toggleCart} />
            <span className="absolute  w-5 h-5 -right-2 top-5 bg-red-500 rounded-full text-white text-[12px]">
              {getTotalQuantity()}
            </span>
          </button>
          <Cart cartItems={cartState.cartProducts} />
        </div>
      </div>
      <SearchBar openSearch={openSearch} toggleSearchBar={toggleSearchBar} />

      {isMobileNavOpen && (
        <div className="top-0 left-0 fixed z-30 bg-black/50 w-full h-full">
          <ul className="relative bg-white md:hidden flex flex-col pl-6 h-full max-w-[300px] pt-12 gap-3 uppercase text-xl font-light">
            <li className="underline">
              <Link
                to="/"
                className="hover:text-blue-500 transition duration-200"
              >
                Shop
              </Link>
            </li>
            <li className="underline">
              <Link
                to="/about"
                className="hover:text-blue-500 transition duration-200"
              >
                About
              </Link>
            </li>
            <button
              onClick={() => setIsMobileNavOpen(false)}
              className="absolute top-3 right-5"
            >
              <MdClose size={30} />
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
