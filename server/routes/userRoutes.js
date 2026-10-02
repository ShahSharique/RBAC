const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile access successfully",
    user: req.user,
  });
});

module.exports = router;
