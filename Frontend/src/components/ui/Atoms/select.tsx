interface SelectProps {
  label: string;
  name: string;
  register: any;
  rules?: any;
  options: { label: string; value: string }[];
  error?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  register,
  rules,
  options,
  error
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{label}</label>

      <select
        {...register(name, rules)}
        className={`border p-2 rounded-md
        ${error ? "border-red-500" : "border-gray-300"}`}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};