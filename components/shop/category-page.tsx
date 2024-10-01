"use client";

import { shopBanner } from "@/public/assets/data";
import _ from "lodash";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SortingButton from "@/components/sorting-button";
import ProductCard from "@/components/product/product-card";
import { Product } from "@/lib/schema";

export default function CategoryPage() {
  const [sortedProducts, setSortedProducts] = useState<Product[]>();
  const [categoryName, setCategoryName] = useState("");

  const url = usePathname();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      const products = data.products;

      // Get unique categories
      const filteredCategories = products?.map((product: Product) => product.category);
      const uniqueCategories = Array.from(new Set(filteredCategories));

      // Get category name from URL
      const categoryInUrlArr = url.split("/");
      const categoryInUrl = categoryInUrlArr[categoryInUrlArr.length - 1];

      // Find category name from unique categories
      const name = uniqueCategories.find((category) => _.kebabCase(category as string) === categoryInUrl);

      // Filter products by category
      const filteredProducts = products?.filter((product: Product) => product.category === name);

      // Set products if there are any
      filteredProducts && filteredProducts.length > 0 && setSortedProducts(filteredProducts);

      console.log("filteredProducts", filteredProducts);
      console.log("name", name);

      name && setCategoryName(name as string);
    };

    // Fetch products from API and set them to state on component mount
    fetchProducts();
  }, []);

  return (
    <main className="flex-grow">
      {/* Image Hero */}
      <section className="w-full overflow-hidden md:h-96 sm:h-72 h-52 flex items-center justify-center relative">
        <Image src={shopBanner} fill alt="Product" className="object-cover brightness-[0.3] -z-10 w-screen" />
        <h1 className={cn("absolute text-center text-white lg:text-7xl md:text-5xl text-4xl px-4  font-bold")}>
          {categoryName}
        </h1>
      </section>

      <section className="container flex flex-col items-end justify-center py-8 ">
        {/* All Product Grid */}
        <div className="px-14">
          <SortingButton products={sortedProducts || []} setSortedProducts={setSortedProducts} />
        </div>
        <div className=" py-4 grid sm:grid-cols-2 grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {sortedProducts?.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.images[0]}
              id={product.id}
              sizes={product.sizes}
              category={product.category}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
