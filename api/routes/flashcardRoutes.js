import express from "express";
import {
  createFlashcardSet,
  getFlashcardSets,
} from "../controllers/flashcardController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createFlashcardSet);
router.get("/", protect, getFlashcardSets);

export default router;
