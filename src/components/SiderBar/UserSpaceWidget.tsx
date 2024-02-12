export function UsedSpaceWidget(){
    return(
        <div className='flex flex-col gap-4 rounded-lg bg-violet-50 px-5 py-5'>
            <div className='space-y-1'>
                <span className='text-sm/5 font-medium text-violet-700 '>Espaço utilizado</span>
                <p className='text-sm/5 text-violet-700 '>
                Sua equipe usou 80% do seu espaço disponível. Preciso de mais?
                </p>
            </div>
            <div className='h-2 rounded-full bg-violet-300'>
                <div className='h-2 w-4/5 rounded-full bg-violet-600'/>
            </div>
            <div className='flex-col space-y-2'>
                <button type='button' className='text-sm font-medium text-violet-500' >Liberar</button>
                <button type='button' className='text-sm font-medium text-violet-700'>Upgrade de Plano</button>
            </div>
        </div>
    )
}