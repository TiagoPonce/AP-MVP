import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import AppContext from '@/components/AppContext';
import { useState, createContext } from 'react'




export default function App({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <AppContext.Provider value={{showModal, setShowModal}}>
      <SessionProvider session={ pageProps.session }>
        <Component {...pageProps} />
      </SessionProvider>
    </AppContext.Provider> 
  )
}
