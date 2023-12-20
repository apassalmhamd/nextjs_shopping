import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'

const bodyFont = Montserrat({ 
  subsets: ['latin'],
  weight:['400','700', '900'],
 })

export const metadata = {
  title: 'Hexashop-Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
        <div className='container'>
          <Navbar/>
          {children}
          <Footer/>
       </div>
        </ThemeProvider>
    </body>
    </html>
  )
}
