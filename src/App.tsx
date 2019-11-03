import React, { useState, useEffect } from 'react';

type Product = {
  id: number,
  name: string,
  description: string,
  brand: string,
  price: string,
  created_at: string,
  updated_at: string,
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [Error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        if (!data.products) setProducts([]);
        setProducts(data.products);
      })
      .catch(err => setError(err));
  }, []);
  return (
    <ul>
      {
        products.map((p: Product) => (
          <li key={p.id}>
            {p.name}
          </li>
        ))
      }
    </ul>
  );
}

export default App;
