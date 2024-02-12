import Header from "@/components/header";
import Hero from "@/components/hero";
import HomeMenu from "@/components/homeMenu/index";
import SectionHeaders from "@/components/layout/SelectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Conheça mais"} mainHeader={"Sobre nós "} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Bem-vindo à Wills Pizzas, onde cada fatia conta uma história de
            sabor e tradição. Venha desfrutar de nossas deliciosas pizzas,
            preparadas com ingredientes frescos e amor. Experimente o melhor da
            culinária italiana em cada mordida.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Não hesite em nos chamar!"}
          mainHeader={"Contato"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="11978269034">
            (11) 9 7826-9034
          </a>
        </div>
      </section>
    </>
  );
}
