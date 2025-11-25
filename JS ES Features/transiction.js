// Q3_transactionValidator.js
(() => {
  "use strict";

  const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null,
  ];

  class TransactionError extends Error {
    constructor(message, type, item) {
      super(message);
      this.type = type;
      this.item = item;
    }
  }

  const valid = [];
  const invalid = [];

  for (let i = 0; i < transactions.length; i++) {
    const tx = transactions[i];
    try {
      if (tx === null)
        throw new TransactionError("NullTransaction", "NullEntry", {
          index: i,
        });
      if (typeof tx !== "object")
        throw new TransactionError("InvalidType", "InvalidEntry", {
          index: i,
          value: tx,
        });

      if (!("id" in tx))
        throw new TransactionError("MissingId", "MissingField", {
          index: i,
          transaction: tx,
        });
      if (!("amount" in tx))
        throw new TransactionError("MissingAmount", "MissingField", {
          index: i,
          transaction: tx,
        });

      if (typeof tx.amount !== "number")
        throw new TransactionError("AmountNotNumber", "InvalidField", {
          index: i,
          transaction: tx,
        });

      if (tx.amount < 0)
        throw new TransactionError("NegativeAmount", "NegativeAmount", {
          index: i,
          transaction: tx,
        });

      // All good
      valid.push(tx);
      // place a breakpoint here to watch states:
      // debugger;
    } catch (err) {
      if (err instanceof TransactionError) {
        invalid.push({
          index: i,
          error: err.type,
          message: err.message,
          item: err.item,
        });
      } else {
        invalid.push({
          index: i,
          error: "UnknownError",
          message: String(err),
          item: tx,
        });
      }
    }
  }

  console.log("Valid transactions:", valid);
  console.log("Invalid transactions:", invalid);
  console.log(`Summary: successful=${valid.length}, failed=${invalid.length}`);
})();
