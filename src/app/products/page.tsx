"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading products...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            ShopSphere Products
          </h1>

          <p className="text-gray-600 mt-2">
            Discover our latest products
          </p>
        </div>

        {products.length === 0 ? (
          <p className="text-gray-600">
            No products available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >

                {/* Product Image Placeholder */}
                <div className="h-52 bg-gray-100 flex items-center justify-center">

                  <span className="text-6xl">
                    🛍️
                  </span>

                </div>

                <div className="p-5">

                  <h2 className="text-xl font-semibold text-gray-900">
                    {product.name}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2 min-h-[40px]">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-5">

                    <span className="text-2xl font-bold text-blue-600">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    <span className="text-sm text-green-600">
                      {product.quantity > 0
                        ? "In Stock"
                        : "Out of Stock"}
                    </span>

                  </div>

                  <button
                    className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                    disabled={product.quantity === 0}
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </main>
  );
}