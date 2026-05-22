export default function Biodata() {
  return (
    <div className="p-8 w-full min-h-[85vh] flex items-start justify-center pt-10">
      {/* Card Container Utama */}
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-[#e0d6c8]">
        
        {/* Header Banner - Menggunakan warna merah marun dari referensi gambar */}
        <div className="h-36 bg-[#651624] relative">
           {/* Opsional: Efek pattern atau background transparan bisa ditaruh di sini nanti */}
        </div>

        {/* Bagian Konten */}
        <div className="px-8 pb-12 sm:px-12 relative">
          
          {/* Bagian Avatar & Badge Status */}
          <div className="relative flex justify-between items-end -mt-16 mb-8">
            <div className="relative z-10 p-1.5 bg-white rounded-full shadow-md">
              {/* Ganti src ini dengan path fotomu jika sudah ada (misal: src="/fotoku.jpg") */}
              <img
                src="data:image/jpeg;base64,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"
                alt="Profile Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-white object-top"
              />
            </div>
            <div className="mb-4 text-right">
              <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                Mahasiswa Aktif
              </span>
            </div>
          </div>

          {/* Judul Halaman */}
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-[#3e2f1c] mb-2 tracking-tight">
              Biodata Mahasiswa
            </h2>
            <p className="text-gray-500 font-medium">
              Informasi akademik dan profil singkat mahasiswa.
            </p>
          </div>

          {/* Grid Data Mahasiswa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            
            {/* Field: Nama */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Nama Lengkap
              </p>
              <p className="text-xl font-semibold text-gray-800">
                Yusuf Yudha Ramadhani
              </p>
            </div>

            {/* Field: NIM */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Nomor Induk Mahasiswa
              </p>
              <p className="text-xl font-semibold text-gray-800">
                24090105
              </p>
            </div>

            {/* Field: Kelas */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Program Studi / Kelas
              </p>
              <p className="text-xl font-semibold text-gray-800">
                Teknik Informatika - TI 4C
              </p>
            </div>

            {/* Field: Mata Kuliah */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Mata Kuliah
              </p>
              <p className="text-xl font-semibold text-gray-800">
                Pemrograman Web 2
              </p>
            </div>

            {/* Field Tambahan: Institusi (Lebar penuh / Col-span-2) */}
            <div className="space-y-1.5 md:col-span-2 pt-6 border-t border-gray-100 mt-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Institusi Pendidikan
              </p>
              <p className="text-xl font-semibold text-gray-800">
               Universitas Harkat Negeri
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}