"use strict"

function moneyConverter() {
    const rates = {'uah': {'eur': 0.03, 'usd': 0.04}, 'usd': {'eur': 0.9, 'uah': 25}, 'eur': {'usd': 1.1, 'uah': 28}}
    const amount = parseFloat(document.getElementById("amount").value);
    const currency1 = document.getElementById("currency1");
    const currency2 = document.getElementById("currency2");
    const result = document.getElementById("result");

if(rates[currency1.value] && rates[currency1.value][currency2.value]){
    result.value = amount * rates[currency1.value][currency2.value];
}
}

