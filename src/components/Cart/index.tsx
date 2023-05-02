import * as Dialog from '@radix-ui/react-dialog'
import CartButton from '../CartButton'
import { ButtonFinalizar, CardProduct, CardProductContainerImage, CardProductContentData, ClosedCart, ContainerCart, ContentDetailsCart, ContentProduct, WrapperContainerCart } from '@/styles/components/cart'
import { X } from '@phosphor-icons/react'

export default function Cart() {
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
              <CardProduct>
                <CardProductContainerImage>

                </CardProductContainerImage>
                <CardProductContentData>
                  <span>Camiseta Beyound the Limits</span>
                  <span>R$ 79,90</span>
                  <button>Remover</button>
                </CardProductContentData>
              </CardProduct>
            </ContentProduct>
            <ContentDetailsCart>  
              <div>
                <span>Quantidade</span>
                <span>3 itens</span>
              </div>
              <div>
                <span>Valor total</span>
                <span>R$ 270,00</span>
              </div>
            </ContentDetailsCart>
            <ButtonFinalizar>Finalizar Compra</ButtonFinalizar>
          </WrapperContainerCart>

        </ContainerCart>
      </Dialog.Portal>
    </Dialog.Root>
  )
}