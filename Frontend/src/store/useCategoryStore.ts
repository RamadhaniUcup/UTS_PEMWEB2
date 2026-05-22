import { create } from "zustand";

interface Category {
  id: number;
  name: string;
}

interface CategoryState {
  categories: Category[];
  getCategories: () => Promise<void>;
  addCategory: (name: string) => Promise<void>;
  deleteCategory: (id: number) => Promise<void>;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],

  getCategories: async () => {
    const res = await fetch("http://localhost:3000/categories");
    const data = await res.json();
    set({ categories: data });
  },

  addCategory: async (name) => {
    const res = await fetch("http://localhost:3000/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();

    set((state) => ({
      categories: [...state.categories, data],
    }));
  },

  deleteCategory: async (id) => {
    await fetch(`http://localhost:3000/categories/${id}`, { method: "DELETE" });

    set((state) => ({ categories: state.categories.filter((c) => c.id !== id) }));
  },
}));