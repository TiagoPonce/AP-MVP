import setaRight from 'public/seta-right.png'
import Image from 'next/image'
import { useContext } from 'react'
import AppContext from '@/context/AppContext';

export default function SideBar() {

    const context = useContext(AppContext);


    return (
        <aside className="h-screen w-72 bg-slate-600 flex flex-col items-center z-10">
            <h2 className="text-white text-lg pt-32">MENU</h2>
            <div className="button_group flex flex-col gap-6 mt-8 w-full">
                <button className="h-11 bg-slate-400 hover:bg-slate-500 text-white text-lg flex justify-between items-center p-6"
                onClick={() => context.setRenderPage('testes')}
                >
                    Testes
                    <Image
                        src={setaRight}
                        alt="Picture of the author"
                        width={25}
                        className='mr-10'
                    />
                </button>
                <button className="h-11 bg-slate-400 hover:bg-slate-500 text-white text-lg flex justify-between items-center p-6"
                onClick={() => context.setRenderPage('empresas')}
                >
                    Empresas
                    <Image
                        src={setaRight}
                        alt="Picture of the author"
                        width={25}
                        className='mr-10'
                    />
                </button>
            </div>
        </aside>
    )
}