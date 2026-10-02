const express = require("express");

const authMiddleware = require("../middleware/authMiddleware.js");
const authorizeRoles = require("../middleware/roleMiddleware.js");

const router = express.Router();


router.get(
  "/dashboard",
  authMiddleware,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      message: "Welcome to the admin dashboard",
      user: req.user,
    });
  },
);

module.exports = router;
