import React, { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux';
import {addStudentsAsync} from './sampSlice';

const styles1 = {
  backgroundColor: '#4CAF50',border: 'none',color: 'white',padding: '15px 32px',
  textAlign: 'center',textDecoration: 'none',display: 'inline-block',fontSize: '16px',margin: '4px 2px',
  cursor: 'pointer',WebkitTransitionDuration: '0.4s',transitionDuration: '0.4s',
  boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)',
}

const AddStudent = () => {
  const dispatch = useDispatch();
  const [desc, setdesc] = useState("")
  const [sName, setsName] = useState("")
  return (
    <div>AddS New Item < br />
Desc: &nbsp;<input onChange={(e)=>setdesc(e.target.value)}/>&nbsp;
Name: &nbsp;<input onChange={(e)=>setsName(e.target.value)}/>&nbsp;&nbsp;
<button  style={styles1} onClick={()=>dispatch(addStudentsAsync({desc,sName}))} >Add Item</button>

    </div>
  )
}

export default AddStudent