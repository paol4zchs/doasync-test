interface ButtonProps  {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";

}


export default function Button ({ children, onClick, type }: ButtonProps){
  return (
   <button
      type={type}
      onClick={onClick}
      className="shadow-xs shadow-[#FFD600] bg-[#FFD600] border-none text-[#2E7D32] font-semibold text-[2rem] rounded-sm w-[25vw] h-[8vh]"
    >
    {children}
    </button>
  );
}
