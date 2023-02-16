export default function FormsComponent() {
    return (
        <div className="forms w-full bg-white rounded-3xl">
            <form className="h-full w-full border-2 bg-[#F8F7F7] p-2">
                <h1 className="text-slate-400 font-bold text-sm">Cadastrar empresa</h1>
                <div className="grid grid-cols-3 gap-4 p-4">
                    <div>
                        <input 
                        type="text"
                        className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                        placeholder="Nome da empresa"
                        ></input>
                    </div>
                    <div>
                    <input 
                        type="text"
                        className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                        placeholder="Nome fantasia"
                        ></input>
                    </div>
                    <div>
                    <input 
                        type="text"
                        className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                        placeholder="cnpj"
                        ></input>
                    </div>
                    <div>
                    <input 
                        type="text"
                        className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                        placeholder="telefone"
                        ></input>
                    </div>
                    <div>
                    <input 
                        type="text"
                        className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                        placeholder="email"
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
                            placeholder="endereço"
                            ></input>
                        </div>
                        <div>
                            <input 
                            type="text"
                            className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                            placeholder="bairro"
                            ></input>
                        </div>
                        <div>
                            <input 
                            type="text"
                            className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                            placeholder="cidade"
                            ></input>
                        </div>
                        <div>
                            <input 
                            type="text"
                            className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                            placeholder="Estado"
                            ></input>
                        </div>
                        <div>
                            <input 
                            type="text"
                            className="border-solid focus:outline-none border-2 border-b-[#BDBDBD] border-t-0 border-r-0 border-l-0"
                            placeholder="cep"
                            ></input>
                        </div>
                    </div>
                </div>
                
             </form>
        </div>
    )
}