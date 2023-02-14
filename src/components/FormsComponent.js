export default function FormsComponent() {
    return (
        <div className="forms w-1/2 bg-white box-border">
            <form className="h-full w-full border-2 bg-[#F8F7F7] border-black p-2">
                <h1 className="text-slate-400 font-bold text-sm">Cadastrar empresa</h1>
                <div className="grid grid-cols-3 gap-4 p-4">
                    <div>
                        <input 
                        type="text"
                        className="border-b-2"
                        placeholder="Nome da empresa"
                        ></input>
                    </div>
                    <div>
                    <input 
                        type="text"
                        className="border-b-2"
                        placeholder="Nome fantasia"
                        ></input>
                    </div>
                    <div>
                    <input 
                        type="text"
                        className="border-b-2"
                        placeholder="cnpj"
                        ></input>
                    </div>
                    <div>
                    <input 
                        type="text"
                        className="border-b-2"
                        placeholder="telefone"
                        ></input>
                    </div>
                    <div>
                    <input 
                        type="text"
                        className="border-b-2"
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
                            className="border-b-2"
                            placeholder="endereço"
                            ></input>
                        </div>
                        <div>
                            <input 
                            type="text"
                            className="border-b-2"
                            placeholder="bairro"
                            ></input>
                        </div>
                        <div>
                            <input 
                            type="text"
                            className="border-b-2"
                            placeholder="cidade"
                            ></input>
                        </div>
                        <div>
                            <input 
                            type="text"
                            className="border-b-2"
                            placeholder="Estado"
                            ></input>
                        </div>
                        <div>
                            <input 
                            type="text"
                            className="border-b-2"
                            placeholder="cep"
                            ></input>
                        </div>
                    </div>
                </div>
                
             </form>
        </div>
    )
}