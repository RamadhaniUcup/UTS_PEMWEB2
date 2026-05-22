import { useEffect } from "react";
import { z } from "zod";
import { InputText } from "../../../ui/inputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../ui/Button";

type FormData = {
  name: string;
  role: string;
  image: string;
};

const schema = z.object({
  name: z.string().min(1, "Nama pembicara harus diisi"),
  role: z.string().min(1, "Role harus diisi"),
  image: z.string().min(1, "Image harus diisi"),
});

const API_URL = "https://uts-pemweb-2-six.vercel.app";

export default function PembicaraUpdate() {
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

  const getDetailPembicara = async () => {
    try {
      const response = await fetch(`${API_URL}/pembicara/${id}`);

      if (!response.ok) {
        throw new Error("Gagal mengambil detail pembicara");
      }

      const data = await response.json();

      setValue("name", data.name);
      setValue("role", data.role);
      setValue("image", data.image);
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengambil detail pembicara");
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${API_URL}/pembicara/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          role: data.role,
          image: data.image,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Gagal mengupdate pembicara");
        return;
      }

      alert("Pembicara berhasil diupdate");
      navigate("/dashboard/pembicara");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengupdate pembicara");
    }
  };

  useEffect(() => {
    getDetailPembicara();
  }, [id]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="bg-[#f8f5f0] rounded-2xl shadow-md p-8 border border-[#e0d6c8]">
        <h2 className="text-2xl font-bold text-[#3e2f1c] mb-6 border-b border-[#d6c7b2] pb-4">
          Edit Pembicara
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputText
            label="Nama Pembicara"
            name="name"
            register={register}
            error={errors.name?.message}
          />

          <InputText
            label="Role"
            name="role"
            register={register}
            error={errors.role?.message}
          />

          <InputText
            label="Image"
            name="image"
            register={register}
            error={errors.image?.message}
          />

          <div className="flex justify-start mt-4">
            <Button type="submit" label="Update Pembicara" />
          </div>
        </form>
      </div>
    </div>
  );
}