import React,{Component} from "react";
import Button from "react-bootstrap/esm/Button";

class Componente extends Component{
    //Permite rendeizar el código js
    render(){
        return(
            <div class = "row bg-dark fixed-top">
                <div class = "row text-light text-center">
                <div class="col-4 align-self-center">
                    <button type="button" class="btn btn-secondary">Secondary</button>
                </div>
                <div class="col-4 align-self-center">
                    <h1>Banco Santondor</h1>
                </div>
                <div class="col-4 align-self-center">XD</div>
                </div>
            </div>
        );
    }
}

export default Componente;