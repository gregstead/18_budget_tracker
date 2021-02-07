const router = require("express").Router();
const path = require("path");

// If no matching route is found default to home
router.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
