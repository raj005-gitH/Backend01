const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes/waitlistRoutes");
const PORT = 3000;

const app = express();
connectDB();

app.use(express.json());

app.use("/api", router);

app.listen(PORT, (req, res) => {
    console.log("Server is listening on port: ", PORT);
})