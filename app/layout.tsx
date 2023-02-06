import Navigation from './components/Navigation/Navigation'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
