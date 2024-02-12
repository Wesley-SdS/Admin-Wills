import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from "lucide-react";
import { Logo } from "./Logo";

import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UserSpaceWidget";
import { Profile } from "./Profile";
import { InputControl, InputPrefix, InputRoot } from "../Input";

export function SiderBar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200  px-5  w-80" >
      <Logo />
      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500"  />
        </InputPrefix>
        <InputControl className="focus:outline-none" placeholder="Posso Ajudar?" />
      </InputRoot>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="DashBoard" icon={BarChart} />
        <NavItem title="Meus Pedidos" icon={SquareStack} />
        <NavItem title="Pedido Balção PDV" icon={CheckSquare} />
        <NavItem title="Gestor de Cardápio" icon={Flag} />
        <NavItem title="Cozinha" icon={Users} />
        <NavItem title="Robô" icon={Users} />
        <NavItem title="Fidelidade" icon={Users} />
        <NavItem title="Cupom" icon={Users} />
      </nav>
      <div className="flex flex-col gap-6 mt-auto">
        <nav className="space-y-0.5 font-semibold">
          <NavItem  title="Suporte" icon={LifeBuoy} />
          <NavItem title="Configurações" icon={Cog} />
        </nav>
        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  );
}
