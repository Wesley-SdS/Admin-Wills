"use client";
import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";
import { useState } from "react";
import { Input } from "../ui/input";
import Caixa from "../tabItens/caixa";
import Categories from "../tabItens/categories";
import Cardapio from "@/components/tabItens/cardapio";

export function SettingTabs() {
  const [currentTab, setCurrentTab] = useState("tab1");
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center border-b border-zinc-200">
        <TabItem
          value="tab1"
          title="Caixa"
          isSelected={currentTab === "tab1"}
        ></TabItem>

        <TabItem
          value="tab2"
          title="Categorias"
          isSelected={currentTab === "tab2"}
        ></TabItem>
        <TabItem
          value="tab3"
          title="Cardápio"
          isSelected={currentTab === "tab3"}
        />

        <TabItem
          value="tab4"
          title="Pedidos"
          isSelected={currentTab === "tab4"}
        />

        <TabItem
          value="tab5"
          title="Dashboard"
          isSelected={currentTab === "tab5"}
        />
        <TabItem
          value="tab6"
          title="Financeiro"
          isSelected={currentTab === "tab6"}
        />

        <TabItem
          value="tab7"
          title="Integração"
          isSelected={currentTab === "tab7"}
        />
        <TabItem value="tab8" title="API" isSelected={currentTab === "tab8"} />
      </Tabs.List>
      <Tabs.Content className="TabsContent" value="tab1">

    <Caixa />

      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab2">

<Categories />

  </Tabs.Content>
  <Tabs.Content className="TabsContent" value="tab3">

<Cardapio />

  </Tabs.Content>
    </Tabs.Root>
  );
}
