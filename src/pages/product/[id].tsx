import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()
  
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,98</span>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, quas! Dignissimos vitae, assumenda facilis tempora quibusdam esse ducimus et repudiandae ullam doloribus, dicta, nam odio quod. Rerum distinctio in facere.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}