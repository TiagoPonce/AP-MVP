import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import PlusSquare from 'public/plus-square.png'
import checkSquare from 'public/check-square.png'
import noCheckSquare from 'public/no-check-square.png'
import axios from 'axios';

function Tests() {
  const [company, setCompany ] = useState({});
  const [up, setUp] = useState({})
  const [reload, setReload] = useState(false)

  const upPage = (leader, id) => {
    const upNew = up
    if (!upNew[leader.firstName]){
        upNew[leader.firstName] = [id]
        setUp(() => upNew)
        setReload(!reload)
    } else {
      if (upNew[leader.firstName].includes(id)) {
        const newArray = upNew[leader.firstName].filter((e) => e !== id)
        upNew[leader.firstName] = newArray
        setUp(() => upNew)
        setReload(!reload)
      } else {
        upNew[leader.firstName].push(id)
        setUp(() => upNew)
        setReload(!reload)
      }
    }
  }


  const createTeste = () => {
    const newDate = new Date()

    const body = {
      company: {id: company.id, name: company.name, email: company.email },
      selectLeaderEmployee: up,
      date: newDate.getMonth()
    }
    console.log(body)
  }

  useEffect(() => {
    axios.get('api/companies/1')
      .then((res) => setCompany(res.data.data))
  }, []);
   
  return (
    <div className=" w-[1024px] h-[468px] overflow-auto bg-white p-4 flex flex-col gap-4">
        <div className="flex flex-wrap justify-between items-center border-b-2 p-2 border-black">
            <div>
              <h2 className='text-xl tracking-widest text-slate-700'>{company.name}</h2>
            </div>
            <div className="group-bottons flex text-slate-900">
                <button
                className=" w-[214px] text-lg border-2 tracking-wider hover:bg-slate-200 rounded-xl p-2 mr-6 flex justify-around items-center"
                >
                  <Image 
                  src={PlusSquare}
                  alt="check"
                  />
                  Adcionar Lider
                </button>
                <button
                className="w-[214px] text-lg border-2 tracking-wider hover:bg-slate-200 rounded-xl justify-around p-2 mr-6 flex  items-center"
                >
                  <Image 
                  src={PlusSquare}
                  alt="check"
                  />
                  Funcionario
                </button>
            </div>  
        </div>
        
        { company.leaders && company.leaders.map((leader) => (
          <div key={leader.id} className="bg-white border-2 border-slate-300 p-4">
            <div className='border-b-2'>
              <h1 className="text-slate-600 tracking-widest">Lider: {leader.firstName} {leader.lastName} - {leader.email}</h1>
            </div>
            <div className='p-2 gap-2 flex flex-col items-center'>
                <div>
                  <h1 className="text-slate-600 text-lg tracking-widest">Lista de Funcionarios</h1>
                </div>

                <div className='w-full'>
                  { company.employees.map((employee) => (
                    <ul key={employee.id}className='mt-2 flex text-lg gap- text-slate-800 tracking-widest justify-around'>
                      <li className='flex'>
                      { 
                        up[leader.firstName] ? (
                          up[leader.firstName].includes(employee.id) ? (
                            <Image 
                              src={checkSquare}
                              className='mr-4'
                              alt='checksquare'
                              onClick={ () => upPage(leader, employee.id) }
                            />
                          ) : (
                            <Image 
                              src={noCheckSquare}
                              className='mr-4'
                              alt='checksquare'
                              onClick={ () => upPage(leader, employee.id) }
                            />
                          )
                        ): (
                            <Image 
                              src={noCheckSquare}
                              className='mr-4'
                              alt='checksquare'
                              onClick={ () => upPage(leader, employee.id) }
                            />
                        )
                      }
                        

                        {employee.firstName} {employee.lastName}
                      </li>
                      <li>{employee.email}</li>
                      <li>Não enviado</li>
                      <li>Pendente</li>
                    </ul>
                  ))}
                </div>
            </div>
        </div>
        ))}
        <button 
          className='h-[40px] w-[200px] rounded-3xl bg-slate-900 text-white self-end'
          onClick={createTeste }
        >
          Criar Teste
        </button>
    </div>
  )
}

export default Tests
