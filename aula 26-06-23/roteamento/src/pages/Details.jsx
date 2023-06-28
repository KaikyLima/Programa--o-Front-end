import { useParams } from "react-router-dom";

const Details = () => {

    const {selectedNumber} = useParams()

    return (
        <div>Número clicado: {selectedNumber}</div>
    );
}

export default Details;