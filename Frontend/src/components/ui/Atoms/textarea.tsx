interface TextareaProps {
  label: string;
  name: string;
  register: any;
  rules?: any;
  error?: string;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  register,
  rules,
  error,
  className
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm">{label}</label>

      <textarea
        {...register(name, rules)}
        className={`border p-2 rounded-md resize-none
        ${error ? "border-red-500" : "border-gray-300"} ${className}`}
      />

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};