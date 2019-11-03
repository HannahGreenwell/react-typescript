import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from '../product-card';

it('displays the product name, brand and price', () => {
  const fakeProduct = {
    id: 123,
    name: 'Circle Printed T-Shirt',
    brand: '慢茶mcha',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus sed odio efficitur suscipit a eu urna. Donec sed faucibus nisi. Maecenas in dictum tortor. Proin libero ex, gravida a posuere in, rutrum ut magna. Fusce volutpat, felis sit amet placerat condimentum, lorem augue consectetur purus, eget bibendum risus nibh vitae tortor. Etiam viverra, augue ornare tempor convallis, odio arcu volutpat arcu, ut vestibulum risus ligula in metus.',
    price: '30.0',
    created_at: '2018-12-09T22:14:18.878Z',
    updated_at: '2018-12-09T22:14:18.878Z',
  };

  const { queryByText } = render(<ProductCard product={fakeProduct} />);

  expect(queryByText(fakeProduct.name)).not.toBeNull();
  expect(queryByText(fakeProduct.brand)).not.toBeNull();
  expect(queryByText(fakeProduct.price)).not.toBeNull();
});

