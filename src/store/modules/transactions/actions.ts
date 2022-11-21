import { ITransactionState } from './reducer';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function addTransaction(transaction: ITransactionState) {
  return {
    type: 'ADD_TRANSACTION',
    payload: {
      transaction,
    },
  };
}
