import { useCar } from "@/hook/useCar";
import { styled } from "@/styles";


export const ShopCartButton = styled('div', {
  all: 'unset',
  cursor: 'pointer',

  backgroundColor: '$gray800',
  borderRadius: '6px',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '3rem',
  width: '3rem',

  div: {
    backgroundColor: '$green500',
    border: '3px solid $gray900',
    borderRadius: '1000px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    width: '1.7rem',
    height: '1.7rem',
    right: '85px',
    top: '24px',

    span: {
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '14px',
    }  
  },

  svg: {
    color: '$white',
    height: '1.5rem',
    width: '1.5rem',
  }
})