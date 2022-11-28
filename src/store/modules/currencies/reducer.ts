import { Reducer } from 'redux';
import { ICurrencyProps } from '../../../services/currency';

const INITIAL_STATE: ICurrencyProps[] = [];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const currencies: Reducer<ICurrencyProps[]> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'GET_CURRENCIES': {
      const { currencies } = action.payload;

      return currencies;
    }
    default: {
      return state;
    }
  }
};

export default currencies;
