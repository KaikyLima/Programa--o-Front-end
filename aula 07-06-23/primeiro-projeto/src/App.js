import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import List from './components/List';
import FormattedText from './components/FormattedText';
import Box from './components/Box';

const list1 = ["Primeiro Item","Segundo Item","Terceiro Item","Quarto Item"]
const list2 = ["banana", "tomate"]
function App() {
const [contador, setContador] = useState(0)

const handleClick = ()   => {
  setContador(contador + 1)
}

  return (
    <div className="App">
      <header className="App-header">
        <Card Card text="Texto passado do App.js para o Card.js" bgColor="#f2f"
        contador={contador}/>
        <Card Card text="Segundo card" bgColor="#ada" contador={contador}/>
        <button onClick={handleClick}></button>

        <Card bgColor="#d55d5d">
          <p>Texto children </p>
          <FormattedText label="teste" value="Lima"/> 
        </Card>
        <List items={list1}/>
        <List items={list2}/>
        <FormattedText label="10" value="testes"/> 
        <Box colorTex={"#f0f"}>
          <p>TESTE</p>
        </Box>
        


      </header>
    </div>
  );
}

export default App;
