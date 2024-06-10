import {Currency} from './lib/currency.js'

const canadianDollar = 0.91;
let currency = new Currency(canadianDollar);

console.log(`50 Canadian dollars equals this amount of US dollars: ${currency.toUsd(50)}`);

console.log(`30 US dollars equals this amount of Canadian dollars: ${currency.toCad(30)}`);





