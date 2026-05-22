import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

const API_URL = "https://uts-pemweb-2-six.vercel.app";

export default function CategoryIndex() {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/categories`);

      if (!response.ok) {
        throw new Error("Gagal mengambil data category");
      }

      const data = await response.json();
      setCategories(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCategory = async (id: number) => {
    if (confirm("Yakin ingin menghapus kategori ini?")) {
      try {
        const response = await fetch(`${API_URL}/categories/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Gagal menghapus kategori");
        }

        getCategories();
      } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan saat menghapus kategori");
      }
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Daftar Category</h1>

        <Link
          to="/dashboard/category/create"
          className="bg-white text-[#651624] px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
        >
          + Create New
        </Link>
      </div>

      {categories.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 text-center text-gray-600">
          Belum ada data category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">
                {category.name}
              </h3>

              <div className="flex justify-center gap-3">
                <Link
                  to={`/dashboard/category/edit/${category.id}`}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#651624] text-white text-sm font-semibold hover:bg-[#4a101a] transition shadow-sm"
                >
                  Edit
                </Link>

                <button
                  onClick={() => deleteCategory(category.id)}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition shadow-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}