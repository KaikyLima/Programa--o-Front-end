import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    const navigateToHome = () => {
        navigate('/home')
    }


    return (
        <div>
            <h3> Login </h3>
            <button onClick={navigateToHome}>Ir para tela Home</button>
        </div>

    );
}

export default Login;