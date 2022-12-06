import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootReducer from '../../store/modules/rootReducer';
import { HomeContainer } from './Home';

import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { ITransactionProps } from '../../store/modules/transactions/reducer';

describe('Home container', () => {
  it('should render home', () => {
    const store = createStore(rootReducer);

    render(
      <Provider store={store}>
        <HomeContainer />
      </Provider>,
    );

    expect(
      screen.getByRole('heading', { level: 5, name: 'Transações' }),
    ).toBeInTheDocument();
  });

  it('should start total transactions with 0', () => {
    const store = createStore(rootReducer);

    render(
      <Provider store={store}>
        <HomeContainer />
      </Provider>,
    );

    expect(screen.getByRole('row')).toHaveTextContent('R$ 0,00');
  });

  it('should add transaction and update total transactions value', async () => {
    const store = createStore(rootReducer);

    render(
      <Provider store={store}>
        <HomeContainer />
      </Provider>,
    );

    const transaction: ITransactionProps = {
      title: 'Transação teste',
      description: 'Transação teste',
      value: 20,
    };

    await act(() => {
      store.dispatch({
        type: 'ADD_TRANSACTION',
        payload: {
          transaction,
        },
      });

      store.dispatch({ type: 'GET_TOTAL' });
    });

    expect(screen.getByRole('row')).toHaveTextContent('R$ 20,00');
  });
});
