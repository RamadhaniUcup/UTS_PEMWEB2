import { useEffect } from "react";
import { z } from "zod";
import { InputText } from "../../../ui/inputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../ui/Button";

type FormData = {
  name: string;
};

const schema = z.object({
  name: z.string().min(1, "Nama Category harus diisi"),
});

const API_URL = "http://localhost:3000";

export default function CategoryUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const getDetailCategory = async () => {
    try {
      const response = await fetch(`${API_URL}/categories/${id}`);

      if (!response.ok) {
        throw new Error("Gagal mengambil detail category");
      }

      const data = await response.json();

      // Antisipasi struktur respons dari Backend.
      // Jika backend mengirim format { data: { id: 1, name: "Webinar" } },
      // maka datanya ada di data.data.name. Jika tidak, cukup data.name.
      setValue("name", data.name || data.data?.name);
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengambil detail category");
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${API_URL}/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
        }),
      });

      // Pindahkan pengecekan .ok SEBELUM .json()
      // Ini mencegah error "Unexpected token <" jika server merespons dengan HTML (misal error 500)
      if (!response.ok) {
        throw new Error("Gagal mengupdate category");
      }

      alert("Category berhasil diupdate");
      navigate("/dashboard/category");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengupdate category");
    }
  };

  useEffect(() => {
    if (id) {
      getDetailCategory();
    }
  }, [id]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
          Edit Category Event
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputText
            label="Category Event"
            name="name"
            register={register}
            error={errors.name?.message}
          />

          {/* Menyesuaikan layout menjadi ke tengah (center) dan menambahkan opsi tombol Batal dengan varian merah */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard/category")}
              className="px-6 py-2.5 rounded-lg text-white font-medium bg-red-500 hover:bg-red-600 transition-colors shadow-sm"
            >
              Batal
            </button>
            
            {/* Mengasumsikan komponen <Button /> bawaanmu sudah menggunakan style biru (primary) */}
            <Button type="submit" label="Update Category" />
          </div>
        </form>
      </div>
    </div>
  );
}