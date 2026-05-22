import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Event = {
  id: number;
  name: string;
  location: string;
  description: string;
  dateEvent: string;
  categoryId: number;
  pembicaraId: number;
};

type Category = {
  id: number;
  name: string;
};

type Pembicara = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const API_URL = "https://uts-pemweb-2-q2.vercel.app";

export default function EventIndex() {
  const [events, setEvents] = useState<Event[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [pembicara, setPembicara] = useState<Pembicara[]>([]);

  const getEvents = async () => {
    try {
      const response = await fetch(`${API_URL}/events`);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    const response = await fetch(`${API_URL}/categories`);
    const data = await response.json();
    setCategories(data);
  };

  const getPembicara = async () => {
    const response = await fetch(`${API_URL}/pembicara`);
    const data = await response.json();
    setPembicara(data);
  };

  const getCategoryName = (id: number) => {
    const category = categories.find((item) => item.id === id);
    return category ? category.name : "-";
  };

  const getPembicaraName = (id: number) => {
    const speaker = pembicara.find((item) => item.id === id);
    return speaker ? speaker.name : "-";
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus event ini?")) return;

    try {
      const response = await fetch(`${API_URL}/events/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Gagal menghapus event");
      alert("Event berhasil dihapus");
      getEvents();
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menghapus event");
    }
  };

  useEffect(() => {
    getEvents();
    getCategories();
    getPembicara();
  }, []);

  return (
    <div className="p-8">
      {/* Header Halaman */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Daftar Event</h1>
        <Link
          to="/dashboard/event/create"
          className="bg-white text-[#651624] px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
        >
          + Tambah Event
        </Link>
      </div>

      {/* Grid Sistem */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-shadow"
          >
            <h2 className="font-extrabold text-xl text-gray-900 mb-4">{item.name}</h2>
            
            {/* Detail Informasi */}
            <div className="space-y-2 text-sm text-gray-600 mb-4 flex-grow">
              <p><span className="font-semibold text-gray-900">Lokasi:</span> {item.location}</p>
              <p><span className="font-semibold text-gray-900">Tanggal:</span> {item.dateEvent ? new Date(item.dateEvent).toLocaleDateString("id-ID") : "-"}</p>
              <p><span className="font-semibold text-gray-900">Kategori:</span> {getCategoryName(item.categoryId)}</p>
              <p><span className="font-semibold text-gray-900">Pembicara:</span> {getPembicaraName(item.pembicaraId)}</p>
              <p className="pt-2 text-gray-500 italic">"{item.description}"</p>
            </div>

            {/* Tombol Aksi Seragam */}
            <div className="flex justify-center gap-3 pt-4 border-t border-gray-100 mt-2">
              <Link
                to={`/dashboard/event/edit/${item.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#651624] text-white text-sm font-semibold hover:bg-[#4a101a] transition shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                Edit
              </Link>
              
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