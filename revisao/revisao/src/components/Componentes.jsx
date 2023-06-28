import { useState } from "react";

const Componentes = ({props1}) => {
    console.log("testando", props1)

    const [nomeEstado, setNomeEstado] = useState()

    return (
        <div>
            <h3>
                Revisão final {props1}
            </h3>
        </div>
    );
}

export default Componentes;