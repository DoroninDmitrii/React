'use client';

import { useObservable } from './useObservable';
import { productService } from './productService';

export const ProductList = () => {
  const products = useObservable(productService.sortedProducts$, []);

  return (
    <div>
      <h3>Products</h3>

      <select onChange={e => productService.setSortBy(e.target.value as any)}>
        <option value="name">Sort by name</option>
        <option value="price">Sort by price</option>
      </select>

      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} — ${p.price}
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          productService.addProduct({
            id: Date.now(),
            name: 'Tomato',
            price: Math.floor(Math.random() * 20),
          })
        }
      >
        Add Random Product
      </button>
    </div>
  );
};
