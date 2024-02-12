"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(ev: FormEvent) {
    ev.preventDefault();
    setLoginInProgress(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });

    setLoginInProgress(false);
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-orange-600 text-4xl mb-4">Login</h1>
      <form
        className="block max-w-xl mx-auto mt-5"
        method="POST"
        onSubmit={handleFormSubmit}
      >
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={loginInProgress}
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          autoComplete="current-password"
        />
        <Button
          type="submit"
          className="block w-full bg-secundary text-slate-100 font-semibold border border-gray-500 px-6 py-2 hover:bg-orange-600"
          disabled={loginInProgress}
        >
          {loginInProgress ? "Aguarde..." : "Login"}
        </Button>
        <div className="my-4 text-center text-gray-500">
          <p>Ou faça login através da sua conta Google</p>
        </div>
        <Button
         className="flex items-center gap-4 mx-auto bg-transparent border border-secundary
         text-orange-600 hover:bg-orange-400 hover:text-white cursor pointer"
         type="button"
         onClick={() => signIn('google', {callbackUrl: "/" })}
         
         >
          <Image
            src={"/images/google.png"}
            alt={"google"}
            width={24}
            height={24}
          />
          Login com o Google
        </Button>

        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Ainda não tem uma conta?{" "}
          <Link className=" underline text-secundary" href={"register"}>
            {" "}
            Criar conta
          </Link>
        </div>
      </form>
    </section>
  );
}
