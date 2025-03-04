import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap y estilos globales
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/index.css";

// Importamos el componente principal para su visualización
import TrafficLight from "./components/TrafficLight";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TrafficLight />
    </React.StrictMode>
);
