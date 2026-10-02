require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db.js");

const app = express();


connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API is running",
  });
});

app.use("/api/auth", require("./routes/authRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));
app.use("/api/admin", require("./routes/adminRoutes.js"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
