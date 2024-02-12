import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoIosSend } from "react-icons/io";
import React from "react";
import Link from "next/link";
import Menu from "@/components/icons/menu";
import Gift from "@/components/icons/gift";
import Cart from "@/components/icons/cart";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox";
import MenuItems from "./menuItems";
import Footer from "@/components/footer";


const cardapio = () => {
  return (
    <section>
    

      <nav className="flex gap-2 mt-10">
        <Input
          className="dark:bg-gray-900"
          placeholder="Qual é a sua fome de hoje?"
        />
        <Button
          className="bg-orange-600 hover:bg-orange-800 text-white"
          type="submit"
        >
          <IoIosSend />
        </Button>
        <div className="flex gap-4 items-center pl-3">
          {" "}
          <Link href={"/"} className="flex gap-2">
            <Menu /> Pedidos
          </Link>
          <Link href={"/"} className="flex gap-2">
            <Gift /> Promoções
          </Link>
          <Link href={"/"} className="flex gap-2">
            <Cart /> Carrinho
          </Link>
        </div>
      </nav>

      <div className="w-full h-72 border mt-5">

        
      </div>
      <div className="flex gap-20 items-center justify-center pt-10 text-secundary ">
        {" "}
        <Link href={"/"} className="flex gap-2 hover:text-orange-600">
          {" "}
          Pizzas
        </Link>
        <Link href={"/"} className="flex gap-2 hover:text-orange-600">
          {" "}
          Calzones
        </Link>
        <Link href={"/"} className="flex gap-2 hover:text-orange-600">
          Frangos
        </Link>
        <Link href={"/"} className="flex gap-2 hover:text-orange-600">
          Bebidas
        </Link>
        <Link href={"/"} className="flex gap-2 hover:text-orange-600">
          {" "}
          Doces
        </Link>
      </div>

      <div className="mt-5 ">
        <h1 className=" font-semibold text-2xl text-orange-700 p-5 ">Pizzas</h1>

        <div className="grid grid-cols-3 gap-3">
          
          <MenuItems />
          <MenuItems />
          <MenuItems />
          <MenuItems />
          <MenuItems />

          <MenuItems />
          

      
        </div>
      </div>
    
    </section>
  );
};

export default cardapio;
