import express from "express";

import {
  getCategory,
  saveCategory,
  showCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

// GET semua category
router.get("/", getCategory);

// GET category berdasarkan id
router.get("/:id", showCategory);

// POST tambah category
router.post("/", saveCategory       );

// PUT update category
router.put("/:id", updateCategory       );

// DELETE category
router.delete("/:id", deleteCategory);

export default router;