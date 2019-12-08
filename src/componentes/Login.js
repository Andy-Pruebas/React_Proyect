import React, {Component} from 'react';
import {PostData} from '../componentes/services/PostData';
import {Redirect} from 'react-router-dom';
import './css/login.css'

class Login extends Component{

    constructor(props){
      super(props);
      this.state ={
        usuario: '',
        contraseña: '',
        redirect: false
      }
      this.login = this.login.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    login(){
      if(this.state.usuario && this.state.contraseña){
        PostData('login', this.state).then((result) =>{
          let responseJSON = result;
          console.log(responseJSON);
          if(responseJSON.userData){
           sessionStorage.setItem('userData', responseJSON)
           this.setState({redirect: true});
          }
          else{
            console.log("Login error");
          }
        });
      }
      
    }

    onChange(e){
      this.setState({[e.target.name]: e.target.value})
    }
    render(){

      if(this.state.redirect){
        return(<Redirect to={'/menu'}/>)
      }


        return(
            <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100">
                <div className="login100-pic js-tilt" data-tilt>
                  <img src={require('./images/cultura.png')}alt="IMG" />
                </div>
                <form className="login100-form validate-form">
                  <span className="login100-form-title">
                    Iniciar Sesión
                  </span>
                  <div className="wrap-input100 validate-input" data-validate="Usuario obligatorio">
                    <input className="input100" type="text" name="usuario" placeholder="Usuario" onChange={this.onChange}/>
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Contraseña obligatoria">
                    <input className="input100" type="password" name="contraseña" placeholder="Contraseña" onChange={this.onChange}/>
                    <span className="focus-input100" />
                    <span className="symbol-input100">
                      <i className="fa fa-lock" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="container-login100-form-btn">
                    <div className="login100-form-btn">
                      <input type="submit" className="button" value="Ingresar" onClick={this.login}/>
                    </div>
                  </div>
      
                  <div className="container-login100-form-btn">
                    <a className="login100-form-btn" href="/Registro">
                      Registrarse
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;