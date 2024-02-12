import PedidoItem from "../pedidoItem";

export default function Caixa(){
    return(
        <div className="mt-6 flex flex-col  ">
          <div className="flex flex-row justify-between  min-h-screen  ">
            <div className="w-1/3 bg-orange-600">
              <h2 className="text-white text-xl font-bold p-4 relative ">
                Em Análise
                <span className="absolute inset-0 bg-black opacity-20"></span>
              </h2>

             <PedidoItem  />
            </div>
            <div className="w-1/3 bg-orange-500">
              <h2 className="text-white text-xl font-bold p-4 relative">
                Em Produção
                <span className="absolute inset-0 bg-black opacity-20"></span>
              </h2>

              <PedidoItem  />
              <PedidoItem  />
              <PedidoItem  />
            </div>
            <div className="w-1/3 bg-secondary">
              <h2 className="text-white text-xl font-bold p-4 relative">
                Pronto para o Envio
                <span className="absolute inset-0 bg-black opacity-20"></span>
              </h2>
              <PedidoItem  />
            </div>
          </div>
        </div>
    )
}