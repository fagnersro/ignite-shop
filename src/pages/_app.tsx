import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { globalStyles } from '@/styles/global'
import logoImg from '../assets/Logo.svg'
import { Container, Header } from '@/styles/pages/app'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin']
})

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <style jsx global>{`html { font-family: ${roboto.style.fontFamily} }`}</style>
      <Header>
        <img src={logoImg.src} alt />
      </Header>
      <Component {...pageProps} />
    </Container>
  ) 
}
