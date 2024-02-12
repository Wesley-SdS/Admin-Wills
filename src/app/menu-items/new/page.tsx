'use client';
import Left from "@/components/icons/Left";
import Right from "@/components/icons/right";
import EditableImage from "@/components/layout/editableImage";
import MenuItemForm from "@/components/layout/menuItemForm";
import UserTabs from "@/components/layout/userTabs";
import {useProfile} from "@/components/layout/useProfile";
import Link from "next/link";
import {redirect} from "next/navigation";
import {useState} from "react";
import toast from "react-hot-toast";

export default function NewMenuItemPage() {

  const [redirectToItems, setRedirectToItems] = useState(false);
  const {loading, data} = useProfile();

  async function handleFormSubmit(ev: { preventDefault: () => void; }, data: any) {
    ev.preventDefault();
    const savingPromise = new Promise<void>(async (resolve, reject) => {
      const response = await fetch('/api/menu-items', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok)
        resolve();
      else
        reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Aguarde um momento enquanto salvo esse novo produto!',
      success: 'Salvo com Sucesso!',
      error: 'Ops... Algo deu Errado!',
    });

    setRedirectToItems(true);
  }

  if (redirectToItems) {
    return redirect('/menu-items');
  }

  if (loading) {
    return 'Loading user info...';
  }

  if (!data.admin) {
    return 'Not an admin.';
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={true} />
      <div className="max-w-2xl mx-auto mt-8">
        <Link href={'/menu-items'} className="button">
          <Left />
          <span>Mostrar todos os itens do Cardápio!</span>
        </Link>
      </div>
      <MenuItemForm menuItem={null} onSubmit={handleFormSubmit} />
    </section>
  );
}