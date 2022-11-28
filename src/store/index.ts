import { createStore } from 'redux';
import { ICurrencyProps } from '../services/currency';
import rootReducer from './modules/rootReducer';
import { ITransactionStateProps } from './modules/transactions/reducer';

export interface IState {
  transactions: ITransactionStateProps;
  currencies: ICurrencyProps;
}

const store = createStore(rootReducer);

export default store;
