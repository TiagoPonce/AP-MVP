import Image from 'next/image'
import LogoAptd from 'public/logo-aptd.png'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import Router from 'next/router';

export default function Login() {
    const { register, handleSubmit, formState: {errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const handleSignIn = async ({ email, password }) => {
        const res = await signIn('credentials', {
            redirect: false,
            email,
            password
        });

        console.log(res);

        if (res.ok === true) {
            Router.replace("/dashboard")
        }
    };

    return (
        <div className="w-screen h-screen bg-slate-600 flex justify-center items-center">
            <div className="h-[424px] w-[680px] bg-white rounded-2xl flex  justify-center items-center">
                <form 
                    onSubmit={ handleSubmit((data) => handleSignIn(data)) }
                    className= " flex flex-col items-center h-full justify-around"
                >
                    <div className="logo">
                    <Image
                        src={LogoAptd}
                        alt="Picture of the author"
                        width={80}
                        
                    />
                    </div>
                    <div className="flex flex-col gap-6">
                        <input 
                            { ...register('email', { required: true }) }
                            aria-invalid={ errors.email ? "true" : "false" }
                            type="email"
                            placeholder="email"
                            className=' p-2 border-solid focus:outline-none border-2 border-b-[#BDBDBD] rounded-lg border-t-0 border-r-0 border-l-0'
                        />
                        {errors.email?.type === 'required' && <p>Email is required</p>}
                         <input 
                            { ...register('password', {
                                required: true,
                                minLength: {
                                    value: 5,
                                    message: "Min length  is 5"
                                }
                            })}
                            aria-invalid={ errors.password ? "true" :  "false" }
                            type="password"
                            placeholder="password"
                            className='p-2 border-solid border-2 focus:outline-none border-b-[#BDBDBD] rounded-lg border-t-0 border-r-0 border-l-0'
                        />
                        {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p role="alert">{errors.password.message}</p>}
                    </div>
                    <div className="button">
                        <button
                        className='hover:bg-slate-500 w-48 h-10 text-lg bg-slate-600 rounded-lg font-bold text-white'
                        >Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}