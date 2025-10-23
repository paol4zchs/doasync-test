
interface InputProps {  
    placeholder: string
    type: string
} 

export default function Input({ placeholder, type }: InputProps){
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-white border-none rounded-sm w-[25vw] h-[8vh] // placeholder:text-[#2E7D32] placeholder:font-semibold placeholder:p-5"
    />
  );
}