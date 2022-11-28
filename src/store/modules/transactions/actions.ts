import { ITransactionProps } from './reducer';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function addTransaction(transaction: ITransactionProps) {
  return {
    type: 'ADD_TRANSACTION',
    payload: {
      transaction,
    },
  };
}
