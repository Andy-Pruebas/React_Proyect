import React, {Component} from 'react';
import './css/login.css';
import './css/menu.css';


class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
            enfermedades:[],
            isFetch: true
        }
    }

    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/http://proyectoin.herokuapp.com/apis/infos')
        .then((response) => {
            return response.json()
        })
        .then((enfer)=>{
            this.setState({enfermedades:enfer, isFetch: false})
        })
    }
    render(){
            return(
                <div className="body">
                    <div id="header">
                        <div class="left">
                            <ul class="nav">
                                <li><a href="/Menu">Inicio</a></li>
                                <li><a href="/Diabetes">Diabetes</a>
                                    <ul>
                                        <li><a href="/EncDiabetes">Encuesta de Conocimiento</a></li>
                                        <li><a href="/TestDiabetes">Test</a></li>
                                    </ul>
                                </li>
                                <li><a href="/Anemia">Anemia</a>
                                    <ul>
                                        <li><a href="/EncAnemia">Encuesta de Conocimiento</a></li>
                                        <li><a href="/TestAnemia">Test</a></li>
                                    </ul>
                                </li>
                                <li><a href="">Idioma</a>
                                    <ul>
                                        <li><a href="">Quechua</a></li>
                                        <li><a href="/Menu">Español</a></li>
                                    </ul>
                                </li>
                                <li><a href="/Login">Iniciar Sesion</a></li>
                                <li><a href="/Registro">Registrarse</a></li>
                            </ul>
                        </div>
		            </div>
        
                    <div class="container-menu">
                    
                        <div class="card">
                            <img src={require("./images/oms.jpg")}alt="IMG"/>
                            <p>Según el Ministerio de Salud, de los 1,4 millones de peruanos que tiene diabetes actualmente, sólo la mitad estaría diagnosticada, convirtiéndose en la tercera causa de muerte en el país.<a href="/Oms">Leer mas</a></p>
                            <a href="https://www.who.int/es">Sitio web</a>
                        </div>
                        
                        <div class="card">
                            <img src={require("./images/diabetes1.jpg")}alt="IMG"/>
                            <p>La diabetes es una enfermedad crónica que aparece cuando el páncreas no produce insulina suficiente o cuando el organismo no utiliza eficazmente la insulina que produce.<a href="/Diabetes">Leer mas.</a></p>
                            <a href="/EncDiabetes">Realizar encuesta</a>
                        </div>
                        
                        <div class="card">
                            <img src={require("./images/anemia.jpg")}alt="IMG"/>
                            <p>La anemia es una enfermedad crónica no transmisible que tiene como una de sus principales causas la insuficiencia de hierro (mineral que produce glóbulos rojos) en la sangre.<a href="/Anemia">Leer mas.</a></p>
                            <a href="/EncAnemia">Realizar encuesta</a>
                        </div>
        
                    </div> 
                </div>
                );
        }

}

export default Menu;