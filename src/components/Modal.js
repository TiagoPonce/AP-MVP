import React from 'react';
import AppContext from '../context/AppContext';
import { useContext } from 'react';
import TableCompany from './TableCompany';
import FormsComponent from './FormsComponent';

function Modal({children}) {

  const context = useContext(AppContext);
  
  const handleClose = (e) => {
      if (e.target.id === "wrapper") {
        context.setShowModal(false)
      }
  }


  if ( !context.showModal ) return null;
  return (
    <div className=" fixed inset-0 bg-black
     bg-opacity-25 backdrop-blur-sm
    flex flex-col justify-center items-center"
    id="wrapper"
    onClick={handleClose}
    >
        <div className='flex flex-col'>
            <button 
            className='text-white text-xl place-self-end'
            onClick={() => context.setShowModal(false)}
            >X</button>
            <div className='bg-white p-2 rounded'>{children}</div>
        </div>
    </div>
  )
}

export default Modal
