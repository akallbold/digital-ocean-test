let startMoney = 1000000;
let currentMoney = 0;
let baseCurrency = "USD";
let outCurrencyRate = 1;

document.addEventListener("DOMContentLoaded", function() {
  function getRates(baseCurrency) {
    return fetch(`https://api.fixer.io/latest?base=${baseCurrency}`)
      .then(response => response.json())
      // .then(data => tradeMagic());
  }
  // getRates(baseCurrency);

    function firstNode(baseCurrency, outCurrency) {
      getRates(baseCurrency).then(exchangeRates => {
        debugger;
        outCurrencyRate = findCurrency(exchangeRates, outCurrency);
      });
      baseCurrency = outCurrency;
      currentMoney = startMoney * outCurrencyRate;
      // debugger;
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

    function findCurrency(data, outCurrency) {
      for (var currency in data.rates) {
        if (currency == outCurrency) {
          let result = exchangeRates.rates[currency];
        }
        console.log(result);
      }
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

    tradeMagic();
  });

  // function renderRates(data, baseCurrency) {
  //   let ulElement = document.querySelector("#list-of-rates");
  //   let currRates = data.rates;
  //   for (var element in currRates) {
  //     let liElement = document.createElement("li");
  //     let currencyText = document.createTextNode(
  //       `${element} is ${currRates[element]} ${baseCurrency}s`
  //     );
  //     liElement.append(currencyText);
  //     ulElement.append(liElement);
  //   }
  // }
});
