export class Currency {

    #canadianDollar = 0.91;

    constructor(canadianDollar) {
      this.#canadianDollar = canadianDollar;
    }

    toUsd(cad) {
        return this.#roundTwoDecimals(cad * this.#canadianDollar);
    }

    toCad(usd) {
        return this.#roundTwoDecimals(usd / this.#canadianDollar);
    }

    #roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    }
}