import './globals.css'
import Navbar from '../Navbar/index'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
