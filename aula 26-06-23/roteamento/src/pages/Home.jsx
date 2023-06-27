import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    const navigateToLogin= () => {
        navigate(-1)
    }

    return (
        <div>
            <h3>Home</h3>
            <button onClick={navigateToLogin}>Ir para tela Login</button>
        </div>
    );
}

export default Home;