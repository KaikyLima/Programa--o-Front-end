import './App.css';
import CreatUser from './pages/CreatUser';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
        <CreatUser/>
    </ChakraProvider>
  );
}

export default App;
