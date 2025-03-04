 //Voy a usar comentarios para explicar lo que hago 
 //Importamos la librería de React, necesaria para crear componentes, importamos la librería de React, necesaria para crear componentes
import React, { useState } from "react";
//importamos los archivos de css 
import "../../styles/index.css"; 

//definimos el componente con funcion tipo flecha
const TrafficLight = () => { 
    //deinimos el estado del semaforo empezando con el apagado con null
    const [color, setColor] = useState(null);

    //estructura de lo que se renderiza en pantalla
    return (
        <div className="traffic-light-container">
            <div 
                className={`light red ${color === "red" ? "active" : ""}`} 
                onClick={() => setColor("red")}
            ></div>
            <div 
                className={`light yellow ${color === "yellow" ? "active" : ""}`} 
                onClick={() => setColor("yellow")}
            ></div>
            <div 
                className={`light green ${color === "green" ? "active" : ""}`} 
                onClick={() => setColor("green")}
            ></div>
        </div>
    );
};
//exportación del componente
export default TrafficLight;