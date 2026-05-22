import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Pembicara = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const API_URL = "http://localhost:3000";

export default function PembicaraIndex() {
  const [pembicara, setPembicara] = useState<Pembicara[]>([]);

  const getPembicara = async () => {
    try {
      const response = await fetch(`${API_URL}/pembicara`);
      if (!response.ok) throw new Error("Gagal mengambil data pembicara");
      const data = await response.json();
      setPembicara(data);
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengambil data pembicara");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus pembicara ini?")) return;

    try {
      const response = await fetch(`${API_URL}/pembicara/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Gagal menghapus");
      alert("Pembicara berhasil dihapus");
      getPembicara();
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menghapus");
    }
  };

  useEffect(() => {
    getPembicara();
  }, []);

  return (
    <div className="p-8">
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Daftar Pembicara</h1>
        <Link
          to="/dashboard/pembicara/create"
          className="bg-white text-[#651624] px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
        >
          + Tambah Pembicara
        </Link>
      </div>

      {/* Grid Sistem */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pembicara.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex flex-col transition-transform hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl w-full h-48 object-cover shadow-sm"
              />
            </div>

            {/* Info Text */}
            <div className="flex-1 text-center mb-4">
              <p className="font-bold text-gray-900 text-lg">{item.name}</p>
              <p className="text-sm text-gray-500 font-medium">{item.role}</p>
            </div>

            {/* Tombol Aksi Seragam */}
            <div className="flex justify-center gap-3 pt-3 border-t border-gray-100">
              {/* Edit */}
              <Link
                to={`/dashboard/pembicara/edit/${item.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#651624] text-white text-sm font-semibold hover:bg-[#4a101a] transition shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                Edit
              </Link>
              
              {/* Delete */}
              <button
                onClick={() => handleDelete(item.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#651624] text-white text-sm font-semibold hover:bg-[#4a101a] transition shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.12-2.212a48.047 48.047 0 00-3.52 0c-1.21.048-2.12 1.032-2.12 2.212v.916m7.5 0H9.75" />
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}