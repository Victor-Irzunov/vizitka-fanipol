
import Header from '@/components/header/Header'
import './globals.css'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Аренда фронтального погрузчика в Держинском районе',
  description: 'Услуги погрузчика грузоподъемностью 5000 кг. г.Фаниполь. Работаем по Держинскому району. Аренда погрузчика по доступной цене.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
       <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="android-chrome-192x192" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="android-chrome-512x512" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
         {/* <link rel="canonical" href="https://" /> */}
      </head>
      <body>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
