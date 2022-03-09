import React,{Component} from "react";
import imagen1 from './assets/ImagenBanco.png';
import imagen2 from './assets/GrafismoBanco.png';
import imagen3 from './assets/AhorrarGrafismo.png';

class Componente extends Component{
    //Permite rendeizar el código js
    render(){
        return(
            <div class = "row">
                <div id="carouselExampleControls" class="carousel slide align-self-center" data-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active align-self-center">
                            <img class="h-100" src={imagen1} alt="Slide 1"/>
                        </div>
                        <div class="carousel-item">
                            <img class="h-100" src={imagen2} alt="Slide 2"/>
                        </div>
                        <div class="carousel-item">
                            <img class="h-100" src={imagen3} alt="Slide 3"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            
        );  
    }
}

export default Componente;