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
                <div className='border-2 border-solid  flex flex-col w-1/2 gap-4'>

                    <div className='flex items-center justify-around'>
                        <label className="font-bold">First Name</label>
                        <input {...register('firstName')} 
                        placeholder='Primeiro nome'
                        className='px-2 py-1 rounded-lg border border-gray-300 transition duration-500 ease-in-out
                        focus:outline-none focus:border-slate-600 text-gray-800'
                        />
                    </div>
                   
                    
                  
                    <input {...register('lastName')} />
                </div>

                <input type='submit' />
            </form>
        </div>  

    </div>
  )
}

export default AddLeader
