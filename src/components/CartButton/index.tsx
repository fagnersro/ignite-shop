import { Handbag } from "@phosphor-icons/react";
import { ShopCartButton } from "./styles";

export default function CartButton() {
  return (
    <>
      <ShopCartButton>
        <Handbag />

        <div>
          <span>1</span>
        </div>
      </ShopCartButton>
    </>
  )
}