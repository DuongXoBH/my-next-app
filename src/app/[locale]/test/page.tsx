"use client";

import { useState, useEffect, ChangeEvent } from "react";

const mockProducts = [
  { id: 1, name: "iPhone 15 Pro" },
  { id: 2, name: "Samsung Galaxy S24" },
  { id: 3, name: "MacBook Air M3" },
  { id: 4, name: "Apple Watch Ultra 2" },
  { id: 5, name: 'iPad Pro 12.9"' },
];

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(mockProducts);

  useEffect(() => {
    const result = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  }, [query]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
      </div>

      <div className="mt-4 space-y-2">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 transition"
            >
              {product.name}
            </div>
          ))
        ) : (
          <p className="text-gray-500">Không tìm thấy sản phẩm nào.</p>
        )}
      </div>
    </div>
  );
}
