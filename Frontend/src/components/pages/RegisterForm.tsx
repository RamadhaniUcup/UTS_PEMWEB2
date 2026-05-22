import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { PasswordInput } from "../ui/PasswordInput";
import { Textarea } from "../ui/Atoms/textarea";
import { Select } from "../ui/Atoms/select";
import { Button } from "../ui/Button";

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div>

            <h2 className="text-xl font-semibold text-center mb-5 text-gray-800">
                Registrasi Event
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">

                <Input
                    label="Nama"
                    name="name"
                    register={register}
                    rules={{ required: "Nama harus diisi" }}
                    error={errors.name?.message as string}
                />

                <Input
                    label="Email"
                    name="email"
                    register={register}
                    rules={{ required: "format email tidak valid" }}
                    error={errors.email?.message as string}
                />

                <PasswordInput
                    label="Password"
                    name="password"
                    register={register}
                    rules={{
                        required: "Password harus diisi",
                        minLength: {
                            value: 8,
                            message: "Password minimal 8 karakter"
                        }
                    }}
                    error={errors.password?.message as string}
                />

                <Select
                    label="Kategori Event"
                    name="event"
                    register={register}
                    rules={{ required: "Pilih kategori event" }}
                    error={errors.event?.message as string}
                    options={[
                        { label: "Seminar TI", value: "ti" },
                        { label: "Invofest", value: "invofest" },
                        { label: "Workshop AI", value: "ai" }
                    ]}
                />

                <Textarea
                    label="Bio"
                    name="bio"
                    register={register}
                    rules={{ required: "Bio harus diisi" }}
                    error={errors.bio?.message as string}
                    className="h-16"
                />

                <div className="flex justify-center mt-1">
                    <Button type="submit"
                        label="Daftar"
                        className="w-full bg-[#801B1B] hover:bg-[#601414]" />

                </div>
                <div className="mt-3 text-center">
                    Sudah punya akun? <a href="/login" className="text-[#801B1B] font-medium">Login sekarang!</a>
                </div>
            </form>
        </div>
    );
}