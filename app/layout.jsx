import Header from '@components/layouts/Header'
import '@styles/global.css'

export const metadata = {
  title: "Fullstack Next App",
  description: 'Fullstack app using NextJS'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout