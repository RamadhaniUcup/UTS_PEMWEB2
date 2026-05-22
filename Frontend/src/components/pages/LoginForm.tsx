import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputText } from "../ui/inputText";
import { InputPassword } from "../ui/inputPassword";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

// Schema validasi
const loginSchema = z.object({
  nim: z.string().min(5, "NIM minimal 5 karakter"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

type LoginData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    // Simulasi pengecekan login
    if (data.nim === "24090105" && data.password === "24090105") {
      alert("Login Berhasil!");
      
      // Simpan data ke Zustand (Status login jadi true)
      login({ nim: data.nim }); 
      
      navigate("/dashboard");
    } else {
      alert("NIM atau password salah!");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-5 text-gray-800">
        Login
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <InputText
          label="NIM"
          name="nim"
          register={register}
          error={errors.nim?.message}
        />

        <InputPassword
          label="Password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          label="Login"
          variant="primary"
        />
        
        <div className="mt-6 text-center">
          Belum punya akun? <Link to="/register" className="text-[#801B1B] font-semibold">
            Daftar Disini
          </Link>
        </div>
      </form>
    </div>
  );
}