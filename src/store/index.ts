import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { ITransactionState } from './modules/transactions/reducer';

export interface IState {
  transactions: ITransactionState[];
}

const store = createStore(rootReducer);

export default store;
