import React, { useState, useEffect } from 'react';

const Action = () => {

    
    useEffect(() =>{
        console.log('O componente foi montado');
    },[])


    useEffect(() => {
        return () =>{
            console.log('O componente foi desmontado');
        }
    },[])


    return (
        <div>exemplo</div>
    );
}

export default Action;