import { Button } from "@/components/ui/button";

export default function PedidoItem() {
  return (
    <div className="bg-white rounded-lg p-3 m-5">
    <div className="flex flex-col">
      <div className="flex justify-between items-center pb-2">
        <label htmlFor="" className="font-semibold">
          Pedido #74514
        </label>
        <label htmlFor="" className="bg-orange-200 p-1 rounded-lg">
          18:25
        </label>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-full mt-2 gap-2">
          <label htmlFor="">Wesley Santos</label>
          <label htmlFor="">(11)96092-4734</label>
        </div>
        <div className="flex flex-col  mt-2 gap-2">
          <label htmlFor="" className=" ">
            Total: <span className="">R$ 90,90</span>
          </label>
          <label htmlFor="">Pagamento: Cartão</label>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-5 bg-gray-200 rounded-lg p-3 w-full">
        <label htmlFor="">
          Rua augusto Farina 954 Butantã CEP: 09682-100
        </label>
      </div>
      <Button className="border border-orange-600 mt-4 hover:bg-orange-300">
        Avançar Pedido
      </Button>
    </div>
  </div>
  );
}