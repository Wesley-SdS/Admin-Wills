import RootLayout from "@/components/Layout";
import { SettingTabs } from "@/components/SettingsTabs";
import { SiderBar } from "@/components/SiderBar";
import PedidoItem from "@/components/pedidoItem";
import { Button } from "@/components/ui/button";

export default function PDV() {
  return (
    <RootLayout>
<section className="flex">
      <div className="flex flex-col w-full">
        {/* SettingTabs no topo */}
        <div>
          <h1 className="mt-24 text-3xl font-medium text-zinc-900">
            Operacional
          </h1>
          <SettingTabs />
        </div>

      
        
      </div>
    </section>
    </RootLayout>
    
  );
}
