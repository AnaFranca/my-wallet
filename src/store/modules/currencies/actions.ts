import { ICurrencyProps } from '../../../services/currency';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getAllCurrencies(currencies: ICurrencyProps) {
  return {
    type: 'GET_CURRENCIES',
    payload: {
      currencies,
    },
  };
}
