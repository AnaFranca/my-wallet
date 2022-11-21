import { Grid } from '@mui/material';
import { ReactElement, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../store';
import { addTransaction } from '../../store/modules/transactions/actions';
import { ITransactionState } from '../../store/modules/transactions/reducer';
import { InfoCard } from '../modules/InfoCard';
import { ListCard, ListCardContentProps } from '../modules/ListCard';

export function HomeContainer(): ReactElement {
  const dispatch = useDispatch();
  const transactions = useSelector<IState, ITransactionState[]>(
    state => state.transactions,
  );

  const handleCurrency = (value: number): string => {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const listDestributions: ListCardContentProps[] = [
    {
      title: 'Investimento carteira Quarto',
      value: 'R$ 500,00 ',
    },
    {
      title: 'Investimento carteira Quarto',
      value: 'R$ 500,00 ',
    },
    {
      title: 'Investimento carteira Quarto',
      value: 'R$ 500,00 ',
    },
    {
      title: 'Investimento carteira Quarto',
      value: 'R$ 500,00 ',
    },
  ];

  const handleAddTransaction = useCallback(
    (transaction: ITransactionState) => {
      dispatch(addTransaction(transaction));
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
        <ListCard title="Distribuições" content={listDestributions} />
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
        <ListCard
          title="Movimentações"
          content={transactions}
          onClick={() =>
            handleAddTransaction({
              title: 'Hello from redux',
              description: 'Description from redux',
              value: 'R$ 23,12',
            })
          }
        />
      </Grid>
    </Grid>
  );
}
