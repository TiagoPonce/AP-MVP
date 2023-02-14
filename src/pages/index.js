import { Inter } from '@next/font/google'
import Login from '@/components/loginComponent'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Login />
    </>
  )
}
