import { AnyAction, Dispatch } from 'redux';
import { getAllCurrencies } from '../store/modules/currencies/actions';
import { api } from './api';

export interface ICurrencyProps {
  [currencyName: string]: {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
  };
}

const getAll = async (dispatch: Dispatch<AnyAction>): Promise<void> => {
  const { data } = await api.get('/all');

  dispatch(getAllCurrencies(data as ICurrencyProps));
};

const currencieService = {
  getAll,
};

export default currencieService;
