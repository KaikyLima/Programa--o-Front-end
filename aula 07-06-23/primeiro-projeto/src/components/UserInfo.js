const UserInfo = ({items}) => {
    return (
        <div className='listContainer'>
            {items.map(item =>(<p>{item}</p>))}
        </div>
    );
}

export default UserInfo;