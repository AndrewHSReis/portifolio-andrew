function CapsLock(props) {
    const testoInserido = props.children;
    const testoEmCapsLock = testoInserido.toUpperCase();
    return <div>{testoEmCapsLock}</div>
}
import { setState } from 'react';
import { useState } from 'react';

function Contador(){
    const [contador,setContador] = useState(0);
    const [formQtd,setFormQtd] = useState();
    console.log(formQtd);

    function adicionarContador(){
        setContador(contador + parseInt(formQtd));
    }

    function subtrairContador(){
        setContador(contador - parseInt(formQtd));
    }

    return (
        <div>
            <h3><CapsLock>Contador Teste</CapsLock></h3>
            <div>
                <form><label>Insira a quantidade: <input type='text' value={formQtd} onChange={e =>setFormQtd(e.target.value)}/></label></form>
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