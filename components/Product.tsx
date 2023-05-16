import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

interface ProductProps {
  product: {
    image: string[];
    name: string;
    slug: {
      current: string;
    };
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const imageUrl = urlFor(product.image && product.image[0]).url() as string;

  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <div className="product-card">
          <img
            src={imageUrl}
            width={250}
            height={250}
            className="product-image"
            alt={product.name}
          />
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
