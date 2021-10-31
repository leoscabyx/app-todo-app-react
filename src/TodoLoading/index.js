import React from "react";

import './TodoLoading.css'

function TodoLoading() {
    return (
        <div className="TodoLoading">
            <img src="./img/astronauta.png" alt="Astronauta" />
            <span>Cargando...</span>
        </div>
    )
}

export { TodoLoading }