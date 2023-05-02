import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

export const ContainerCart = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '35%',
  backgroundColor: '$gray800',
  padding: '3rem',
  paddingTop: '4.5rem',
  boxShadow: '-4px 8px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    color: '$gray100',

    marginBottom: '2rem',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '160%',
  }
}) 

export const ClosedCart = styled(Dialog.Close, {
  all: 'unset',


  svg: {
    color: '$gray3Icon',
    fontWeight: 'bold',
    height: '1.5rem',
    width: '1.5rem',
  },

  lineHeight: 0,
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
  cursor: 'pointer',
})

export const ContentProduct = styled('section', {
  border: '1px solid red',
 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '20.625rem',
  width: '24rem',
})

export const ContentDetailsCart = styled('div', {
  border: '1px solid red',

  marginTop: '12.375rem',
  height: '3.875rem',
  width: '24rem',
})