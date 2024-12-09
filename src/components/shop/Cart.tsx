import useCart from "../../hooks/useCart";
import { CartItem } from "../../types";
import { getThumbnailImage } from "../../utils/getThumbnailImage";

export const Cart = ({ cartItems }: { cartItems: CartItem[] }) => {
  const { state, dispatch } = useCart();

  const increaseQty = (cartItem: CartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decreaseQty = (cartItemID: string) => {
    dispatch({ type: "REMOVE_QTY", payload: { productId: cartItemID } });
  };

  const deleteFromCart = (cartItemID: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { productId: cartItemID } });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`flex flex-col w-[430px] cart-mobile z-10 bg-white border border-stone-200 absolute top-12 right-0 rounded-md p-6 transition-all duration-300 shadow-sm ${
        state.isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 translate-y-[50px] invisible"
      }`}
    >
      <h3 className="text-2xl text-orange-600 font-light">YOUR CART</h3>
      {cartItems.length == 0 && (
        <div className="my-10 text-center uppercase text-stone-400">
          Your cart is empty
        </div>
      )}
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="relative flex justify-between items-center border-b border-stone-200 pt-5 gap-3"
        >
          <div className="w-[100px]">
            <img
              src={`/images/thumbs/${getThumbnailImage(item.image)}`}
              alt=""
            />
          </div>
          <div className="">{item.name}</div>
          <div className="flex ">
            <div className="flex gap-2 text-xl">
              <button
                onClick={() => decreaseQty(item.id)}
                className="text-white bg-blue-500 px-2 rounded-[4px]"
              >
                -
              </button>
              <div className="text-stone-500">{item.quantity}</div>
              <button
                onClick={() => increaseQty(item)}
                className="text-white bg-blue-500 px-2 rounded-[4px]"
              >
                +
              </button>
            </div>
          </div>
          <button
            className="absolute right-1 top-4 bg-red-500 rounded-full w-4 h-4 text-white text-xs"
            onClick={() => deleteFromCart(item.id)}
          >
            X
          </button>
        </div>
      ))}
      <div className="flex items-center text-xl justify-between mt-5 uppercase font-light">
        <div className="flex">Total Price: </div>
        <div>${totalPrice}</div>
      </div>
    </div>
  );
};
