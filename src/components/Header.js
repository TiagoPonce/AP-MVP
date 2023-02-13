import LogoAptd from 'public/logo-aptd.png'
import Image from 'next/image'
import logOut from 'public/log-out.png'
import { signOut } from 'next-auth/react'

export default function Header() {

    return (
        <header className="w-screen fixed border-2 z-20 border-b-slate-600 h-20 bg-white flex justify-between items-center p-4">
            <div className="ml-14">
            <Image
                src={LogoAptd}
                alt="Picture of the author"
                width={50}    
                  
            />
            </div>
            <div className="flex">
                <p className="text-slate-600 text-bold mr-5">Bem-vindo,user!</p>
                <button
                    onClick={ () => signOut({ redirect: false })}
                    className='w-24 h-7 border-2 border-solid border-slate-600 rounded-lg flex justify-center items-center p-2'
                >
                    <Image
                        src={logOut}
                        alt="Picture of the author"
                        width={15}
                        className='mr-4'      
                />
                    SAIR
                </button>
            </div>
        </header>
    )
}