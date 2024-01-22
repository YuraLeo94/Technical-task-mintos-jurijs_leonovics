import React from 'react';
import ReactDOM from 'react-dom/client';
import CurrenciesSelection from './molecules/CurrenciesSelection/currenciesSelection';
import './style/global.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

    
const mockData = [
  {
      key: 'eur',
      value: 'EUR'
  },
  {
      key: 'pln',
      value: 'PLN'
  },
  {
      key: 'gel',
      value: 'GEL'
  },
  {
      key: 'dkk',
      value: 'DKK'
  },
  {
      key: 'czk',
      value: 'CZK'
  },
  {
      key: 'gbp',
      value: 'GBP'
  },
  {
      key: 'sek',
      value: 'SEK'
  },
  {
      key: 'usd',
      value: 'USD'
  },
  {
      key: 'rub',
      value: 'RUB'
  }
];

root.render(
  <React.StrictMode>
    <div className='dialog'><CurrenciesSelection currenciesData={mockData} /></div>
  </React.StrictMode>
);

