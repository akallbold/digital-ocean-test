const Rate = function() {
  class Rate {
    constructor({ data }) {
      this.baseCurrency = data.baseCurrency;
      this.outCurrency = data.outCurrency;
      this.rate = data.rate;
    }
  }
};
