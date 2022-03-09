import React,{Component} from "react";
import Button from "react-bootstrap/esm/Button";

class Componente extends Component{
    //Permite rendeizar el código js
    render(){
        return(
            <div class = "row bg-dark fixed-top">
                <div class = "row">
                    <div class = "col-4 text-center">
                    <button type="button" class="btn btn-secondary">Secondary</button>
                    </div>
                    <div class = "col-4 text-light text-center">
                        <h1>Banco Santondor</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Componente;