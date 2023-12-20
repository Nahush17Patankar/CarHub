import './globals.css'
import { Navbar } from '@/components'
import { Footer } from '@/components'



export const metadata = {
  title: 'Big Boy Toys',
  description: 'Valhalla to discover best cars in world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <Navbar />

      {children}
      <Footer/>



      
        
        </body>
    </html>
  )
}
