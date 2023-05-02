import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths } from "next"
import { GetStaticProps } from "next"
import { DataProduct } from "@/context/DataCarContext"

import Image from "next/image"
import Stripe from "stripe"
import axios from "axios"
import { useState } from "react"
import Head from "next/head"
import { useCar } from "@/hook/useCar"

interface ProductProps {
  product: DataProduct
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setCreatingCheckoutSession] = useState(false)
  const { addProductToCar } = useCar()

  async function handleBuyProduct() {
    try {
      setCreatingCheckoutSession(true)
      const resposnse = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = resposnse.data
      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade(Datadog / Sentry)
      setCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: {id: 'prod_Nc2ARzLtbBJN10'} }
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount as number / 100),
        description: product.description,
        defaultPriceId: price.id,
        numberPrice: price.unit_amount / 100
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}