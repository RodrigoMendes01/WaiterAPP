export interface Order {
  _id: string;
  table: string;
  status: 'DONE' | 'IN_PRODUCTION' | 'WAITING'
  products: Array<{
    _id: string;
    quantity: number;
    product: {
      name: string;
      imagePath: string;
      price: number;
    }
  }>
}
