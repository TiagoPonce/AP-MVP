import Image from "next/image"
import Check from 'public/check-circle.png'
import ExternalLink from 'public/external-link -white.png'

const Successfully = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image src={Check} alt='icon check' />
            <h1 className="text-center text-2xl mt-10 mb-10 font-light text-[#475569]">Teste criado com sucesso! <br/>
            Os formulários foram enviados para todos funcionários<br/> selecionados! </h1>
            <button 
            className="bg-[#475569] flex text-white text-sm leading-5 font-normal tracking-widest pt-2 pb-2 pr-10 pl-10 rounded-2xl hover:bg-[#364458]"
            >
                ACOMPANHAR STATUS DO TESTE
                <Image src={ExternalLink} alt="icon link externo" className="ml-2" />    
            </button>
        </div>
    )
}

export default Successfully
