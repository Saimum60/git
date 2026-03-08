import React from "react";

function ProductTable({ products }) {
  return (
    <div className="bg-white shadow rounded">
      <table className="w-full text-center">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-3">পণ্য</th>
            <th className="p-3">দাম (৳)</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;