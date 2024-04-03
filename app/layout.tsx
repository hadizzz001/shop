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
    <html className="no-js no-touch supports-no-cookies" lang="en"> 
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
  <meta content="Socialtap" name="keywords" property="" />
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
    content="/logo.png"
    name=""
    property="og:image"
  />
   
  <link
    href="/favicon"
    rel="apple-touch-icon"
    sizes="180x180"
  />
  <link
    href="/favicon"
    rel="icon"
    sizes="32x32"
    type="image/png"
  />
  <link
    href="/favicon"
    rel="icon"
    sizes="16x16"
    type="image/png"
  /> 
 
  <meta content="#ffffff" name="msapplication-TileColor" />
  <meta content="#ffffff" name="theme-color" />
  <link href="https://assets.bellroy.com" rel="preconnect" />
  <link href="https://bellroy.imgix.net" rel="preconnect" /> 
  

 





  <link
    href="css/webfonts-3e3c2400.css"
    rel="preload"
    as="style"
  />
  <link
    rel="stylesheet"
    href="css/webfonts-3e3c2400.css"
    media="print" 
  />
  <link
    rel="stylesheet"
    href="css/style-4109db2b.css"
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
