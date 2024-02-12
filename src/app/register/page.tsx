"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handlerFormSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

   
    const response = await fetch("api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
      if(response.ok){ 
      
      setUserCreated(true); 
    }else{ 

    
      setError(true);
    }
    setCreatingUser(false);
 
  
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-orange-600 text-4xl">Registre-se</h1>

      {userCreated && (
        <div className="my-4 text-center text-secundary">
          Usuário criado com sucesso! Agora faça {' '}
          <Link className="text-lg text-orange-600" href={'login'}>Login &raquo;</Link>
        </div>
      )}
      {error && (
           <div className="my-4 text-center text-secundary">
        Verifique os dados digitados e <br />
        tente novamente!
           
         </div>
      )}
      <form
        action=""
        className="block max-w-xl mx-auto mt-5"
        onSubmit={handlerFormSubmit}
      >
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={creatingUser}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          disabled={creatingUser}
        />
        <Button
          type="submit"
          className="block w-full bg-secundary text-slate-100 font-semibold border border-gray-500 px-6 py-2 hover:bg-orange-600"
          disabled={creatingUser}
        >
          Criar Conta
        </Button>
        <div className="my-4 text-center text-gray-500">
          <p>Ou faça login através da sua conta Google</p>
        </div>
        <Button className="flex items-center gap-4 mx-auto bg-transparent border border-secundary text-orange-600 hover:bg-orange-400 hover:text-white">
  <Image
    src={"/images/google.png"}
    alt={"google"}
    width={24}
    height={24}
    onClick={() => signIn('google', {callbackUrl: "/" })}
  />
  Login com o Google
</Button>


        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Já tem uma conta? { ' '}
          <Link className=" underline text-secundary" href={'login'}> Faça Login</Link>
        </div>
      </form>
    </section>
  );
}
