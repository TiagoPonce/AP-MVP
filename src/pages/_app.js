import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import AppContext from '@/context/AppContext';
import { useState, createContext } from 'react'
import '@/axios/global.js'




export default function App({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);
  const [renderPage, setRenderPage] = useState('empresas')
  return (
    <AppContext.Provider value={{showModal, setShowModal, renderPage, setRenderPage}}>
      <SessionProvider session={ pageProps.session }>
        <Component {...pageProps} />
      </SessionProvider>
    </AppContext.Provider> 
  )
}
