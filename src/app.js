require("dotenv").config();

const express = require("express");
const connectDB = require("./config/database");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Products API is running"
    });
});

const PORT = process.env.PORT || 3000;
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});