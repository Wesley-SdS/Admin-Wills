'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Right from "../icons/right";
import Link from "next/link";
import MenuItem from "@/components/menu/menuItem";

export default function HomeMenu()  {

  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);
  return (
    <section className="flex flex-col items-center justify-center ">
      <div></div>

      <div className="text-center py-10">
        <h3 className="uppercase text-orange-600 font-semibold leading-4">
          Confira
        </h3>
        <h2 className="text-secundary font-bold text-4xl italic ">
          As mais vendidas
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers?.length > 0 && bestSellers.map(item => (
          <MenuItem key={item._id} {...item} />
        ))}
      </div>

      <h2 className="text-orange-600 text-center font-bold text-4xl italic py-10">
        Confira o nosso Cardápio completo!
      </h2>

      <Link
        href={"cardapio"}
        className="flex items-center justify-center
         gap-2 uppercase bg-secondary text-white rounded-lg px-6 py-2 hover:bg-orange-600 transition 0.2s "
      >
        Acessar o Cardápio
        <Right />
      </Link>
    </section>
  );
};


