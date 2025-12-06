import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma"; 
import commentRoutes from "./api/v1/routes/commentRoutes";
import newsletterRoutes from "./api/v1/routes/newsletterRoutes"; 
import userRoutes from "./api/v1/routes/userRoutes";
import NotificationRoutes from "./api/v1/routes/notificationsRoutes";


export const app = express(); 
const prisma = new PrismaClient(); 

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// Mount comment routes
app.use("/api/v1/comments", commentRoutes);
app.use("/newsletter", newsletterRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/notifications", NotificationRoutes);


app.get("/", (req, res) => {
  res.send("Backend running");
});

// Only listen locally
if (process.env.NODE_ENV !== "production") {
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
