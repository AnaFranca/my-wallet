/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Reducer } from 'redux';

export interface ITransactionProps {
  title: string;
  description?: string;
  value: number;
}

export interface ITransactionStateProps {
  transactions: ITransactionProps[];
  total: number;
}

const INITIAL_STATE: ITransactionStateProps = {
  transactions: [],
  total: 0,
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const transactions: Reducer<ITransactionStateProps> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'ADD_TRANSACTION': {
      const { transaction } = action.payload;

      return {
        ...state,
        transactions: [...state.transactions, transaction],
      };
    }
    case 'GET_TOTAL': {
      return {
        ...state,
        total: state.transactions.reduce(
          (total, item) => total + item.value,
          0,
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default transactions;
