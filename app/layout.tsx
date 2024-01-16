"use client"
import {  Footer,Navbar2 } from '@/components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css'
import { useSearchParams } from 'next/navigation'
import { CartProvider } from './context/CartContext';
import { BooleanProvider } from './context/CartBoolContext';
import { PDFProvider } from './context/PDFContext';
import GifLoader from '../components/GifLoader'


 

 

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

 

  return (
    <html lang='en'> 
    <>
  <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
  <meta content="en" httpEquiv="Content-Language" />
  <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
  <meta
    content="width=device-width, initial-scale=1, maximum-scale=1"
    name="viewport"
  />
  <meta content="max-image-preview:large" name="robots" />
  <title>
    Social Tap
  </title>
  <meta
    content="Bellroy aims to slim your wallet with designs that balance storage and access. Move the slider to see how much you could slim your wallet – and pocket."
    name="description"
    property=""
  />
  <meta content="Bellroy" name="keywords" property="" />
  <meta
    content="Social Tap"
    name=""
    property="og:title"
  />
  <meta
    content="https://bellroy.com/collection/slim-your-wallet"
    name=""
    property="og:url"
  />
  <meta content="website" name="" property="og:type" />
  <meta
    content="Bellroy aims to slim your wallet with designs that balance storage and access. Move the slider to see how much you could slim your wallet – and pocket."
    name=""
    property="og:description"
  />
  <meta
    content="https://bellroy-cms-images.imgix.net/686/bellroy-brand-homepage-2.jpg"
    name=""
    property="og:image"
  />
  <meta
    content="d_hTwlGjrkXyIa7Rxp5Cq9mYU-c_LfefY9PqUPFeK50"
    name="google-site-verification"
    property=""
  />
  <meta
    content="KjwMdcUc1yMKbVR6ZgGLhtpXUu6I9U86jnhyueYnMKU"
    name="google-site-verification"
    property=""
  />
  <meta
    content="ewuddVwTh3Lhq9G7vdmttYTXJYms8JiKS62SKyBE4Tw"
    name="google-site-verification"
    property=""
  />
  <link
    href="/apple-touch-icon.png?v=YAmYvvKg0r"
    rel="apple-touch-icon"
    sizes="180x180"
  />
  <link
    href="/favicon-32x32.png?v=YAmYvvKg0r"
    rel="icon"
    sizes="32x32"
    type="image/png"
  />
  <link
    href="/favicon-16x16.png?v=YAmYvvKg0r"
    rel="icon"
    sizes="16x16"
    type="image/png"
  /> 
  <link
    color="#ea6a2b"
    href="/safari-pinned-tab.svg?v=YAmYvvKg0r"
    rel="mask-icon"
  />
  <meta content="#ffffff" name="msapplication-TileColor" />
  <meta content="#ffffff" name="theme-color" />
  <link href="https://assets.bellroy.com" rel="preconnect" />
  <link href="https://bellroy.imgix.net" rel="preconnect" /> 
  <meta
    name="csrf-token"
    content="eliUSL0E0pLUmcPEuJfQMf-26CDKfNynOZOMa8R0PrTHFeGYaSnCEIWj0IBPcMW3UVDbuzj9fGdfZKeAYck7UA"
  />
  <link
    href="https://bellroy.com/collection/slim-your-wallet"
    rel="canonical"
  />
  <link
    href="https://assets.bellroy.com/client/webfonts-3e3c2400.css"
    rel="preload"
    as="style"
  />
  <link
    rel="stylesheet"
    href="https://assets.bellroy.com/client/webfonts-3e3c2400.css"
    media="print" 
  />
  <link
    rel="stylesheet"
    href="https://assets.bellroy.com/client/style-4109db2b.css"
  />

<link href="https://fonts.cdnfonts.com/css/lato" rel="stylesheet"/>
 
       
  
</>

      <body>

 
      <GifLoader />

        <PDFProvider>
        <BooleanProvider>
        <CartProvider>
          <Navbar2 />
          {children}
          <Footer />
        </CartProvider>
        </BooleanProvider>
        </PDFProvider>

      </body>
    </html>
  )
}
