import Image from "next/image";
import React from "react";
import Right from "../icons/right";

const index = () => {
  return (
    <section className="hero mt-4
    ">
      <div className="py-16">
        <h1 className="text-4xl font-semibold ">
          Tudo fica melhor com uma&nbsp;<span className="text-orange-600">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza é a peça que falta para completar cada dia, uma alegria de vida
          simples mas deliciosa.
        </p>
        <div className="flex gap-4 text-sm">
          <button className=" flex justify-center items-center
           gap-2 bg-primary uppercase text-white px-2  rounded-lg hover:bg-secondary ">
            Conheça
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold hover:text-secondary">
            Saiba Mais
            <Right  />
          </button>
        </div>
      </div>

      <div className="relative ">
        <Image className="rounded-3xl pt-4"
          src={"/images/wills.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
};

export default index;
