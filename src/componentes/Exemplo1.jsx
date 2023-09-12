import { useState} from 'react'

function Exemplo1() {

    /*Hooks - useState */
    const [contador, setContador]= useState(0);
    const [lista, setLista]= useState([]);

    /*Criando as funçoes*/
    const incrementar =()=>setContador(contador +1);
    const decrementar =()=>setContador(contador -1);
    const adicionarLista =()=> setLista([...lista,Math.random(10).toFixed(2)])

    return (
        <>
        <fieldset>
        <legend> Exemplo1 </legend>
        <p>Valor:{contador}</p>
        <button onClick={incrementar}>Aumentar</button>
        <button onClick={decrementar}>Diminuir</button>
        </fieldset>
        <fieldset>
            <legend>Exemplo2</legend>
            <ul>
                {lista.map((n,i)=><li key={i}>{n}</li>)}
            </ul>
            <button onClick={adicionarLista}></button>
        </fieldset>
        </>
    )

}

export default Exemplo1