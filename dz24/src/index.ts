import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Middleware для обработки JSON
app.use(express.json());

// GET маршрут
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript!");
});

// POST маршрут
app.post("/data", (req: Request, res: Response) => {
  const data = req.body;

  res.json({
    message: "Data received successfully",
    receivedData: data
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
