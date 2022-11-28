import { Grid } from '@mui/material';
import { ReactElement, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ICurrencyProps } from '../../services/currency';
import { IState } from '../../store';
import { addTransaction } from '../../store/modules/transactions/actions';
import { ITransactionProps } from '../../store/modules/transactions/reducer';
import { InfoCard } from '../modules/InfoCard';
import { ListCard, ListCardContentProps } from '../modules/ListCard';
import dayjs from 'dayjs';

export function HomeContainer(): ReactElement {
  const dispatch = useDispatch();
  const currencies = useSelector<IState, ICurrencyProps>(
    state => state.currencies,
  );

  const transactions = useSelector<IState, ITransactionProps[]>(
    state => state.transactions.transactions,
  );

  const transactionsTotal = useSelector<IState, number>(
    state => state.transactions.total,
  );

  const handleCurrencies = useMemo<ListCardContentProps[]>(() => {
    const formatedCurrencies: ListCardContentProps[] = [];

    Object.entries(currencies).map(item =>
      formatedCurrencies.push({
        title: item[1].name,
        value: item[1].pctChange,
        description: dayjs(item[1].create_date.split(' ')[0]).format(
          'DD/MM/YY',
        ),
      }),
    );

    return formatedCurrencies;
  }, [currencies]);

  const handleCurrency = (value: number): string => {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const transactionsFormatedList = useMemo<ListCardContentProps[]>(
    () =>
      transactions.map(transaction => ({
        title: transaction.title,
        description: transaction.description,
        value: transaction.value.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }),
      })),
    [transactions],
  );

  const handleAddTransaction = useCallback(
    (transaction: ITransactionProps) => {
      dispatch(addTransaction(transaction));
      dispatch({ type: 'GET_TOTAL' });
    },
    [dispatch],
  );

  return (
    <Grid container width="100%" columns={2} spacing={2}>
      <Grid item xs={1} gap={2} display="flex" flexDirection="column">
        <InfoCard
          title={handleCurrency(1000)}
          description="Patrimônio"
          buttonTitle="Depositar"
          onClick={() => console.log('Clicked')}
        />
        <ListCard
          title="Transações"
          content={transactionsFormatedList}
          onClick={() =>
            handleAddTransaction({
              title: 'Hello from redux',
              description: 'Description from redux',
              value: 32,
            })
          }
          footerTitle="Total"
          footerDescription={transactionsTotal.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        />
      </Grid>
      <Grid item xs={1} gap={2} display="flex" flexDirection="column">
        <InfoCard
          title={handleCurrency(590)}
          description="Patrimônio"
          buttonTitle="Depositar"
          onClick={() => console.log('Clicked')}
        />
        <InfoCard
          title="Histórico de rendimentos"
          buttonTitle="Depositar"
          onClick={() => console.log('Clicked')}
        />
        <ListCard title="Moedas disponiveis" content={handleCurrencies} />
      </Grid>
    </Grid>
  );
}
