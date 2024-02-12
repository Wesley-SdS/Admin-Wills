"use client";
import DeleteButton from "@/components/deleteButton";
import Left from "@/components/icons/Left";
import EditableImage from "@/components/layout/editableImage";
import MenuItemForm from "@/components/layout/menuItemForm";
import UserTabs from "@/components/layout/userTabs";
import { useProfile } from "@/components/layout/useProfile";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditMenuItemPage() {
  const { id } = useParams();

  const [menuItem, setMenuItem] = useState(null);
  const [redirectToItems, setRedirectToItems] = useState(false);
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((items) => {
        const item = items.find(
          (i: { _id: string | string[] }) => i._id === id
        );
        setMenuItem(item);
      });
    });
  }, []);

  async function handleFormSubmit(
    ev: { preventDefault: () => void },
    data: any
  ) {
    ev.preventDefault();
    data = { ...data, _id: id };
    const savingPromise = new Promise<void>(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Aguarde um momento enquanto salvo esse novo produto!",
      success: "Salvado com sucesso!",
      error: "Ops... Algo deu Errado!",
    });

    setRedirectToItems(true);
  }

  async function handleDeleteClick() {
    const promise = new Promise<void>(async (resolve, reject) => {
      const res = await fetch("/api/menu-items?_id=" + id, {
        method: "DELETE",
      });
      if (res.ok) resolve();
      else reject();
    });

    await toast.promise(promise, {
      loading: "Deletando...",
      success: "Excluído com sucesso!",
      error: "Ops... Algo deu Errado!",
    });

    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect("/menu-items");
  }

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin.";
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
      <div className="max-w-2xl mx-auto mt-8">
        <Link href={"/menu-items"} className="button">
          <Left />
          <span>Mostrar Todos os Itens do Cardápio!</span>
        </Link>
      </div>
      <MenuItemForm menuItem={menuItem} onSubmit={handleFormSubmit} />
      <div className="max-w-md mx-auto mt-2">
        <div className="max-w-xs ml-auto pl-4">
          <DeleteButton label="Excluir " onDelete={handleDeleteClick} />
        </div>
      </div>
    </section>
  );
}
