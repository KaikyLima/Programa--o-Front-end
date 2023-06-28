import './App.css';
import Componentes from './components/Componentes';

function App() {

  const renderComponentes = () =>{
    return(
      <Componentes/>
    )
  }

  return (
    <div>
      {renderComponentes()}
      <Componentes props1={10}/>
    </div>
  );
}

export default App;
