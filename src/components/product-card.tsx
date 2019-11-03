import React from 'react';

type Product = {
  id: number,
  name: string,
  description: string,
  brand: string,
  price: string,
  created_at: string,
  updated_at: string,
}

type ProductCardProps = {
  product: Product,
}

const ProductCard = ({ product }: ProductCardProps) => (
  <div>
    <p>{product.name}</p>
    <p>{product.brand}</p>
    <p>{product.price}</p>
  </div>
);

export default ProductCard;