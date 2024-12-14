import { BsCart } from "react-icons/bs";
import { Cart } from "../shop/Cart";
import { Link, useLocation } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { RiMenu2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import NavLinks from "./NavLinks";

function Navbar() {
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const [openSearch, setOpenSearch] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location]);

  return (
    <nav className="bg-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="md:hidden"
        >
          <RiMenu2Fill size={30} className="mr-2" />
        </button>
        <Link to="/" className="uppercase text-lg sm:text-3xl mr-auto">
          <span className="font-bold">Tech</span>
          <span className="tracking-widest font-thin">Lounge</span>
        </Link>
        <div className="hidden md:flex w-full justify-center">
          <ul className="flex gap-5 uppercase text-lg font-semibold">
            <NavLinks />
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

      <div
        className={`${
          isMobileNavOpen ? "block" : "hidden"
        } top-0 left-0 fixed z-30 bg-black/50 w-full h-full`}
        onClick={() => setIsMobileNavOpen(false)}
      >
        <ul
          onClick={(e) => e.stopPropagation()}
          className={`${
            isMobileNavOpen ? "animate-slideIn" : "animate-slideOut"
          } relative bg-white md:hidden flex flex-col pl-6 h-full max-w-[300px] pt-12 gap-3 uppercase text-xl font-semibold`}
        >
          <NavLinks />
          <button
            onClick={() => setIsMobileNavOpen(false)}
            className="absolute top-3 right-5"
          >
            <MdClose size={30} />
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
