import React, { useState } from 'react';
import InputMask from 'react-input-mask';

interface AddressInputsProps {
  addressProps: {
    phone: string;
    streetAddress: string;
    number: string;
    postalCode: string;
    city: string;
    country: string;
  };
  setAddressProp: (propName: string, value: string) => void;
}

const AddressInputs: React.FC<AddressInputsProps> = ({ addressProps, setAddressProp }) => {
  const [loadingCep, setLoadingCep] = useState(false);

  const fetchAddressByCep = async (cep: string) => {
    try {
      setLoadingCep(true);

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setAddressProp('streetAddress', data.logradouro);
        setAddressProp('city', data.localidade);
        setAddressProp('country', data.uf);
      } else {
        // Tratar erro, por exemplo, limpar os campos ou exibir uma mensagem
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    } finally {
      setLoadingCep(false);
    }
  };

  const handleCepChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = ev.target.value.replace(/\D/g, ''); // Remover caracteres não numéricos do CEP

    if (newCep.length === 8) {
      fetchAddressByCep(newCep);
    }

    setAddressProp('postalCode', newCep);
  };

  return (
    <div>
      <div className='flex gap-4 w-full'>
        <label className='flex-grow'>
          Telefone:
          <InputMask
            className='flex border h-10 w-72 border-gray-300 p-2 rounded-lg'
            mask="(99) 99999-9999"
            placeholder="Preferencialmente WhatsApp"
            value={addressProps.phone}
            onChange={(ev) => setAddressProp('phone', ev.target.value)}
          />
        </label>
        <label>
          CEP:
          <InputMask
            className='flex border border-gray-300 h-10 w-custom p-2 rounded-lg'
            mask="99999-999"
            placeholder="Digite o seu CEP:"
            value={addressProps.postalCode}
            onChange={handleCepChange}
          />
        </label>
      </div>
      <div className='flex gap-4 w-full'>
      <label className='flex-grow'>
        Endereço:
        <input
        className='rounded-lg'
          type="text"
          placeholder="Digite o seu Endereço:"
          value={addressProps.streetAddress}
          onChange={(ev) => setAddressProp('streetAddress', ev.target.value)}
        />
      </label>
      <label className='flex-grow'>
        Numero:
        <input
      className='rounded-lg'
      type="text"
      placeholder="Digite o numero e o complemento:"
      value={addressProps.number}  
      onChange={(ev) => setAddressProp('number', ev.target.value)} 
    />
      </label>
      </div>
     
      <div className='flex gap-4 w-full'>
        <label className="flex-grow">
          Cidade:
          <input
            className="w-full rounded-lg"
            type="text"
            placeholder="Cidade:"
            value={addressProps.city}
            onChange={(ev) => setAddressProp('city', ev.target.value)}
          />
        </label>
        <label className="flex-grow">
          Estado:
          <input
            className="w-full rounded-lg"
            type="text"
            placeholder="Estado:"
            value={addressProps.country}
            onChange={(ev) => setAddressProp('country', ev.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default AddressInputs;
