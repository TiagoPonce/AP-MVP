import Image from 'next/image'
import LogoAptd from 'public/logo-aptd.png'

export default function Login() {
    return (
        <div className="w-screen h-screen bg-slate-600 flex justify-center items-center">
            <div className="h-[424px] w-[680px] bg-white rounded-2xl flex  justify-center items-center">
                <div className= " flex flex-col items-center h-full justify-around">
                    <div className="logo">
                    <Image
                        src={LogoAptd}
                        alt="Picture of the author"
                        width={80}
                        
                    />
                    </div>
                    <div className="flex flex-col gap-6">
                        <input 
                        type="email"
                        placeholder="email"
                        className=' p-2 border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0'
                        />
                         <input 
                        type="password"
                        placeholder="password"
                        className='p-2 border-solid border-2 focus:outline-none border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0'
                        />
                    </div>
                    <div className="button">
                        <button
                        className='hover:bg-slate-500 w-48 h-10 text-lg bg-slate-600 rounded-lg font-bold text-white'
                        >Entrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}