import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudentsAsync, selectStudents, delStudentsAsync ,UpdStudentsAsync,selectUpdate} from './sampSlice';



export function Samp() {
    const students = useSelector(selectStudents);
    const studentsupdate = useSelector(selectUpdate);
    const dispatch = useDispatch();
    const [desc, setdesc] = useState("")
    const [sName, setsName] = useState("")
    useEffect(() => {
        dispatch(getStudentsAsync())
    }, [students.length,studentsupdate])

    return (
        <div>
            Update:<br />
            <input placeholder='Name' onChange={(e) => setsName(e.target.value)} />&nbsp;&nbsp;
            <input placeholder='Description' onChange={(e) => setdesc(e.target.value)} />

<hr></hr>
<h3>Item List</h3>
            <div style={{ width: '700px', padding: '20px', border: '10px solid gray', margin: '0' }}>
            {students.map((stu, i) => 
                <div key={i}>desc: &nbsp;{stu.description}&nbsp;, {" "} name: &nbsp;{stu.name}&nbsp;
                 <button style={{backgroundColor: '#ee5630'}} onClick={() => dispatch(delStudentsAsync(stu.id))}>Del</button>&nbsp;&nbsp;
                <button style={{backgroundColor: '#74f58a'}} onClick={() => dispatch(UpdStudentsAsync({ desc, sName,id: stu.id }))} >Update</button>
                </div>)}
                </div>
        </div>
    );
}
