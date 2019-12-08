import React, {Component} from 'react';
import './css/bootstrap.min.css';
import './css/estilo.css';
import './css/encuestas.css';
import './css/login.css'

class EncDiabetes extends Component{
    constructor(props){
        super(props);
        this.state={
            respuestasD:[],
            isFetch:true
        }
    }

    componentWillMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://proyectoin.herokuapp.com/apis/respuestas')
        .then((response) => {
            return response.json()
        })
        .then((resp)=>{
            this.setState({respuestasD:resp, isFetch: false})
        })
    }

    render(){

        if(this.state.isFetch){
            return(
                <div className="body"><span className="login100-form-title">
                Cargando Encuesta sobre la diabetes
              </span></div>
            );
        }

        const respu=this.state.respuestasD[0].resp1
        const respu1=this.state.respuestasD[1].resp1
        const respu2=this.state.respuestasD[2].resp1
        const respu3=this.state.respuestasD[3].resp1
        const respu4=this.state.respuestasD[4].resp1
        const respu5=this.state.respuestasD[5].resp1
        const respu6=this.state.respuestasD[6].resp1
        const respu7=this.state.respuestasD[7].resp1
        const respu8=this.state.respuestasD[8].resp1
        const respu9=this.state.respuestasD[9].resp1
        const respu10=this.state.respuestasD[10].resp1
        const respu11=this.state.respuestasD[11].resp1
        const respu12=this.state.respuestasD[12].resp1
        const respu13=this.state.respuestasD[13].resp1
        const respu14=this.state.respuestasD[14].resp1
        const respu15=this.state.respuestasD[15].resp1
        const respu16=this.state.respuestasD[16].resp1
        const respu17=this.state.respuestasD[17].resp1
        const respu18=this.state.respuestasD[18].resp1
        const respu19=this.state.respuestasD[19].resp1
        const respu20=this.state.respuestasD[20].resp1

        return(
            <div className="body">
                <div className="container">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="w3-container">
                                <div className="w3-panel w3-white w3-round-xlarge">
                                        <h1><b>Encuesta sobre la diabetes</b></h1>   
                                            <p><b>¿Qué es la diabetes?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p1a1" className="styled" type="checkbox" />
                                                <label for="p1a1">
                                                    {respu}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p1a2" className="styled" type="checkbox" />
                                                <label for="p1a2">
                                                  {respu1}
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p1a3" className="styled" type="checkbox" />
                                            <label for="p1a3">
                                                {respu2}
                                            </label>
                                        </div>  
                                        ----------------------------------------------------------------------------------
                                        <p><b>¿Cuántos tipos de diabetes se han registrado, a quienes afecta?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p2a1" className="styled" type="checkbox" />
                                                <label for="p2a1">
                                                {respu3}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p2a2" className="styled" type="checkbox" />
                                                <label for="p2a2">
                                                {respu4}
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p2a3" className="styled" type="checkbox" />
                                            <label for="p2a3">
                                                {respu5}
                                            </label>
                                        </div>
                                        ---------------------------------------------------------------------------------- 
                                        <p><b>¿Cuáles son los síntomas de la diabetes?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p3a1" className="styled" type="checkbox" />
                                                <label for="p3a1">
                                                {respu6}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p3a2" className="styled" type="checkbox" />
                                                <label for="p3a2">
                                                {respu7}
                                                </label>
                                        </div>            
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p3a3" className="styled" type="checkbox" />
                                            <label for="p3a3">
                                            {respu8}
                                            </label>
                                        </div>
                                        ---------------------------------------------------------------------------------- 
                                        <p><b>¿Cuál es el origen de la diabetes en niños y adultos respectivamente?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p4a1" className="styled" type="checkbox" />
                                                <label for="p4a1">
                                                {respu9}
                                                </label>
                                        </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p4a2" className="styled" type="checkbox" />
                                                    <label for="p4a2">
                                                    {respu10}
                                                    </label>
                                        </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                                <input id="p4a3" className="styled" type="checkbox" />
                                                    <label for="p4a3">
                                                    {respu11}
                                                    </label>
                                        </div>

                                        ---------------------------------------------------------------------------------- 
                                        <p><b>¿Cuáles son los factores de riesgo en la diabetes tipo 2?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p4a4" className="styled" type="checkbox" />
                                                <label for="p4a4">
                                                    {respu12}
                                                </label>
                                        </div>   
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p5a1" className="styled" type="checkbox" />
                                                <label for="p5a1">
                                                {respu13}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p5a2" className="styled" type="checkbox" />
                                                <label for="p5a2">
                                                {respu14}
                                                </label>
                                        </div>            
                                        ----------------------------------------------------------------------------------  
                                        <p><b>¿Cuáles son las complicaciones que puedo tener por padecer de diabetes?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p5a3" className="styled" type="checkbox" />
                                            <label for="p5a3">
                                                {respu15}
                                            </label>
                                        </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p6a1" className="styled" type="checkbox" />
                                                <label for="p6a1">
                                                {respu16}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p6a2" className="styled" type="checkbox" />
                                                <label for="p6a2">
                                                {respu17}
                                                </label>
                                        </div>             
                                        ----------------------------------------------------------------------------------  
                                        <p><b>¿Qué acciones se deben tomar para la prevención y manejo de la diabetes?</b></p>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p6a3" className="styled" type="checkbox" />
                                            <label for="p6a3">
                                                {respu18}
                                            </label>
                                        </div>     
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p7a1" className="styled" type="checkbox" />
                                                <label for="p7a1">
                                                {respu19}
                                                </label>
                                            </div>
                                        <div className="checkbox checkbox-success checkbox-circle">
                                            <input id="p7a2" className="styled" type="checkbox" />
                                                <label for="p7a2">
                                                {respu20}
                                                </label>
                                        </div>            
                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                                <a className="login100-form-btn" href="/Grafica">
                                Enviar Respuestas 
                                </a>
                            </div>       
                </div>
                </div>
            </div> 
            </div>
        );
    }
}

export default EncDiabetes;