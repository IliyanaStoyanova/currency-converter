import {country_list} from '/js/countryList.js';

const fromDropDown = document.getElementById('currencyFrom');
const toDropDown = document.getElementById('currencyTo');

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