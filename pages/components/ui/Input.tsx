interface InputProps {
  placeholder: string;
  type: string;
}

export default function Input({ placeholder, type }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="gap-4  bg-white border-none rounded-sm h-[8vh] w-[28vw] placeholder:text-[#2E7D32] placeholder:font-semibold placeholder:p-3 "
    />
  );
}
