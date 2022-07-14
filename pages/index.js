function CapsLock(props) {
    const testoInserido = props.children;
    const testoEmCapsLock = testoInserido.toUpperCase();
    return <div>{testoEmCapsLock}</div>
}
import { setState } from 'react';
import { useState } from 'react';

function Contador(){
    const [contador,setContador] = useState(0);

    function adicionarContador(){
        setContador(contador + 1);
    }

    function subtrairContador(){
        setContador(contador - 1);
    }

    return (
        <div>
            <h3><CapsLock>Contador Teste</CapsLock></h3>
            <div>
                <div>Resultado = {contador}</div>
                <button onClick={adicionarContador}><CapsLock>Adicionar</CapsLock></button>
                <button onClick={subtrairContador}><CapsLock>Subitrair</CapsLock></button>
            </div>
        </div>
    )
}

function Pagina() {
    //return <CapsLock>Me deixe em CapsLock por favor</CapsLock>
    return <Contador/>
}

export default Pagina