import React from 'react'
import Image from 'next/image'
import checkSquare from 'public/check-square.png'

function Tests() {
  return (
    <div className=" w-[1024px] h-[468px] bg-white p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center border-b-2 p-2 border-black">
            <div>
              <h2 className='text-xl tracking-widest text-slate-700'>Info Tech LTDA</h2>
            </div>
            <div className="group-bottons flex text-slate-900">
                <button
                className=" w-[214px] text-lg border-2 tracking-wider hover:bg-slate-200 rounded-xl p-2 mr-6 flex justify-around items-center"
                >
                  <Image 
                  src={checkSquare}
                  />
                  Adcionar Lider
                </button>
                <button
                className="w-[214px] text-lg border-2 tracking-wider hover:bg-slate-200 rounded-xl justify-around p-2 mr-6 flex  items-center"
                >
                  <Image 
                  src={checkSquare}
                  />
                  Funcionario
                </button>
            </div>  
        </div>
        <div className="h-[400px] bg-white border-2 border-slate-300 p-4">
          <div className='border-b-2'>
            <h1 className="text-slate-600 tracking-widest">Lider: Tiago Ponce - tiago@gmail.com</h1>
          </div>
        </div>
    </div>
  )
}

export default Tests
