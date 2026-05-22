import express from "express";

import {
  getPembicara,
  createPembicara,
  showPembicara,
  updatePembicara,
  deletePembicara,
} from "../controllers/pembicaraController.js";

const router = express.Router();

// GET semua pembicara
router.get("/", getPembicara);

// POST tambah pembicara
router.post("/", createPembicara);

// GET detail pembicara
router.get("/:id", showPembicara);

// PUT update pembicara
router.put("/:id", updatePembicara);

// DELETE pembicara
router.delete("/:id", deletePembicara);

export default router;