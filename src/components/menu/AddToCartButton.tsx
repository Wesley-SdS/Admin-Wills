import FlyingButton from 'react-flying-item'

export default function AddToCartButton({
  hasSizesOrExtras, onClick, basePrice, image
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className=" flex items-center justify-center gap-4 flying-button-parent mt-4 hover:text-orange-600 border-b-2 border-secondary  ">
        <FlyingButton
         className='' 
          targetTop={'5%'}
          targetLeft={'95%'}
          src={image}>
          <div className=' rounded-lg' onClick={onClick}>
           Compre Agora  R${basePrice}
          </div>
        </FlyingButton>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className=" mt-4  rounded-lg px-8 py-2 hover:text-orange-600 border-b-2 border-secondary"
    >
     Compre Agora  R$ {basePrice}
    </button>
  );
}