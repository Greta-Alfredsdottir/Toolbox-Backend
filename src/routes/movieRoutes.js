import express from "express";

const router = express.Router();

// FRONTEND HENTER INFO FRA SERVER
router.get("/", (req, res) => {
  res.json({ httpMethod: "get" });
});

// KREATERE DATA
router.post("/", (req, res) => {
  res.json({ httpMethod: "post" });
});

// UPDATE
router.put("/", (req, res) => {
  res.json({ httpMethod: "put" });
});

// SLETTE
router.delete("/", (req, res) => {
  res.json({ mhttpMethod: "delete" });
});

export default router;
