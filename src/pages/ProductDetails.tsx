import { MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/productsContext";
import useCart from "../hooks/useCart";
import { Product } from "../types";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductDetails = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const { products } = useProducts();
  const { dispatch } = useCart();
  const params = useParams();
  const productId = params.productId;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | undefined>(
    ""
  );

  const addTocart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };

  const handleAddtoCart = () => {
    if (product) addTocart(product);
  };

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImageSrc(`/images/${foundProduct.image}`);
    }
  }, [products, productId]);

  const handleImageClick = (e: MouseEvent<HTMLImageElement>) => {
    const clickedImageSrc = (e.target as HTMLImageElement).src;
    setSelectedImageSrc(clickedImageSrc);
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="container mx-auto pt-20 pb-28 px-4">
      <div className="flex flex-col md:flex-row gap-12 ">
        <div className="flex flex-col md:flex-col lg:flex-row w-full md:w-1/2 gap-3">
          <div className=" lg:w-1/6 flex flex-row md:flex-row lg:flex-col gap-3 lg:order-1 order-2">
            <div className="cursor-pointer max-w-[100px]">
              <img
                src={`/images/${product?.image}`}
                alt=""
                className="border border-neutral-300 rounded-xl hover:border-neutral-400"
                onClick={handleImageClick}
              />
            </div>
            <div className="cursor-pointer max-w-[100px]">
              <img
                src={"/images/laptop-2.jpg"}
                alt=""
                className="border border-neutral-300 rounded-xl hover:border-neutral-400"
                onClick={handleImageClick}
              />
            </div>
            <div className="cursor-pointer max-w-[100px]">
              <img
                src={"/images/headphones-3.jpg"}
                alt=""
                className="border border-neutral-300 rounded-xl hover:border-neutral-400"
                onClick={handleImageClick}
              />
            </div>
          </div>
          <div className="lg:w-5/6  lg:order-2 order-1">
            <LazyLoadImage
              src={selectedImageSrc}
              alt={product?.name}
              effect="blur"
              className="rounded-xl border border-neutral-300 cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="mb-6 uppercase text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
            {product?.name}
          </h1>
          <div>
            <span>Product code:</span>
            <p className="text-xl font-light">{product?.productCode}</p>
          </div>
          <div>
            <span>Description:</span>
            <p className="text-2xl font-light">{product?.description}</p>
          </div>
          <div>
            <span>Brand:</span>
            <p className="text-2xl font-light">{product?.brand}</p>
          </div>
          <div>
            {product?.stockQuantity > 0 ? (
              <div className="text-lg">
                <span className="w-3 h-3 bg-green-600 inline-block rounded-full mr-2"></span>
                In stock
              </div>
            ) : (
              <div className="text-lg">
                <span className="w-3 h-3 bg-red-600 inline-block rounded-full mr-2"></span>
                Out of stock
              </div>
            )}
          </div>
          <div>
            <p className="text-5xl font-light text-red-500">
              ${product?.price}
            </p>
          </div>
          <button
            onClick={handleAddtoCart}
            className="w-[200px] mt-6 bg-blue-500 hover:bg-blue-700 rounded-full p-5 text-xl text-white transition-colors duration-150"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {lightboxOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-[800px] h-[600px] bg-white rounded-lg shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImageSrc}
              alt={product?.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-0 right-0 p-4 text-3xl text-white font-bold hover:text-red-500"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
