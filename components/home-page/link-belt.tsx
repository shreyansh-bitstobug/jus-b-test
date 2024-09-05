"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { products } from "@/public/assets/data";
import _ from "lodash";

export default function AnimatedLinkBelt() {
  const [categories, setCategories] = useState<string[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 100);
    }, 300);

    return () => clearInterval(animationInterval);
  }, []);

  useEffect(() => {
    const categories = products.reduce((acc: string[], product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    }, []);
    setCategories(categories);
  }, [products]);

  return (
    <div className="w-full overflow-hidden py-6 bg-snow border-b-2 border-penn-red">
      <div
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(-${offset}%)`,
          transition: "transform 0.4s linear",
        }}
      >
        {[...Array(10)].map((i, index) => (
          <div key={index} className="flex">
            {categories.map((category) => (
              <Link
                key={category + index}
                href={`/shop/${_.kebabCase(category)}`}
                className="text-neutral-800 px-4 hover:text-penn-red transition-all "
              >
                {category}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
