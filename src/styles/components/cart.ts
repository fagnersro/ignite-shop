import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog'

export const ContainerCart = styled(Dialog.Content, {
  // border: '1px solid red',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '35%',
  backgroundColor: '$gray800',
  padding: '3rem',
  // paddingTop: '4.5rem',
  boxShadow: '-4px 8px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    color: '$gray100',

    // marginBottom: '2rem',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '160%',
  },

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

export const WrapperContainerCart = styled('div', {
  // border: '1px solid pink',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '100%',
  width: '100%',
})

export const ContentProduct = styled('section', {
  border: '1px solid red',
 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '15.625rem',
  width: '100%',
})

export const ContentDetailsCart = styled('div', {
  // border: '1px solid red',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  // marginTop: '1.575rem',
  height: '4.875rem',
  width: '100%',

  div: {
    // border: '1px solid red',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    height: '2.625rem',

    span: {
      color: '$gray100',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
    },

    'span:nth-child(2)': {
      color: '$gray300',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '18px',
    }
  }
})

export const ButtonFinalizar = styled('button', {
    all: 'unset',
    backgroundColor: '$green500',
    borderRadius: '6px',
    cursor: 'pointer',

    textAlign: 'center',
    fontWeight: 'bold',

    // marginTop: '5rem',
    height: '4.313rem',
    width: '100%',

    transition: 'all 0.2s',

    '&:hover': {
      backgroundColor: '$green300',
    }
})