import { Link } from "react-router-dom";

export default function Dashboard() {
  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    // bg-transparent memastikan warna marun dari DashboardLayout terlihat tembus pandang di sini
    <div className="w-full min-h-[85vh] bg-transparent p-8 font-sans">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          {/* Teks tanggal & sapaan dibuat PUTIH agar sangat jelas di atas background marun */}
          <p className="text-sm font-bold text-white/80 tracking-wider uppercase mb-1">
            {today}
          </p>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Halo, Yusuf.
          </h1>
          <p className="text-white/80 mt-2 text-base font-medium">
            Pantau ringkasan data dan kelola sistem Invofest di sini.
          </p>
        </div>
        
        {/* Tombol Aksi Cepat: Dibuat putih solid dengan teks marun untuk kontras yang elegan */}
        <Link 
          to="/dashboard/event" 
          className="inline-flex items-center gap-2 bg-white text-[#651624] px-6 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-bold text-sm"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Buat Event Baru
        </Link>
      </div>

      {/* --- STATS GRID SECTION --- */}
      {/* Kartu statistik dibuat putih agar terlihat "melayang" (floating) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Card 1: Total Event */}
        <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total Event</p>
              <h3 className="text-4xl font-black text-gray-900">12</h3>
            </div>
            <div className="p-3 bg-red-50/80 rounded-xl text-[#651624]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
          </div>
          <div className="flex items-center text-sm mt-auto">
            <span className="text-emerald-700 font-bold flex items-center bg-emerald-100 px-2.5 py-1 rounded-full">
              <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
              +2
            </span>
            <span className="text-gray-500 font-medium ml-2">bulan ini</span>
          </div>
        </div>

        {/* Card 2: Total Pembicara */}
        <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Total Pembicara</p>
              <h3 className="text-4xl font-black text-gray-900">24</h3>
            </div>
            <div className="p-3 bg-red-50/80 rounded-xl text-[#651624]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center text-sm mt-auto">
            <span className="text-emerald-700 font-bold flex items-center bg-emerald-100 px-2.5 py-1 rounded-full">
              <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
              +4
            </span>
            <span className="text-gray-500 font-medium ml-2">bulan ini</span>
          </div>
        </div>

        {/* Card 3: Kategori */}
        <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 duration-300">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Kategori Event</p>
              <h3 className="text-4xl font-black text-gray-900">8</h3>
            </div>
            <div className="p-3 bg-red-50/80 rounded-xl text-[#651624]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center text-sm mt-auto">
            <span className="text-gray-600 font-bold bg-gray-100 px-2.5 py-1 rounded-full">
              Tetap
            </span>
            <span className="text-gray-500 font-medium ml-2">sejak bulan lalu</span>
          </div>
        </div>
      </div>

      {/* --- CONTENT AREA (Aktivitas / Event Mendatang) --- */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Tabel */}
        <div className="border-b border-gray-100 px-8 py-6 flex justify-between items-center">
          <h2 className="text-xl font-extrabold text-gray-900">Agenda & Aktivitas</h2>
          <button className="text-sm font-bold text-[#651624] hover:underline">
            Lihat Semua
          </button>
        </div>
        
        {/* State Kosong (Empty State) */}
        <div className="p-16 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-gray-50/50 border border-gray-100 rounded-full flex items-center justify-center mb-5 text-gray-400 shadow-inner">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Belum ada agenda</h3>
          <p className="text-base text-gray-500 max-w-md mx-auto mb-8 font-medium">
            Saat ini belum ada event yang dijadwalkan dalam waktu dekat. Tambahkan event baru untuk memulainya.
          </p>
          <Link 
            to="/dashboard/event"
            className="text-sm font-bold text-[#651624] border-2 border-[#651624] px-6 py-3 rounded-xl hover:bg-red-50 transition-colors"
          >
            + Tambah Event Baru
          </Link>
        </div>
      </div>

    </div>
  );
}