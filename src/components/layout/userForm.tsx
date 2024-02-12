import React, { ChangeEvent, FormEvent, useState, Dispatch, SetStateAction } from 'react';
import EditableImage from '@/components/layout/editableImage';
import AddressInputs from '@/components/layout/addressInputs';
import { useProfile } from '@/components/layout/useProfile';
import { Button } from '../ui/button';

interface UserFormProps {
  user: {
    number: string;
    name?: string;
    image?: string;
    phone?: string;
    streetAddress?: string;
    postalCode?: string;
    city?: string;
    country?: string;
    admin?: boolean; // Atualizado para incluir nulidade
    email: string;
  };
  onSave: (ev: FormEvent, data: object) => void;
}

export default function UserForm({ user, onSave }: UserFormProps) {
  const [userName, setUserName] = useState(user?.name ?? '');
  const [image, setImage]: [string | null, Dispatch<SetStateAction<string | null>>] = useState(
    user?.image ?? null
  );
  const [phone, setPhone] = useState(user?.phone ?? '');
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress ?? '');
  const [number, setNumber] = useState(user?.number ?? ''); // Modificado de streetAddress para number
  const [postalCode, setPostalCode] = useState(user?.postalCode ?? '');
  const [city, setCity] = useState(user?.city ?? '');
  const [country, setCountry] = useState(user?.country ?? '');
  const { data: loggedInUserData } = useProfile();

  function handleAddressChange(propName: string, value: string) {
    if (propName === 'phone') setPhone(value);
    if (propName === 'streetAddress') setStreetAddress(value);
    if (propName === 'number') setNumber(value);
    if (propName === 'postalCode') setPostalCode(value);
    if (propName === 'city') setCity(value);
    if (propName === 'country') setCountry(value);
  }

  return (
    <div className=" max-w-4xl mx-auto p-4 flex gap-4">
      <div>
        <div className="flex-col justify-center gap-4 p-2 rounded-lg max-w-[300px] mx-auto ">
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
      <form
        className="grow"
        onSubmit={(ev) => {
          const formData = {
            name: userName,
            image,
            phone,
            admin: user?.admin || false,
            streetAddress, // Se necessário, altere para number
            number,
            city,
            country,
            postalCode,
          };

          console.log('Dados a serem enviados para onSave:', formData);

          onSave(ev, formData);
        }}
      >
        <label>
          Nome:
          <input
            className='rounded-lg'
            type="text"
            placeholder="Como gostaria de ser Chamado(a)?"
            value={userName}
            onChange={(ev) => setUserName(ev.target.value)}
          />
        </label>
        <label>E-mail</label>
        <input className='rounded-lg bg-slate-100 border border-orange-600' type="email" readOnly value={user.email} placeholder={'E-mail'} />
        <AddressInputs
          addressProps={{ phone, streetAddress, number, postalCode, city, country }}
          setAddressProp={handleAddressChange}
        />
        {loggedInUserData.admin && (
          <div>
            <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="adminCb">
              <input
                id="adminCb"
                type="checkbox"
                value={'1'}
                checked={user?.admin || false}
                onChange={() => {}}
              />
              <span>Admin</span>
            </label>
          </div>
        )}
        <Button className='w-full bg-orange-600 font-semibold italic hover:bg-secundary ' type="submit">Salvar</Button>
      </form>
    </div>
  );
}
