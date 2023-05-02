import { ReactNode, useState, createContext } from "react";

export interface DataProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
}

interface DataCarContextTypes {
  carProduct: DataProduct[]
  carTotal: number
  addProductToCar: (product: DataProduct) => void
  checkIfProductAlreadyInCart(product: string): boolean
  removeProductToCar: (productId: string) => void
}

interface DataCarContextProviderProps {
  children: ReactNode
}

export const DataCarContext = createContext({} as DataCarContextTypes)

export function DataCarContextProvider({ children }: DataCarContextProviderProps) {
  const [carProduct, setCarProduct] = useState<DataProduct[]>([])
  
  const carTotal = carProduct.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)

  function addProductToCar(product: DataProduct) {
    setCarProduct((state) => [...state, product])
  }

  function removeProductToCar(productId: string) {
    setCarProduct((state) => state.filter((product) => product.id !== productId))
  }

  function checkIfProductAlreadyInCart(productId: string){
    return carProduct.some((product) => product.id === productId);
  }

  return (
    <DataCarContext.Provider value={{ addProductToCar, removeProductToCar, checkIfProductAlreadyInCart, carProduct, carTotal }}>
      {children}
    </DataCarContext.Provider>
  )
}