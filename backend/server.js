import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import visitsRoutes from "./routes/visits.js";
import githubRoutes from "./routes/github.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/visits", visitsRoutes);
app.use("/api/github", githubRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { dbName: "portfolio" })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
