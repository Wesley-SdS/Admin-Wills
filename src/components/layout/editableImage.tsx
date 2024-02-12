import React, { ChangeEvent } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface EditableImageProps {
  link: string | null;
  setLink: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function EditableImage({ link, setLink }: EditableImageProps) {
  async function handleFileChange(ev: ChangeEvent<HTMLInputElement>) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData();
      data.set('file', files[0]);

      const uploadPromise = fetch('/api/upload', {
        method: 'POST',
        body: data,
      }).then(response => {
        if (response.ok) {
          return response.json().then((newLink: string) => {
            setLink(newLink);
          });
        }
        throw new Error('Ops.. Algo deu errado!');
      });

      await toast.promise(uploadPromise, {
        loading: 'Carregando...',
        success: 'Carregamento Completo',
        error: 'Erro no Carregamento',
      });
    }
  }

  return (
    <>
      {link && (
        <Image
          className=" rounded-full w-48 h-48  mb-1"
          src={link}
          width={450}
          height={450}
          alt={'avatar'}
        />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          Sem imagem
        </div>
      )}
      <label>
        <Input type="file" className="hidden " onChange={handleFileChange} />
        <span className=" block border border-gray-800 rounded-lg p-2 text-center mt-5 cursor-pointer text-md bg-orange-600 text-white font-semibold italic hover:bg-secundary">
          Alterar 
        </span>
      </label>
    </>
  );
}
