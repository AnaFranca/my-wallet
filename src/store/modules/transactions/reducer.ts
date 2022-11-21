import { Reducer } from 'redux';

export interface ITransactionState {
  title: string;
  description?: string;
  value: string;
}

const INITIAL_STATE: ITransactionState[] = [];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const transactions: Reducer<ITransactionState[]> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'ADD_TRANSACTION': {
      const { transaction } = action.payload;

      return [...state, transaction];
    }
    default: {
      return state;
    }
  }

  return INITIAL_STATE;
};

export default transactions;
