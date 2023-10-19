import {country_list} from '/js/countryList.js';

const api = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;
const fromDropDown = document.getElementById('currencyFrom');
const toDropDown = document.getElementById('currencyTo');
const btnConvert = document.getElementById('exchangeRate');

const fullCurrency = (dropdown) => {
  for(let currency_code in country_list) {
    let option = document.createElement("option");
    option.value = currency_code;
    option.text = currency_code;
    dropdown.add(option);
  }
}

fullCurrency(fromDropDown);
fullCurrency(toDropDown);

const convert = () => {
  const amount = document.querySelector("#amount").value;
  const fromCurrency  = fromDropDown.value;
  const toCurrency = toDropDown.value;
  const result = document.querySelector(".result");

  if(!amount) {
    return;
  }

  fetch(api) 
    .then ((resp) => resp.json())
    .then ((data) => {
      let fromExchangeRate = data.conversion_rates[fromCurrency];
      let toExchangeRate = data.conversion_rates[toCurrency];
      const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
      result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    }); 
}

btnConvert.addEventListener('click', convert);