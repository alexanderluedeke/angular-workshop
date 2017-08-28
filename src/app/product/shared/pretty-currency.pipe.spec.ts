import { PrettyCurrencyPipe } from './pretty-currency.pipe';

describe('PrettyCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new PrettyCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
