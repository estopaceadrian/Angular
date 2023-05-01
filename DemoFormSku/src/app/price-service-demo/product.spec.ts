import { Product } from './product.model.1';
import { MockPriceService } from './price.service.mock';

describe('Product', () => {
  let product: any;

  beforeEach(() => {
    const service = new MockPriceService();
    product = new Product(service, 11.0);
  });
  describe('price', () => {
    it('is calculated on the basePrice and the state', () => {
      expect(product.totalPrice('FL')).toBe(11.66);
    });
  });
});
