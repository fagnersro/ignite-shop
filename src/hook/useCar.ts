import { useContext } from 'react'
import { DataCarContext } from '../context/DataCarContext'

export function useCar() {
  return useContext(DataCarContext)
}