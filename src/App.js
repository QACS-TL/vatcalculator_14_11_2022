import { useState } from 'react';
import './App.css';
import DisplayBlock from './DisplayBlock';
import PriceEntryField from './PriceEntryField';
import VatRateField from './VatRateField';

function App() {
  const [netPrice, setNetPrice] = useState(0.0);
  const [grossPrice, setGrossPrice] = useState(0.0);
  const [vatToPay, setVatToPay] = useState(0.0);
  const [vatRate, setVatRate] = useState(20.0);

  const handleNetPriceChange = (price) => {
    const gross_price = price * ((vatRate / 100) + 1);
    setNetPrice(price);
    setGrossPrice(gross_price);
    // calc vat to pay and set state
    setVatToPay(gross_price - price);
  }
  
  const handleGrossPriceChange = (price) => {
    const net_price = price / ((vatRate / 100) + 1);
    setNetPrice(net_price);
    setGrossPrice(price);
    // calc vat to pay and set state
    setVatToPay(price - net_price);
  }

  const handleVatRateChanged = (rate) => {
    setVatRate(rate);
    updatePrices();
  }

  
  const updatePrices = () => {
    handleNetPriceChange(netPrice);
  }

  return (
    <div className="header field" >
        VAT CALCULATOR
        <div className="pale-green-border" >
          <VatRateField vatRateChanged={handleVatRateChanged} updatePrices={updatePrices} value={vatRate}  />
          <PriceEntryField label="Price excl VAT: " priceChanged={handleNetPriceChange} price={netPrice === 0.0? "": netPrice} customstyle="field" />
          <DisplayBlock label="VAT to pay: " value={vatToPay}  customstyle="field" />
          <PriceEntryField label="Price incl VAT: " priceChanged={handleGrossPriceChange} price={grossPrice === 0.0? "": grossPrice} customstyle="field" />
        </div>
    </div>
  );
}

export default App;
