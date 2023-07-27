import React from 'react'
import Button from 'react-bootstrap/Button';

export default function ToDoList({item,setItem,tSubmit,setTsubmit,setInputData,inputData,addEditItem,setAddEditItem}) {

    const delItem = (ind) => {
        const uItem = item.filter((e) => {
          return ind !== e.id
        })
        setItem(uItem)
    }

        const clearBtn = () => {
            setItem([])
          }

          const editItem = (id)=>{
            let newEditItem = item.find((e)=>{
                return e.id === id
            })
                    console.log(newEditItem)
                    setTsubmit(false)
                    setInputData(newEditItem.name)
                    setAddEditItem(id)
          }
          
        

  return (
    <div>
        <ol className='w-50 mt-5 container '>
        {item.map((e) => {
          return <div key={e.id} className='d-flex justify-content-between border-bottom' >
            <li className='mt-4 ' >{e.name}</li>
            <div className='my-icon'>
               <i className="fa-solid fa-pen-to-square fa-bounce icon point" onClick={() => editItem(e.id)}></i>
               <i className="fa-solid fa-trash fa-bounce point mt-4" title='Delete' style={{ color: '#f00000' }} onClick={() => delItem(e.id)}></i>
              
            </div>
           
          </div>

        })}
      </ol>
      <div className='text-center mt-4'>
        <Button onClick={clearBtn} variant="primary" title='Clear All' ><i className="fa-solid fa-broom fa-shake"></i> Clear</Button>
      </div>
    </div>
  )
}
