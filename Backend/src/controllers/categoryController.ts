import { Request, Response } from "express";
import prisma from "../lib/db.js";

// 1. Menampilkan semua kategori
export const getCategory = async (req: Request, res: Response) => {
  try {
    const allCategory = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(allCategory);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data category",
      error,
    });
  }
};

// 2. Menyimpan data kategori baru
export const saveCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Nama kategori harus diisi",
      });
    }

    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });

    res.status(201).json({
      message: "Data berhasil disimpan",
      data: newCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menyimpan data category",
      error,
    });
  }
};

// 3. Menampilkan kategori berdasarkan ID
export const showCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!category) {
      return res.status(404).json({
        message: "Category tidak ditemukan",
      });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil detail category",
      error,
    });
  }
};

// 4. Update kategori
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Nama kategori harus diisi",
      });
    }

    const updatedCategory = await prisma.category.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });

    res.json({
      message: "Category berhasil diupdate",
      data: updatedCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengupdate category",
      error,
    });
  }
};

// 5. Hapus kategori
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      message: "Category berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus category",
      error,
    });
  }
};