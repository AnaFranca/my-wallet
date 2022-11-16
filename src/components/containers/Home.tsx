/* COMMIT DE DEPLOY */
import { Grid } from '@mui/material';
import { ReactElement } from 'react';
import { InfoCard } from '../modules/InfoCard';
import { ListCard, ListCardContentProps } from '../modules/ListCard';

export function HomeContainer(): ReactElement {
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

  const listTransactions: ListCardContentProps[] = [
    {
      title: 'Investimento carteira Quarto',
      description: '02/09/2022',
      value: 'R$ 500,00 ',
    },
    {
      title: 'Investimento carteira Quarto',
      description: '02/09/2022',
      value: 'R$ 500,00 ',
    },
    {
      title: 'Investimento carteira Quarto',
      description: '02/09/2022',
      value: 'R$ 500,00 ',
    },
    {
      title: 'Investimento carteira Quarto',
      description: '02/09/2022',
      value: 'R$ 500,00 ',
    },
  ];

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
        <ListCard title="Movimentações" content={listTransactions} />
      </Grid>
    </Grid>
  );
}
