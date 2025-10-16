import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product"; // wherever your data lives
import { useCartStore } from "../src/store/cartStore";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return <div
    
    className="text-center text-3xl md:text-5xl font-bold 
    py-10 min-h-screen">Please Select Product!</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
      {/* Product Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md object-contain rounded-xl shadow-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <span className="text-2xl font-semibold text-red-500 mb-6">${product.price}</span>

        <button
          onClick={() => addToCart(product)}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
