import React from "react";
import Formulario from "../formulario/Formulario";
import Lista from './lista/Lista';
import './style.scss';


function App(){
    return(
        <div className="App">
            <Formulario/>
            <Lista></Lista>
        </div>
    )
}

export default App;
