import express from "express";
import { register } from "../controllers/authController.js";

const router = express.Router();

// FRONTEND HENTER INFO FRA SERVER
router.post("/register", register);

// KREATERE DATA

// UPDATE

// SLETTE

export default router;
