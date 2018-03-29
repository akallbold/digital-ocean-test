let startMoney = 1000000;
let currentMoney = 0;
let baseCurrency = "USD";

//example: USD>AUD>EUR>GBP>USD
// let USDAUD = 1.2809;
// let USDEUR = 0.8148
// let USDGBP = 0.72305;

function firstNode(baseCurrency, outCurrency) {
  getRates(baseCurrency);
  //iterate through fetch result to match outCurrency
  let outCurrencyRate = 0;
  baseCurrency = outCurrency;
  currentMoney = startMoney * outCurrencyRate;
}

function secondNode(baseCurrency, outCurrency) {
  getRates(baseCurrency);
  //iterate through fetch result to match outCurrency
  let outCurrencyRate = 0;
  baseCurrency = outCurrency;
  currentMoney *= outCurrencyRate;
}

function thirdNode(baseCurrency, outCurrency) {
  getRates(baseCurrency);
  //iterate through fetch result to match outCurrency
  let outCurrencyRate = 0;
  baseCurrency = outCurrency;
  currentMoney *= outCurrencyRate;
}

function finalNode(baseCurrency, outCurrency) {
  getRates(baseCurrency);
  //iterate through fetch result to match outCurrency
  let outCurrencyRate = 0;
  baseCurrency = outCurrency;
  currentMoney *= outCurrencyRate;
}

function tradeMagic() {
  firstNode(baseCurrency, "AUD");
  secondNode(baseCurrency, "EUR");
  thirdNode(baseCurrency, "GBP");
  finalNode(baseCurrency, "USD");
}

function renderResults() {
  let results = document.querySelector("#results");
  let delta = currentMoney - startMoney;
  if (delta <= 0) {
    let text = document.createTextNode(
      "You didn't make any money with these trades"
    );
  } else {
    let text = document.createTextNode(`You made $${delta}!`);
  }
  results.append(text);
}
