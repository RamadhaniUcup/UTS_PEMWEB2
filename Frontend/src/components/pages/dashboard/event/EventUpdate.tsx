import { useEffect, useState } from "react";
import { z } from "zod";
import { InputText } from "../../../ui/inputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../ui/Button";

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

type FormData = {
  title: string;
  description: string;
  location: string;
  dateEvent: string;
  categoryId: string;
  pembicaraId: string;
};

const schema = z.object({
  title: z.string().min(1, "Judul event harus diisi"),
  description: z.string().min(1, "Deskripsi harus diisi"),
  location: z.string().min(1, "Lokasi harus diisi"),
  dateEvent: z.string().min(1, "Tanggal event harus diisi"),
  categoryId: z.string().min(1, "Kategori event harus dipilih"),
  pembicaraId: z.string().min(1, "Pembicara harus dipilih"),
});

const API_URL = "https://uts-pemweb-2-six.vercel.app";

export default function EventUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [pembicara, setPembicara] = useState<Pembicara[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const getCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/categories`);

      if (!response.ok) {
        throw new Error("Gagal mengambil kategori");
      }

      const data = await response.json();
      setCategories(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Gagal mengambil kategori:", error);
    }
  };

  const getPembicara = async () => {
    try {
      const response = await fetch(`${API_URL}/pembicara`);

      if (!response.ok) {
        throw new Error("Gagal mengambil pembicara");
      }

      const data = await response.json();
      setPembicara(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Gagal mengambil pembicara:", error);
    }
  };

  const getDetailEvent = async () => {
    try {
      const response = await fetch(`${API_URL}/events/${id}`);

      if (!response.ok) {
        throw new Error("Gagal mengambil detail event");
      }

      const data = await response.json();

      setValue("title", data.name);
      setValue("description", data.description);
      setValue("location", data.location);
      setValue("dateEvent", data.dateEvent ? data.dateEvent.slice(0, 10) : "");
      setValue("categoryId", String(data.categoryId));
      setValue("pembicaraId", String(data.pembicaraId));
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengambil detail event");
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${API_URL}/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.title,
          description: data.description,
          location: data.location,
          date_event: data.dateEvent,
          category_id: Number(data.categoryId),
          pembicara_id: Number(data.pembicaraId),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Gagal mengupdate event");
        return;
      }

      alert("Event berhasil diupdate");
      navigate("/dashboard/event");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengupdate event");
    }
  };

  useEffect(() => {
    getCategories();
    getPembicara();

    if (id) {
      getDetailEvent();
    }
  }, [id]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-[#f8f5f0] rounded-2xl shadow-md p-8 border border-[#e0d6c8]">
        <h2 className="text-2xl font-bold text-[#3e2f1c] mb-6 border-b border-[#d6c7b2] pb-4">
          Edit Event
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputText
            label="Event Title"
            name="title"
            register={register}
            error={errors.title?.message}
          />

          <InputText
            label="Description"
            name="description"
            register={register}
            error={errors.description?.message}
          />

          <InputText
            label="Location"
            name="location"
            register={register}
            error={errors.location?.message}
          />

          <div>
            <label className="block mb-2 font-medium text-[#3e2f1c]">
              Event Date
            </label>
            <input
              type="date"
              {...register("dateEvent")}
              className="w-full px-4 py-3 rounded-xl border border-[#d6c7b2] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.dateEvent?.message}
            </p>
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#3e2f1c]">
              Category Event
            </label>
            <select
              {...register("categoryId")}
              className="w-full px-4 py-3 rounded-xl border border-[#d6c7b2] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Pilih Category Event</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <p className="text-sm text-red-500 mt-1">
              {errors.categoryId?.message}
            </p>
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#3e2f1c]">
              Pembicara
            </label>
            <select
              {...register("pembicaraId")}
              className="w-full px-4 py-3 rounded-xl border border-[#d6c7b2] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Pilih Pembicara</option>
              {pembicara.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} - {item.role}
                </option>
              ))}
            </select>
            <p className="text-sm text-red-500 mt-1">
              {errors.pembicaraId?.message}
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => navigate("/dashboard/event")}
              className="px-6 py-2.5 rounded-xl text-white font-medium bg-red-500 hover:bg-red-600 transition-colors shadow-sm"
            >
              Batal
            </button>

            <Button type="submit" label="Update Event" />
          </div>
        </form>
      </div>
    </div>
  );
}