import React, {useState} from 'react';

const Todo = () => {
    const [inputData , setInputData] = useState('');
    const [items , setItems] = useState([

    ])
    const addItem =()=>{
     if(!inputData){
     }
     else{
      setItems([...items , inputData])
      setInputData('');
     }
    }
    const deleteItem=(id)=>{
      const updateditems = items.filter((elem , ind)=>{
        return ind !==id;
      });
      setItems(updateditems);
    }
    const removeAll =()=>{
      setItems([])
    }
  return(
    <>
    <div className='main-div'>
        <div className='child-div'>
    <figure>
        <img src=''  alt='todo logo' />
        <figcaption>Add Your List Here</figcaption>
    </figure>
    <div className='addItems'>
    <input type='text'  placeholder='Add items'  value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
    <i className='fa fa-plus add-btn' title='Add Item' onClick={addItem}></i>
    </div>
    <div className='showItems'>
      {
       items.map((elem , ind)=>{
         return(
<div className='eachItem' key={ind}>
    <h3>{elem}</h3>
    <i className='fa fa-trash-alt add-btn' title='Delete Item'
    onClick={()=>deleteItem(ind)}
    ></i>
    </div>
         )
       })
      }
    </div>
    {/* Clear all items */}
    <div className=''>
    <button  className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
    </div>
        </div>

    </div>
    </>
  );
};

export default Todo;
