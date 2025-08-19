// app/layout.js
import './globals.css'   // 👈 make sure this line is there
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })


export const metadata = {
  title: 'Football Academy',
  description: 'Best football training academy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
