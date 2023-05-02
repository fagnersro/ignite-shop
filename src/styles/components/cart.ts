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

  boxShadow: '-4px 8px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',

  h2: {
    color: '$gray100',

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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '100%',
  width: '100%',
})

export const ContentProduct = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',


  // alignItems: 'center',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    backgroundColor: '$gray900',
    borderRadius: '8px',
    width: '10px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray800',
    border: '2px solid $gray900',
   
    borderRadius: '8px',
  },

  span: {
    color: '$gray100',
    fontSize: '21px',
    fontWeight: 'bold'
  },

  height: '20.625rem',
  width: '100%',
})

export const CardProduct = styled('div', {


  display: 'flex',
  justifyContent: 'space-between',

  height: '5.875rem',
  width: '100%',
})

export const CardProductContainerImage = styled('div', {

  borderRadius: '8px',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',
  width: '6.375rem',
})

export const CardProductContentData = styled('div', {
  // border: '1px solid gold',

  display: 'flex',
  flexDirection: 'column',

  height: '100%',
  width: '16.375rem',

  span: {

    color: '$gray300',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    height: '1.625rem',
    marginBottom: '0.125rem',
  },

  'span:nth-child(2)': {
    color: '$gray100',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',

    marginBottom: '1.2rem',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
    color: '$green300',

    fontWeight: 'bold',
    lineHeight: 0,

    height: '1.625rem',
    width: '4.063rem',
  }
})

export const ContentDetailsCart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '4.875rem',
  width: '100%',

  div: {

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


    height: '3.313rem',
    width: '100%',

    transition: 'all 0.2s',


    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  
    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
})