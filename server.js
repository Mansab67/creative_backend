const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/task");

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
