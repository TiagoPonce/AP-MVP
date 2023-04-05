import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import AppContext from '@/context/AppContext';
import { useState, createContext } from 'react'
import '@/axios/global.js'




export default function App({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);
  const [renderPage, setRenderPage] = useState('')
  const [typeModal, setTypeModal] = useState('');


  const valuesContext = {
    showModal,
    setShowModal,
    renderPage,
    setRenderPage,
    typeModal,
    setTypeModal,
  }

  return (
    <AppContext.Provider value={valuesContext}>
      <SessionProvider session={ pageProps.session }>
        <Component {...pageProps} />
      </SessionProvider>
    </AppContext.Provider> 
  )
}
