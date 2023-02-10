import Image from "next/image"
import PlusSquare from 'public/plus-square.png'

export default function TableCompany() {
    return (
        <div className="h-[222px] bg-white rounded-lg m-10 flex p-2">
            <div className="flex w-full h-20 items-center justify-between pl-10 pr-10 border-b-black border-solid border-b-2">
                <p>Empresas</p>
                <button
                className="w-[214px] h-[44px] border-solid border-2 hover:bg-slate-100 border-slate-600 rounded-full flex items-center justify-center"
                >
                     <Image
                        src={PlusSquare}
                        alt="Picture of the author"
                        width={25}
                        className='mr-4'
                    />
                    Adcionar Empresa
                </button>
            </div>
        </div>
    )
}