
import Talkshow from "./components/pages/Talkshow";
import Seminar from "./components/pages/Seminar";
import Competition from "./components/pages/Competition";
import Homepage from "./components/pages/Homepage_backup";
import Workshop from "./components/pages/Workshop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import LoginForm from "./components/pages/LoginForm";
import RegisterForm from "./components/pages/RegisterForm";
import DashboardIndex from "./components/pages/dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./components/layouts/DashboardLayout";
import CategoryIndex from "./components/pages/dashboard/category/CategoryIndex";
import PembicaraIndex from "./components/pages/dashboard/pembicara/PembicaraIndex";
import EventIndex from "./components/pages/dashboard/event/EventIndex";
import CategoryCreate from "./components/pages/dashboard/category/CategoryCreate";
import PembicaraCreate from "./components/pages/dashboard/pembicara/PembicaraCreate";
import EventCreate from "./components/pages/dashboard/event/EventCreate";
import PembicaraUpdate from "./components/pages/dashboard/pembicara/PembicaraUpdate";
import EventUpdate from "./components/pages/dashboard/event/EventUpdate";
import CategoryUpdate from "./components/pages/dashboard/category/CategoryUpdate";
import Biodata from "./components/pages/dashboard/biodata/Biodata";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //Untuk website */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/workshop" element={<Workshop />} />
        </Route>


        {/* //Untuk login dan register */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/competition" element={<Competition />} />
        </Route>

        // halamamn yang hanya bisa diakses setelah login
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardIndex />} />
            <Route path="/dashboard/category" element={<CategoryIndex />} />

            <Route path="/dashboard/pembicara" element={<PembicaraIndex />} />
            <Route path="/dashboard/event" element={<EventIndex />} />
            <Route path="/dashboard/category/create" element={<CategoryCreate />} />
            <Route path="/dashboard/pembicara/create" element={<PembicaraCreate />} />
            <Route path="/dashboard/pembicara/edit/:id" element={<PembicaraUpdate />} />
            <Route path="/dashboard/event/create" element={<EventCreate />} /> {/* nanti ganti ke EventCreate kalau sudah dibuat */}
            <Route path="/dashboard/event/edit/:id" element={<EventUpdate />} />
            <Route path="/dashboard/category/edit/:id" element={<CategoryUpdate />} />
            <Route path="/dashboard/biodata" element={<Biodata />} />
          </Route>
        </Route>
      </Routes>


    </BrowserRouter>
  );
}

export default App;