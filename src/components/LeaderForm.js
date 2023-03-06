import { useForm } from 'react-hook-form'

const LeaderForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div >
            <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="w-[1000px] h-[700px] gap-4 bg-white grid grid-cols-2">
                <div className=" flex flex-col gap-5 p-6 bg-slate-200">
                    <div className="flex justify-between">
                        <label className="w-20 mr-4 font-['Poppins']">First Name</label>
                        <input {...register("firstName", { required: true })} 
                        className="rounded border-2 border-solid border-slate-300"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className="w-20 mr-4 font-['Poppins']">Last Name</label>
                        <input {...register("lastName", { required: true })} 
                        className="rounded border-2 border-solid border-slate-300"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-20 mr-4 font-['Poppins']">Age</label>
                        <input {...register("age", { required: true })} 
                        className="rounded border-2 border-solid border-slate-300"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-20 mr-4 font-['Poppins']">Gender</label>
                        <select {...register("gender", { required: true })} 
                        className="rounded border-2 border-solid border-slate-300"
                        >
                            <option value="feminino">Feminino</option>
                            <option value="male">Masculino</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-20 mr-4 font-['Poppins']">Country</label>
                        <input {...register("country", { required: true })} 
                        className="rounded border-2 border-solid border-slate-300"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-20 mr-4 font-['Poppins']">City</label>
                        <input {...register("city", { required: true })} 
                        className="rounded border-2 border-solid border-slate-300"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-20 mr-4 font-['Poppins']">Email</label>
                        <input {...register("email", { required: true })} 
                        className="rounded border-2 border-solid border-slate-300"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-20 mr-4 font-['Poppins']">Phone</label>
                        <input {...register("phone")} 
                        className="rounded border-2 border-solid border-slate-300"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-30 mr-4 font-['Poppins']">Functional Area</label>
                        <input {...register("functionalArea", { required: true })} 
                        className="rounded border-2 border-solid border-slate-300"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-30 mr-4 font-['Poppins']">Organizational Level</label>
                        <input {...register("organizationalLevel", { required: true })} 
                        className="rounded border-2 border-solid border-slate-300"
                        />
                    </div>
                </div>
                    
                <div className="flex flex-col gap-5 p-6 bg-slate-200">
                    <div className="flex justify-between">
                        <label className=" w-30 h-24 mr-4 font-['Poppins']">Leadership Growth Area 1</label>
                        <input 
                        type="textarea"
                        {...register("leadershipGrowthArea1", { required: true })} 
                        className="rounded border-2 border-solid border-slate-300"
                        />
                    </div>
                    <div className="flex justify-between">
                        <label className=" w-30 h-24 mr-4 font-['Poppins']">Leadership Growth Area 2</label>
                        <input 
                        type="textarea"
                        {...register("leadershipGrowthArea2", { required: true })} 
                        className="rounded border-2 border-solid border-slate-300"
                        />
                    </div>
                </div>
                <div>
                <button 
                    className="border-solid border-black border-2 w-36 rounded bg-slate-900 text-white font-bold text-xl hover:bg-slate-500"
                    type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default LeaderForm;