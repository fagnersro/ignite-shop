import * as Dialog from '@radix-ui/react-dialog'
import CartButton from '../CartButton'
import { X } from '@phosphor-icons/react'
import { useCar } from '@/hook/useCar'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

import { 
  ButtonFinalizar, 
  CardProduct, 
  CardProductContainerImage, 
  CardProductContentData, 
  ClosedCart, 
  ContainerCart, 
  ContentDetailsCart, 
  ContentProduct, 
  WrapperContainerCart 
} from '@/styles/components/cart'


export default function Cart() {
  const [creatingCheckoutSession, setCreatingCheckoutSession] = useState(false)
  
  const { carProduct, removeProductToCar, carTotal } = useCar()
  const carQantityProducts = carProduct.length
  const formattedCarTotal = Intl.NumberFormat('pet-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(carTotal)


  async function handleBuyProduct() {
    try {
      setCreatingCheckoutSession(true)
      const resposnse = await axios.post('/api/checkout', {
        products: carProduct
      })

      const { checkoutUrl } = resposnse.data
      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade(Datadog / Sentry)
      setCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
      console.log(err)
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger   style={{background: '#202024', border: 'none', borderRadius: '6px'}}>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <ContainerCart>
          <ClosedCart>
            <X />
          </ClosedCart>

          <WrapperContainerCart>
            <h2>Sacola de compras</h2>

            <ContentProduct>
              {carQantityProducts <= 0 && <span>Você não selecionou nenhum produto</span>}
              {carProduct.map((product) => {
                return (
                <CardProduct key={product.id}>
                  <CardProductContainerImage>
                    <Image src={product.imageUrl} width={94} height={94} alt='' />
                  </CardProductContainerImage>
                  <CardProductContentData>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                    <button onClick={() => {removeProductToCar(product.id)}}>Remover</button>
                  </CardProductContentData>
                </CardProduct>
                )
              })}

            </ContentProduct>
            <ContentDetailsCart>  
              <div>
                <span>Quantidade</span>
                <span>{carQantityProducts} itens</span>
              </div>
              <div>
                <span>Valor total</span>
                <span>{formattedCarTotal}</span>
              </div>
            </ContentDetailsCart>
            <ButtonFinalizar onClick={handleBuyProduct} disabled={creatingCheckoutSession || carQantityProducts <= 0}>Finalizar Compra</ButtonFinalizar>
          </WrapperContainerCart>

        </ContainerCart>
      </Dialog.Portal>
    </Dialog.Root>
  )
}