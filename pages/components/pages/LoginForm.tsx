import Layout from "../Layout";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Title from "../ui/Title";

export default function LoginForm(){
  return (
    <Layout>
        <Title>Bem vindo ao <span className="text-[#FFD600]">DoaSync!</span></Title>
        <Input placeholder="Informe seu email" type="email"></Input>
        <Input placeholder="Informe sua senha" type="password"></Input>
        <div className="text-white"> Esqueceu a senha? <span className="text-yellow-400">Clique aqui</span> </div>
        <Button onClick={() => alert("Bem vindo ao sistema")}>Entrar</Button>
        <p className="text-white">Não tem uma conta? <span className="font-semibold">Cadastre-se</span></p>
    </Layout>
  );
}