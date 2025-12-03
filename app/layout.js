import { Montserrat } from 'next/font/google'
import './globals.css'
import PageTransition from './components/PageTransition'
import Footer from './components/Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '900'],
  display: 'swap',
})

export const metadata = {
  title: 'My Portfolio',
  description: 'A Next.js portfolio website showcasing my projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        
        
        <main className="flex-grow">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
