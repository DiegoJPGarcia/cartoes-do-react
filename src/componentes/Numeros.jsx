import React from "react";
export default (props) => {
    const min = props.min
    const max = props.max
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (<div>
        <h2>valor aleatório</h2>
        <p><strong>valor mínimo</strong>{min}</p>
        <p><strong>valor mínimo</strong>{max}</p>
        <p><strong>valor sorteado:</strong>{aleatorio}</p>

    </div>)

}