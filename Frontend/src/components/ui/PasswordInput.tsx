interface PasswordInputProps {
  label: string;
  name: string;
  register: any;
  rules?: any;
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  register,
  rules,
  error
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{label}</label>

      <input
        type="password"
        {...register(name, rules)}
        className={`border p-2 rounded-md outline-none
        ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};