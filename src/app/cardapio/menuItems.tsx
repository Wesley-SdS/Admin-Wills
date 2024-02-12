import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

const menuItems = () => {
  return (
    <div className=" p-3 rounded-lg text-center border border-gray-600 group hover:bg-slate-200 hover:shadow-md hover:shadow-black/75 transition-all cursor cursor-pointer">
    <img src="/images/1.png" alt="pizza" className=" rounded-lg" />
    <h4 className="font-semibold text-xl my-2">Tomate Seco</h4>
    <p className="text-gray-500 text-sm pb-4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
      provident officia totam ex eos nihil alias.
    </p>
    <span className="text-orange-600 ">R$ 47,90</span>
    <Dialog>
<DialogTrigger className="bg-secundary text-white rounded-lg m-2 px-6 py-2">Adicionar</DialogTrigger>
<DialogContent>
<DialogHeader>
<DialogTitle className="my-5 text-secundary">Como será a sua pizza?</DialogTitle>
<DialogDescription>
<div className="grid grid-cols-2 gap-4">
  {/* Tamanho */}
  <div>
    <div className="flex flex-col gap-2 items-center ">
      <Label className="cursor-pointer text-orange-600">Tamanho</Label>
      <RadioGroup defaultValue="option-one" className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-one"
            id="option-one"
            className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:bg-orange-600"
          />
          <Label htmlFor="Grande" className="cursor-pointer">Grande</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:bg-orange-600"
          />
          <Label htmlFor="Broto" className="cursor-pointer">Broto</Label>
        </div>
      </RadioGroup>
    </div>
  </div>
  
  {/* Borda */}
  <div>
    <div className="flex flex-col gap-2 items-center">
      <Label className="cursor-pointer  text-orange-600">Borda</Label>
      <RadioGroup defaultValue="option-one" className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-one"
            id="option-one-borda"
            className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:bg-orange-600"
          />
          <Label htmlFor="Grande" className="cursor-pointer">Tradicional</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-two"
            id="option-two-borda"
            className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:bg-orange-600"
          />
          <Label htmlFor="Broto" className="cursor-pointer">Recheada</Label>
        </div>
      </RadioGroup>
    </div>
  </div>
</div>

{/* Complementos */}
<div className="mt-5">
<Label className="flex justify-center my-10 text-orange-600">Complementos Adicionais</Label>
<div className="grid grid-cols-3 gap-4">
{/* Coluna 1 */}
<div>
<div className="flex items-center space-x-2">
<Checkbox id="milho" />
<label htmlFor="milho" className="cursor-pointer">Milho <span>R$2,00</span></label>
</div>
<div className="flex items-center space-x-2">
<Checkbox id="ervilha" />
<label htmlFor="ervilha" className="cursor-pointer">Ervilha <span>R$2,00</span></label>
</div>
<div className="flex items-center space-x-2">
<Checkbox id="ervilha" />
<label htmlFor="ervilha" className="cursor-pointer">Frango <span>R$5,00</span></label>
</div>
</div>

{/* Coluna 2 */}
<div>
<div className="flex items-center space-x-2">
<Checkbox id="tomate" />
<label htmlFor="tomate" className="cursor-pointer">Tomate</label>
</div>
<div className="flex items-center space-x-2">
<Checkbox id="bacon" />
<label htmlFor="bacon" className="cursor-pointer">Bacon</label>
</div>
<div className="flex items-center space-x-2">
<Checkbox id="ervilha" />
<label htmlFor="ervilha" className="cursor-pointer">Calabresa <span>R$5,00</span></label>
</div>
</div>

{/* Coluna 3 */}
<div>
<div className="flex items-center space-x-2">
<Checkbox id="complemento3-1" />
<label htmlFor="complemento3-1" className="cursor-pointer">Requeijão <span>R$5,00</span></label>
</div>
<div className="flex items-center space-x-2">
<Checkbox id="complemento3-2" />
<label htmlFor="complemento3-2" className="cursor-pointer">Cebola <span>R$5,00</span></label>
</div>
<div className="flex items-center space-x-2">
<Checkbox id="complemento3-2" />
<label htmlFor="complemento3-2" className="cursor-pointer">Cheddar <span>R$5,00</span></label>
</div>
</div>
</div>
</div>




</DialogDescription>
</DialogHeader>
</DialogContent>
</Dialog>



   
   
  </div>
  )
}

export default menuItems
