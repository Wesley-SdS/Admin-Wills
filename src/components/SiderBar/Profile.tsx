import { LogOut } from "lucide-react";

export function Profile (){
    return( <div className="flex items-center gap-3" >
        <img src="https://github.com//Wesley-SdS.png" alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col truncate">
            <span className="text-sm font-semibold text-zinc-700">Wesley Santos</span>
            <span className=" truncate text-sm text-zinc-500" >Analista Sênior</span>
        </div>
        <button type="button" className="ml-auto p-2 rounded-md hover:bg-violet-100 w-14">
            <LogOut className="h-5 w-5 text-zinc-500" />
        </button>
    </div>

    )
}