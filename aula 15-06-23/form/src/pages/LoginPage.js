import { useState } from 'react';
import './LoginPage.css'

const LoginPage = () => {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }
    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }
    const onSubmit = () => {
        console.log(email, password)
    }

    return (
        <div className='container'>
            <div className='formContainer'>
                <label for="emailInput">E-mail</label>
                <input
                    type='email'
                    id='emailInput'
                    name = 'emailInput'
                    value={email}
                    onChange={onChangeEmail}
                />
                <label for="passwordInput">Password</label>
                <input
                    type='password'
                    id='passwordInput' 
                    name = 'passwordInput'
                    value={password}
                    onChange={onChangePassword}
                />
                <p>A senha deve conter mais de que 5 caracter</p>
                <button onClick={onSubmit}>Entrar</button>
            </div>
        </div>
    );
}

export default LoginPage;