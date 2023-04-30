import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhull <strong>Fagner Henrique</strong>, sua <strong>Camiseta Beyound the Limits</strong> já está a caminho de sua casa.
      </p>

      <Link href="/" >
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}