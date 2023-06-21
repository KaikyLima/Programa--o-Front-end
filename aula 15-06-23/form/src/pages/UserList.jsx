import { useEffect, useReducer, useState } from "react";
import "./UserList.css"

const UserList = () => {

    const [state, seState] = useState('Estado inicial')

    useEffect(() =>{
        console.log('useEffect como didMount')
    } , [])

    useEffect(() =>{
        console.log('useEffect como didMount')
    } , [state])

    const onClink = () => {
        seState('Estado Atualizado')
    }

    return (
        <div className="container">
            <h1>Exemplo de hook useEffect</h1>
            <h3>{state}</h3>
            <button onClick={onClink}>Atualizar o Estado</button>
        </div>
    );
}

export default UserList;