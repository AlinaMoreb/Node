import express from "express";
import dotenv from "dotenv";
import { connectDB, getDB } from "./db/index.js";
import { ObjectId } from "mongodb";

dotenv.config();

const app = express();
app.use(express.json());

// ==================
// CRUD для products
// ==================

// CREATE
app.post("/products", async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("products").insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ ALL
app.get("/products", async (req, res) => {
  try {
    const db = getDB();
    const products = await db.collection("products").find().toArray();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ ONE
app.get("/products/:id", async (req, res) => {
  try {
    const db = getDB();
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE
app.put("/products/:id", async (req, res) => {
  try {
    const db = getDB();
    await db.collection("products").updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    res.json({ message: "Product updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE
app.delete("/products/:id", async (req, res) => {
  try {
    const db = getDB();
    await db
      .collection("products")
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ==================
// Запуск сервера
// ==================
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ DB connection failed", err);
  });
