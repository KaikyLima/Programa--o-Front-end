import './List.css'

const List = ({items}) => {
    return (
        <div className='listContainer'>
            {items.map(item =>(<p>{item}</p>))}
        </div>
    );
}

export default List;