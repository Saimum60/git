import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow p-4">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-green-600">{product.price}</p>
      <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded cursor-pointer">
        অর্ডার করুন
      </button>
    </div>
  );
};

export default ProductCard;