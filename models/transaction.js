const mongoose = require("mongoose");

const Schema = mongoose.Schema;

<<<<<<< HEAD
const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);
=======
const transactionSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction",
  },
  value: {
    type: Number,
    required: "Enter an amount",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
>>>>>>> 39a3a39292b837a4204154539b4110cd2ddd1305

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
