const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const Category = require("./models/Category");
const Product = require("./models/Product");

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB подключена"))
    .catch(err => console.error("Ошибка подключения:", err));

app.post("/categories", async (req, res) => {
    try {
        const category = new Category({ name: req.body.name });
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.post("/products", async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/products", async (req, res) => {
    try {
        const products = await Product.find().populate("category");
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Сервер запущен на порту ${process.env.PORT || 3000}`);
});
