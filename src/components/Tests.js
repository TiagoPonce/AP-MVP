import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import PlusSquare from 'public/plus-square.png'
import checkSquare from 'public/check-square.png'

function Tests() {
  const context = useContext(AppContext);

  const [company, setCompany] = useState({});
  const [up, setUp] = useState({})
  const [reload, setReload] = useState(false)
  const [load, setLoad] = useState(false)
  const [success, setSuccess] = useState(false)

  const upPage = (leader, id) => {
    const upNew = up
    if (!upNew[leader.id]) {
      upNew[leader.id] = [id]
      setUp(() => upNew)
      setReload(!reload)
    } else {
      if (upNew[leader.id].includes(id)) {
        const newArray = upNew[leader.id].filter((e) => e !== id)
        upNew[leader.id] = newArray
        setUp(() => upNew)
        setReload(!reload)
      } else {
        upNew[leader.id].push(id)
        setUp(() => upNew)
        setReload(!reload)
      }
    }
  }


  const createTeste = () => {

    const body = {
      company: { id: company.id, name: company.name, email: company.email },
      selectLeaderEmployee: up,
    }
    // console.log(body.selectLeaderEmployee[1])

    const keys = Object.keys(body.selectLeaderEmployee)

    // console.log(keys)

    keys.map((key) => { console.log(`Leader: ${key}`, body.selectLeaderEmployee[key]) })
    
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
      setSuccess(true)
    }, 5000)
  }

  useEffect(() => {
    axiosInstance.get('/companies/1')
      .then((res) => setCompany(res.data.data))
  }, []);

  const listTest = () => {
  
  const context = useContext(AppContext);

  
  return (
      <div className=" w-[1024px] h-[468px] overflow-auto bg-white p-4 flex flex-col gap-4">
        <div className="flex flex-wrap justify-between items-center border-b-2 p-2 border-black">
          <div>
            <h2 className='text-xl tracking-widest text-slate-700'>{company.name}</h2>
          </div>
          <div className="group-bottons flex text-slate-900">
            <button
                onClick={ () => {
                  context.setShowModal(true);
                } }
              className=" w-[214px] text-lg border-2 tracking-wider hover:bg-slate-200 rounded-xl p-2 mr-6 flex justify-around items-center"
            >
              <Image
                src={PlusSquare}
                alt="check"
              />
              Adcionar Lider
            </button>
            <button
                onClick={() => context.setShowModal(true)}
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

        {company.leaders && company.leaders.map((leader) => (
          <div key={leader.id} className="bg-white border-2 border-slate-300 p-4">
            <div className='border-b-2 flex'>
              {/* <Image
              src={noCheckSquare}
              className='mr-4'
              alt='checksquare'
            /> */}
              <h1 className="text-slate-600 tracking-widest">
                Lider: {leader.firstName} {leader.lastName} - {leader.email}
              </h1>
            </div>
            <div className='p-2 gap-2 flex flex-col items-center'>
              <div>
                <h1 className="text-slate-600 text-lg tracking-widest">Lista de Funcionarios</h1>
              </div>

              <div className='w-full'>
                {company.employees.map((employee) => (
                  <ul key={employee.id} className='mt-2 flex text-lg gap- text-slate-800 tracking-widest justify-around'>
                    <li className='flex'>
                      {
                        up[leader.id] ? (
                          up[leader.id].includes(employee.id) ? (
                            <Image
                              src={checkSquare}
                              className='mr-4'
                              alt='checksquare'
                              onClick={() => upPage(leader, employee.id)}
                            />
                          ) : (
                            <Image
                              src={noCheckSquare}
                              className='mr-4'
                              alt='checksquare'
                              onClick={() => upPage(leader, employee.id)}
                            />
                          )
                        ) : (
                          <Image
                            src={noCheckSquare}
                            className='mr-4'
                            alt='checksquare'
                            onClick={() => upPage(leader, employee.id)}
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
          onClick={createTeste}
        >
          Criar Teste
        </button>
      </div>
    )
  }

  const verifySuccess = () => {
    if (load && !success) {
      return (
        <div className="flex h-[400px] items-center justify-center">
          <svg className="mr-3 h-10 w-15 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-75" cx="12" cy="12" r="10" stroke="with" strokeWidth="4"></circle>
            <path className="opacity-99" fill="#A4BBDD" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="font-medium text-2xl"> Aguarde... </span>
        </div>
    </div>
  )
}

export default Tests
