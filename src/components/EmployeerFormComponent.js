import { useContext } from "react";
import AppContext from "../context/AppContext"
import { useForm } from 'react-hook-form'


export default function EmployeerForm() {
    const context = useContext(AppContext);
    const { register, handleSubmit } = useForm();


    return (

        <div className="w-[1000px] h-[500px] bg-white">
            <h1>Cadastrar Funcionário</h1>
            <div className="form-employee">
                <form 
                    onSubmit={handleSubmit((data) => console.log(data))}
                >
                    <input {...register("firstName", { required: true } )} placeholder="Nome" 
                    className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                    />
                    <input {...register("lastName", { required: true })} placeholder="Sobrenome"
                    className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                    />
                    <input type="submit" />
                </form>
            </div>
        </div>

    )
}