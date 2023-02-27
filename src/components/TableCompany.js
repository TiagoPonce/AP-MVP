import Image from "next/image"
import PlusSquare from 'public/plus-square.png'
import ExternalLink from 'public/external-link.png'
import AppContext from "../context/AppContext"
import { useContext, useEffect, useState } from "react"
import { useSession } from "next-auth/react";
import axiosInstance from "@/axios/instance";

export default function TableCompany() {
    const context = useContext(AppContext);
    const [companys, setCompanys] = useState({});
    const { data } = useSession();


    useEffect(() => {
        axiosInstance.get(`/companies/users/${data.user.id}`)
        .then((response) => setCompanys(response.data.data))
    }, [])

    console.log(companys)
    return (
        <div className="h-[400px] w-[1000px] bg-white rounded-lg m-10 flex flex-col gap-8 p-2">
            <div className="flex w-full items-center justify-between pl-10 pr-10 pb-2 border-b-black border-solid border-b-2">
                <p>Empresas</p>
                <button
                onClick={() => context.setShowModal(true)}
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
            <table className="table-auto mt-4 m-10">
                <thead className="border-b-2 border-black border-solid mb-4">
                    <tr>
                        <th>Empresa</th>
                        <th>Líderes</th>
                        <th>Funcionários</th>
                        <th>Período</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {companys.length > 0 ? 
                    
                    companys.map((company, index) => {
                    return (
                        <tr key={ index } className="h-14 hover:bg-[#C1D3ED]/30 cursor-pointer border-solid border-b border-[#9D9A9A]"
                        onClick={() => context.setRenderPage("testes")}
                        >
                            <td className="text-center">{company.name}</td>
                            <td className="text-center">{company.leaders.length}</td>
                            <td className="text-center">{company.employees.length}</td>
                            <td className="text-center">02-23 à 03-23</td>
                            <td className="text-center">Não iniciado</td>
                            <td>
                            <Image
                            src={ExternalLink}
                            alt="icon external link"
                            width={20}
                            className=''
                            />
                            </td>
                        </tr>
                        )
                        })
                    
                    : 
                    <></>
                    }
                </tbody>
            </table>
        </div>
    )
}