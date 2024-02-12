'use client';
import EditableImage from "@/components/layout/editableImage";
import InfoBox from "@/components/layout/infoBox";
import SuccessBox from "@/components/layout/successBox";
import UserForm from "@/components/layout/userForm";
import UserTabs from "@/components/layout/userTabs";
import Spinner from "@/components/spinner";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation"; // Alteração da importação para redirect
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const session = useSession();

  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);
  const { status } = session;

  useEffect(() => {
    console.log(status);
    if (status === 'authenticated') {
      fetch('/api/profile')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch profile data');
          }
          return response.json();
        })
        .then(data => {
          setUser(data);
          setIsAdmin(data.admin);
          setProfileFetched(true);
        })
        .catch(error => {
          console.error('Error fetching profile data:', error);
        });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev: { preventDefault: () => void; }, data: any) {
    ev.preventDefault();

    const savingPromise = new Promise<void>(async (resolve, reject) => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok)
        resolve()
      else
        reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Salvando...',
      success: 'Perfil Atualizado!',
      error: 'Ops.. Algo deu errado.',
    });

  }

  if (status === 'loading' || !profileFetched) {
    return <Spinner />;
  } else if (status === 'unauthenticated') {
    redirect('login'); // Redirecionamento para a página de login
    return null; // Retorna null para evitar que o restante do código seja executado
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={isAdmin} />
      <div className=" mx-auto mt-8">
        <UserForm user={user} onSave={handleProfileInfoUpdate} />
      </div>
    </section>
  );
}
