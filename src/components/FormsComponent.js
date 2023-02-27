import { useState } from 'react';
import axiosInstance from '@/axios/instance';
import { useSession } from "next-auth/react";

export default function FormsComponent() {
    const { data } = useSession();
    const [formCompany, setFormCompany] = useState({userId: data.user.id, name: '', email: '', country: '', city: ''})


    const createCompany = async (data) => {
        axiosInstance.post('/create', data).then((response) => console.log(response))
    }

    const handleSubmit = async (data) => {
        try {
            await createCompany(data)
        } catch (error) {
        }   
    }

    return (
        <div className="forms w-full bg-white rounded-3xl">
            <form onSubmit={ e => {
                // e.preventDefault()
                handleSubmit(formCompany)
            }} className="h-full w-full border-2 bg-[#F8F7F7] p-2">
                <h1 className="text-slate-400 font-bold text-sm">Cadastrar empresa</h1>
                <div className="grid grid-cols-3 gap-4 p-4">
                    <div>
                        <input 
                        onChange={e => setFormCompany({...formCompany, name: e.target.value})}
                        type="text"
                        className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                        placeholder="Nome da empresa"
                        ></input>
                    </div>
                    <div>
                    <input 
                        type="text"
                        className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                        placeholder="email"
                        onChange={e => setFormCompany({...formCompany, email: e.target.value})}
                        ></input>
                    </div>
                </div>
                <h2 className="text-slate-400 font-bold text-sm">Endereço</h2>
                <div className="p-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <input 
                            type="text"
                            className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                            placeholder="cidade"
                            onChange={e => setFormCompany({...formCompany, city: e.target.value})}
                            ></input>
                        </div>
                        <div>
                            <input 
                            type="text"
                            className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                            placeholder="Estado"
                            onChange={e => setFormCompany({...formCompany, country: e.target.value})}
                            ></input>
                        </div>
                    </div>
                </div>
                <button
                type="submit"
                className='h-[60px] w-[200px] rounded-3xl bg-slate-900 text-white text-2xl '
                >Adcionar empresa
                </button>
             </form>
        </div>
    )
}