const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("api/transaction", ({ body }, res) => {});

router.post("/api/transaction/bulk", ({ body }, res) => {});

router.get("/api/transaction", (_req, res) => {});

module.exports = router;
