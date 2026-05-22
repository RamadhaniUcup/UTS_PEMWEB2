interface InputTextProps {
  label: string;
  name: string;
  register: any;
  error?: string;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  name,
  register,
  error
}) => {
  return (
    <div className="flex flex-col gap-1">
      
      <label className="text-sm text-gray-700">
        {label}
      </label>

      
      <input
        {...register(name)}
        className={`border p-2 rounded-md w-full outline-none
        ${error ? "border-red-500" : "border-gray-300"}
        focus:ring-2 focus:ring-[#801B1B]`}
      />

      {error && (
        <p className="text-red-500 text-xs">
          {error}
        </p>
      )}
    </div>
  );
};