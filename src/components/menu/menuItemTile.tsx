import AddToCartButton from "@/components/menu/AddToCartButton";
import Image from "next/image";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;
  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="text-center border border-gray-600 group hover:bg-orange-200 hover:shadow-md hover:shadow-black/75 transition-all cursor cursor-pointer rounded-lg p-2">
      <div className="flex justify-center pt-22">
        <Image
          src={image}
          className="border border-slate-800 rounded-md"
          alt="pizza"
          width={250}
          height={200}
        />
      </div>
      <div className="font-semibold text-lg pt-3">{item.name}</div>
      <div className="italic text-balance line-clamp-6">Descrição: {item.description}</div>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}
