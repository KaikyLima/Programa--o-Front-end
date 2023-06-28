import { useState } from "react";

const Componentes = ({props1}) => {
    console.log("testando", props1)

    const [nomeEstado, setNomeEstado] = useState()
    const onclickH3 = () => {
        setNomeEstado ('Teste')
    }

    return (
        <div>
            <h3>
                Revisão final {props1}
            </h3>
        </div>
    );
}

export default Componentes;