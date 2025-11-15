import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma"; 

const app = express();
const prisma = new PrismaClient(); 

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
