'use client';
import Right from "@/components/icons/right";
import UserTabs from "@/components/layout/userTabs";
import { useProfile } from "@/components/layout/useProfile";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export default function MenuItemsPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setMenuItems(menuItems);
      });
    });
  }, []);

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin.";
  }

  // Filtrar os itens do menu com base no termo de busca
  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mt-8 max-w-4xl mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <Link className="button flex" href={"/menu-items/new"}>
          <span>Adicionar um novo Item no Cardápio</span>
          <Right />
        </Link>
      </div>
      <div className="flex gap-4 items-center justify-center mt-5">
        <Input
          aria-label="Busque por itens do cardápio"
          placeholder="Busque por itens do cardápio"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button className="w-48 hover:bg-secundary text-base font-semibold" type="submit" title="Buscar" aria-label="Buscar transações" >
          <CiSearch size={20} />
          Buscar
        </Button>
      </div>
      <div>
        <h2 className="text-sm text-orange-600 mt-8">
          Editar itens do Cardápio:
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {filteredMenuItems?.length > 0 &&
            filteredMenuItems.map((item) => (
              <Link
                key={item._id}
                href={"/menu-items/edit/" + item._id}
                className="text-center border border-gray-600 group hover:bg-orange-200 hover:shadow-md hover:shadow-black/75 transition-all cursor cursor-pointer rounded-lg p-2"
              >
                <div className="flex justify-center pt-2">
                  <Image
                    className="border border-slate-800 rounded-md"
                    src={item.image}
                    alt={""}
                    width={250}
                    height={200}
                  />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg pt-3">{item.name}</div>
                  {item.basePrice && (
                    <div className="italic font-semibold text-secundary pb-3">
                      Preço: R${item.basePrice}
                    </div>
                  )}
                  {/* Exibindo o preço usando item.basePrice */}
                  {item.description && (
                    <div
                      className="italic text-balance"
                      style={{ maxHeight: "150px", overflow: "hidden" }}
                    >
                      Descrição: {item.description}
                    </div>
                  )}
                </div>
              </Link>
            ))}
        </div>
      </div>
      <div className="mt-4 text-start text-secundary font-semibold italic">
        Total de itens cadastrados: {menuItems.length}
      </div>
    </section>
  );
}


