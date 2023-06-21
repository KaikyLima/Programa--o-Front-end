import axios from "axios";
import "./UserList.css"
import { useEffect,useCallback, useState } from "react";

const TdePage = () => {

  const [userData, setUserData0] = useState([])
  const fetchUserData = useCallback(async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
      setUserData0(data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [])

  const renderUserData = () => {

    return (

      <div>
        <table>
        <thead>
           <tr>
               <th>userId</th>
               <th>id</th>
               <th>Title</th>
               <th>completed</th>
           </tr>
       </thead>
       <tbody>
        {userData.map(user => (
          
            
              <tr key={user.id}>
                <td>{user.userId}</td>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.completed ?'sim':'não'}</td>
              </tr>
            

        ))}
        </tbody>
        </table>
      </div>

    );
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      {renderUserData()}
    </div>
  );
}

export default TdePage;