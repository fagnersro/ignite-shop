import * as Dialog from '@radix-ui/react-dialog'
import CartButton from '../CartButton'
import { ClosedCart, ContainerCart, ContentDetailsCart, ContentProduct } from '@/styles/components/cart'
import { X } from '@phosphor-icons/react'

export default function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger style={{background: '#202024', border: 'none', borderRadius: '6px'}}>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <ContainerCart>
          <ClosedCart>
            <X />
          </ClosedCart>
          <h2>Sacola de compras</h2>

          <ContentProduct>
            <h1>My Products</h1>
          </ContentProduct>
          <ContentDetailsCart></ContentDetailsCart>

        </ContainerCart>
      </Dialog.Portal>
    </Dialog.Root>
  )
}