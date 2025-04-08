import { BehaviorSubject, combineLatest, map } from 'rxjs';

type Product = {
  id: number;
  name: string;
  price: number;
};

type SortBy = 'name' | 'price';

const initialProducts: Product[] = [
  { id: 1, name: 'Apple', price: 10 },
  { id: 2, name: 'Banana', price: 5 },
  { id: 3, name: 'Carrot', price: 7 },
];

class ProductService {
  private _products$ = new BehaviorSubject<Product[]>(initialProducts);
  private _sortBy$ = new BehaviorSubject<SortBy>('name');

  public readonly sortedProducts$ = combineLatest([
    this._products$,
    this._sortBy$
  ]).pipe(
    map(([products, sortBy]) => {
      const sorted = [...products].sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'price') return a.price - b.price;
        return 0;
      });
      return sorted;
    })
  );

  setSortBy(sortBy: SortBy) {
    this._sortBy$.next(sortBy);
  }

  addProduct(product: Product) {
    this._products$.next([...this._products$.getValue(), product]);
  }
}

export const productService = new ProductService();
