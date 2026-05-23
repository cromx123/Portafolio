import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import visitsRoutes from "./routes/visits.js";
import githubRoutes from "./routes/github.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// --- CONFIGURACIÓN DE PERSISTENCIA LOCAL ---
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

app.use(cors());
app.use(express.json());

// Rutas backend
app.use("/api/visits", visitsRoutes);
app.use("/api/github", githubRoutes);

// --- SERVIR FRONTEND ---
const buildPath = path.join(__dirname, "../build");

// Servir archivos estáticos
app.use(express.static(buildPath));

// Manejo de React Router (Wildcard)
app.use((req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});


// --- INICIO DEL SERVIDOR ---
app.listen(PORT, () => {
  console.log(`📂 Local data directory: ${dataDir}`);
});