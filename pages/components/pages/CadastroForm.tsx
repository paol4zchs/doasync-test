export default function CadastroForm (){ 
  return(
    <main className=" flex flex-col h-screen justify-center bg-[#2E7D32]">
      <div className="flex items-center flex flex-col gap-6">
        <h1 className="font-bold text-white text-[1.5rem]"> Crie sua conta no <span className="text-[#FFD600]">DoaSync!</span> </h1>
        <input placeholder="Name" type="text " className=" bg-white  border-none rounded-sm h-[8vh] w-[70vw] placeholder:text-[#2E7D32] font-semibold placeholder:p-4" />
        <input placeholder="Sobrenome" type="text " className=" bg-white  border-none rounded-sm h-[8vh] w-[70vw] placeholder:text-[#2E7D32] font-semibold placeholder:p-4" />
        <input placeholder="Email" type="email" className=" bg-white  border-none rounded-sm h-[8vh] w-[70vw] placeholder:text-[#2E7D32] font-semibold placeholder:p-4" />
        <input placeholder="Senha" type="password" className=" bg-white  border-none rounded-sm h-[8vh] w-[70vw] placeholder:text-[#2E7D32] font-semibold placeholder:p-4" />
        <button className="bg-[#FFD600] h-[8vh] w-[70vw] rounded-sm text-[1.5rem] text-[#2E7D32] font-bold">Cadastrar</button>
        <p className="text-white">Já tem uma conta? <span className="text-[#FFD600]"> Faça login</span></p>
      </div>

      {/* <div>
         <img className="hidden md:block" src="/public/logo.png" />
      </div> */}
    </main>
    
  )
}