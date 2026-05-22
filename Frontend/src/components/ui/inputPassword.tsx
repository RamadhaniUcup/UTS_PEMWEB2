import { useState } from "react";

interface InputPasswordProps {
  label: string;
  name: string;
  error?: string;
  register: any;
  rules?: any;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  name,
  error,
  register,
  rules
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      
      <label htmlFor={name} className="text-sm text-gray-700">
        {label}
      </label>

      
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register(name, rules)}
          className={`border p-2 w-full rounded-md pr-12 outline-none
          ${error ? "border-red-500" : "border-gray-300"}
          focus:ring-2 focus:ring-[#801B1B]`}
        />

      
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-xs">
          {error}
        </p>
      )}
    </div>
  );
};