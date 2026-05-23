import express from "express";
import fs from "fs/promises"; 
import path from "path";
import { existsSync, mkdirSync } from "fs";

const router = express.Router();

// --- CONFIGURACIÓN DE PERSISTENCIA ---
const DATA_DIR = path.join(process.cwd(), "data");
const VISITS_FILE = path.join(DATA_DIR, "visits.json");

if (!existsSync(DATA_DIR)) {
  mkdirSync(DATA_DIR, { recursive: true });
}

async function getAndIncrementVisits() {
  let count = 0;

  try {
    if (existsSync(VISITS_FILE)) {
      const data = await fs.readFile(VISITS_FILE, "utf-8");
      const json = JSON.parse(data);
      count = json.count || 0;
    }

    count += 1;

    await fs.writeFile(VISITS_FILE, JSON.stringify({ count }, null, 2));
    
    return count;
  } catch (err) {
    console.error("Error al gestionar visitas en JSON:", err.message);
    return count > 0 ? count : 1; 
  }
}

router.get("/", async (req, res) => {
  try {
    const currentCount = await getAndIncrementVisits();
    res.json({ count: currentCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;