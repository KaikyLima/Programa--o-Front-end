import './UserInfo.css';

const UserInfo = ({name, birthday, email}) => {
    return (
        <div className='textcolor'>
        
            <p> Nome: {name} </p> 
            <p>Data de nascimento: {birthday}</p> 
            <p>e-mail: {email} </p>

        </div>
    );
}

export default UserInfo;