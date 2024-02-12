import Plus from "@/components/icons/Plus";
import Trash from "@/components/icons/Trash";
import EditableImage from "@/components/layout/editableImage";
import MenuItemPriceProps from "@/components/layout/menuItemPriceProps";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CurrencyInput from "react-currency-input-field"; // Importe o CurrencyInput

export default function MenuItemForm({ onSubmit, menuItem }) {
  const [image, setImage] = useState(menuItem?.image || "");
  const [name, setName] = useState(menuItem?.name || "");
  const [description, setDescription] = useState(menuItem?.description || "");
  const [basePrice, setBasePrice] = useState<number | string>(
    menuItem?.basePrice || ""
  );
  const [sizes, setSizes] = useState(menuItem?.sizes || []);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [extraIngredientPrices, setExtraIngredientPrices] = useState(
    menuItem?.extraIngredientPrices || []
  );

  useEffect(() => {
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => {
        setCategories(categories);
      });
    });
  }, []);

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!category) {
      toast.error("Por favor, selecione uma categoria.");
      return;
    }
    onSubmit(ev, {
      image,
      name,
      description,
      basePrice,
      sizes,
      extraIngredientPrices,
      category,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-3xl mx-auto">
      <div
        className="md:grid items-start gap-4"
        style={{ gridTemplateColumns: ".3fr .7fr" }}
      >
        <div className="mt-7">
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label>Nome do Item:</label>
          <input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <div className="flex gap-4">
          <label>Descrição</label>
          
          </div>
          <textarea
          className="w-full h-36 border border-slate-300 text-justify px-3 py-2"
            placeholder="Descrição"
            type="text"
            value={description}
            onChange={(ev) => {
              if (ev.target.value.length <= 200) {
                setDescription(ev.target.value);
              }
            }}
            onPaste={(ev) => {
              const pastedText = ev.clipboardData.getData('text');
              if ((description.length + pastedText.length) <= 200) {
                setDescription(description + pastedText);
              } else {
                // Se o texto colado exceder o limite de caracteres, você pode optar por ignorá-lo ou truncá-lo.
                // Aqui, vamos apenas truncá-lo para caber no limite.
                setDescription(description + pastedText.slice(0, 200 - description.length));
              }
              // Evita que o evento padrão de colagem seja executado
              ev.preventDefault();
            }}
            
          />
          <label htmlFor="" className="">Limite de 200 caracteres</label>
      

         
          <div className="flex gap-4 justify-center items-center mt-2">
            <label>Categoria:</label>
            <select
              className="bg-transparent border px-4  border-slate-300 h-10 text-center rounded-lg text-orange-800 "
              value={category}
              onChange={(ev) => setCategory(ev.target.value)}
              required
              style={{ backgroundColor: '#ff00', color: '' }} 
            >
              <option className="bg-transparent  " value="">
                Selecione uma categoria
              </option>
              {categories?.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
            <label>Preço:</label>
            <CurrencyInput
            className=" rounded-lg "
              placeholder="Preço"
              prefix="R$"
              decimalsLimit={2}
              value={basePrice}
              onValueChange={(value, name) => setBasePrice(value)}
            />
          </div>

          <MenuItemPriceProps
            name={"Leve Junto"}
            addLabel={"Adicionar ao Item!"}
            props={sizes}
            setProps={setSizes}
          />
          <MenuItemPriceProps
            name={"Ingredientes Extras"}
            addLabel={"Adicionar Ingredientes"}
            props={extraIngredientPrices}
            setProps={setExtraIngredientPrices}
          />
          <button className="" type="submit">Salvar</button>
        </div>
      </div>
    </form>
  );
}
