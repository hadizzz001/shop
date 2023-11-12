
import { Navbar2, Footer } from '@/components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css'
import { useSearchParams } from 'next/navigation'
import ContextWrapper from './context/store';
import {Rubik} from 'next/font/google'

const rubik = Rubik({subsets:['latin']})

export const metadata = {
  title: 'Triple Win Solutions',
  description: 'Discover the best insurance in the world',
  icons: {
    icon: 'favicon.ico',
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {


  return (
    <html lang='en'>  
      <body className={rubik.className}>

        <ContextWrapper>
          <Navbar2 />
          {children}
          <Footer />
        </ContextWrapper>

      </body>
    </html>
  )
}
