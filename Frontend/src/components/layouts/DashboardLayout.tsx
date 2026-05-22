import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Category", path: "/dashboard/category" },
    { name: "Pembicara", path: "/dashboard/pembicara" },
    { name: "Biodata", path: "/dashboard/biodata" },
    { name: "Event", path: "/dashboard/event" },
  ];

  return (
    // Memaksa warna marun dengan inline style agar pasti berhasil
    <div className="flex w-full min-h-screen font-sans" style={{ backgroundColor: "#651624" }}>
      
      {/* Bagian Kiri (Sidebar) */}
      <div className="bg-white border-r border-gray-200 w-64 flex flex-col justify-between p-6 h-screen sticky top-0 shadow-sm z-20">
        <div>
          <div className="mb-10 px-2 flex items-center justify-center">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
              alt="Logo INVOFEST"
              className="w-full h-auto max-w-[150px] object-contain"
            />
          </div>

          <ul className="flex flex-col gap-2 w-full">
            {navItems.map((item) => {
              const isActive =
                item.path === "/dashboard"
                  ? location.pathname === "/dashboard"
                  : location.pathname.startsWith(item.path);

              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                      isActive
                        ? "text-[#651624] bg-[#651624]/10" 
                        : "text-gray-600 hover:text-[#651624] hover:bg-gray-50" 
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-[#651624] text-white px-4 py-3 rounded-xl cursor-pointer hover:bg-[#4a101a] w-full transition-colors shadow-md font-bold tracking-wide"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Bagian Kanan (Konten Utama) */}
      <div className="flex-1 overflow-y-auto h-screen relative">
        <Outlet />
      </div>
    </div>
  );
}