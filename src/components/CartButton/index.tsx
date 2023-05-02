import { Handbag } from "@phosphor-icons/react";
import { ShopCartButton } from "./styles";
import { useCar } from "@/hook/useCar";

export default function CartButton({...rest}) {
  const { carProduct } = useCar()
  const totalQuantityProductCar = carProduct.length
  return (
    <>
      <ShopCartButton>
        <Handbag />
        <div>
          <span>{totalQuantityProductCar}</span>
        </div>
      </ShopCartButton> 
    </>
  )
}