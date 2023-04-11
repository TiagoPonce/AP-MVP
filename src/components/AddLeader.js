import React from 'react'
import { useForm } from 'react-hook-form'

const AddLeader = () => {

    const onSubmit = data => console.log(data);
    const { register, handleSubmit, formState: {errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            age: 0,
            gender: '',
            country: '',
            city: '',
            email: '',
            phone: '',

        }
    });

  return (
    <div className='w-[1280px] h-[700px] bg-slate-200 p-10'>
        <div>Leader's details - </div>
        <div className='w-full h-full p-4'>
            <form 
            className="border-2 border-solid flex gap-4"
            onSubmit={handleSubmit(onSubmit)}
            >   
                <div className='border-2 border-solid  flex flex-col w-1/2 gap-10'>

                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[100px]">First Name</label>
                        <input {...register('firstName')} 
                        placeholder='Primeiro nome'
                        className='px-2 py-1 w-64 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>
                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[100px]">Nome</label>
                        <input {...register('lastName')} 
                        placeholder='Sobrenome'
                        className='px-2 py-1 w-64 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>
                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[100px]">Idade</label>
                        <input {...register('age')} 
                        type='number'
                        placeholder='Idade'
                        className='px-2 py-1 w-64 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>
                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[100px]">Gênero</label>
                        <select name='genero'>
                            <option value="Female">Feminino</option>
                            <option value="Male">Masculino</option>
                            <option value="Others">Outros</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[100px]">Estado</label>
                        <input {...register('country')} 
                        type='string'
                        placeholder='Estado'
                        className='px-2 py-1 w-64 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>
                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[100px]">Cidade</label>
                        <input {...register('city')} 
                        type='string'
                        placeholder='Cidade'
                        className='px-2 py-1 w-64 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>
                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[100px]">Email</label>
                        <input {...register('email')} 
                        type='string'
                        placeholder='Email'
                        className='px-2 py-1 w-64 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>
                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[100px]">Celular</label>
                        <input {...register('phone')} 
                        type='string'
                        placeholder='Celular'
                        className='px-2 py-1 w-64 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>
                    

  {/* id                    Int     @id @default(autoincrement())
  firstName             String
  lastName              String
  age                   Int
  gender                Gender  @default(Female)
  ethnicBackground      EthnicBackground   @default(American)
  country               String
  city                  String
  email                 String
  Phone                 String
  surveyLanguage        SurveyLanguage  @default(Portugues)
  functionalArea        String
  OrganizationalLevel   String
  leadershipGrowthArea1 String
  leadershipGrowthArea2 String
  company Company       @relation(fields: [companyId], references: [id])
  companyId             Int */}
                  
                </div>
                <div className='border-2 border-solid  flex flex-col w-1/2 gap-10'>
                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[150px]">Área Funcional</label>
                        <input {...register('functionalArea')} 
                        type='string'
                        placeholder='Functional Area'
                        className='px-2 py-1 w-64 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>
                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[150px]">Level Organizacional</label>
                        <input {...register('OrganizationalLevel')} 
                        type='string'
                        placeholder='Level Organizacional'
                        className='px-2 py-1 w-64 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>
                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[150px]">Área de crescimento 1</label>
                        <textarea {...register('leadershipGrowthArea1')} 
                        placeholder='Área de crescimento'
                        className='px-2 w-64 h-32 py-1 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>
                    <div className='flex items-center justify-around'>
                        <label className="font-bold text-sm w-[150px]">Área de crescimento 2</label>
                        <textarea {...register('leadershipGrowthArea2')} 
                        placeholder='Área de crescimento 2'
                        className='px-2 w-64 h-32 py-1 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>

                </div>
                
            </form>
        </div>  

    </div>
  )
}

export default AddLeader
