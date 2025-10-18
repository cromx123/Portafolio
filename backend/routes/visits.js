import express from "express";
import Visit from "../models/Visit.js";

const router = express.Router();

// Obtener visitas totales
router.get("/", async (req, res) => {
    try {
        let visit = await Visit.findOne();
        if (!visit) {
            visit = await Visit.create({ count: 0 });
        }
        visit.count += 1;
        await visit.save();
        res.json({ count: visit.count });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
