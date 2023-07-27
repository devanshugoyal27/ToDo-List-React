import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ToDoList from './ToDoList';
// import ListGroup from 'react-bootstrap/ListGroup';


export default function Todo() {
  const [inputData, setInputData] = useState("")
  const [item, setItem] = useState([])
  const [tSubmit,setTsubmit] = useState(true)
  const [addEditItem,setAddEditItem] = useState(null)


  const onClickHandler = (e) => {
    if (!inputData) {

    } else if(inputData && !tSubmit) {
      setItem(item.map((e)=>{
        if(e.id===addEditItem){
            return {...e,name:inputData}
        }return e
      }))
                    setTsubmit(true)
                    setInputData('')
                    setAddEditItem(null)
    }
    else {
      const myInputData = {id: Date.now() , name:inputData}
      setItem([...item,myInputData])
      setInputData('')
      
    }
  }
  return (
    <div>
      <h1 className='text-center mt-5'>Create ToDo List</h1>
      <hr id='hr' />
      <InputGroup className="mb-3 mt-5 container w-50 ">
        <Form.Control
          placeholder="Write here...."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={inputData}
          id='my-input'
          onChange={(e) => setInputData(e.target.value)}
        />
        {tSubmit?<button id='myBtn' className='my-btn' onClick={onClickHandler}><i className="fa-solid fa-plus fa-fade"></i></button>:
        <button id='myBtn' className='my-btn' onClick={onClickHandler}><i className="fa-solid fa-check icon point"></i></button>}
        
      </InputGroup>

    <ToDoList item = {item}
     setItem = {setItem}
     tSubmit = {tSubmit}
     setTsubmit = {setTsubmit}
     inputData={inputData}
     setInputData={setInputData}
     addEditItem = {addEditItem}
     setAddEditItem={setAddEditItem}/>

    </div>
  )
}
