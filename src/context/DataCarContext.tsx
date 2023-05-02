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
  addProductToCar: (product: DataProduct) => void
}

interface DataCarContextProviderProps {
  children: ReactNode
}

export const DataCarContext = createContext({} as DataCarContextTypes)

export function DataCarContextProvider({ children }: DataCarContextProviderProps) {
  const [carProduct, setCarProduct] = useState<DataProduct[]>([])
  console.log(carProduct)

  function addProductToCar(product: DataProduct) {
    setCarProduct((state) => [...state, product])
  }

  return (
    <DataCarContext.Provider value={{ addProductToCar }}>
      {children}
    </DataCarContext.Provider>
  )
}