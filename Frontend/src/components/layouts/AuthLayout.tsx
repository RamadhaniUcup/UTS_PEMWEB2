import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen bg-white font-sans">
      
      {/* Kolom Kiri: Branding (Sekarang lebih padat & rapi di tengah) */}
      <div className="hidden lg:flex w-1/2 bg-[#651624] p-12 flex-col items-center justify-center text-center text-white relative overflow-hidden">
        
        {/* Dekorasi lingkaran (Tetap ada tapi tidak mengganggu) */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        {/* Content Wrapper: Mengelompokkan logo dan teks agar tidak berjauhan */}
        <div className="z-10 flex flex-col items-center gap-6">
          
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="Logo INVOFEST"
            className="w-90 brightness-0 invert" 
          />

          <div className="max-w-sm">
            <h1 className="text-3xl font-extrabold mb-3 leading-tight">
              
            </h1>
            <p className="text-white/70 text-base text-center">
            Informatics Vocational Festival 2026.
            </p>
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Login Form Area */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50/50">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
      
    </div>
  );
}