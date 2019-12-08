import React, {Component} from 'react';
import axios from 'axios';
import './css/registro.css';

class Registro extends Component{
    constructor(props){
        super(props);
        this.state={
            usuario:"",
            nombres:"",
            apellidos:"",
            dni:"",
            correo:"",
            "contraseña":"",
        }
        this.changeuser=this.changeuser.bind(this);
        this.changename=this.changename.bind(this);
        this.changelast=this.changelast.bind(this);
        this.changeDNI=this.changeDNI.bind(this);
        this.changeemail=this.changeemail.bind(this);
        this.changepass=this.changepass.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    changeuser(e) {
        this.setState({
          usuario: e.target.value
        });
    }
    changename(e){
        this.setState({
            nombres:e.target.value
        });
    }
    changelast(e){
        this.setState({
            apellidos:e.target.value
        });
    }
    changeDNI(e){
        this.setState({
            dni:e.target.value
        });
    }
    changeemail(e){
        this.setState({
            correo:e.target.value
        });
    }
    changepass(e){
        this.setState({
            contraseña:e.target.value
        });
    }
    handleSubmit(event){
        axios.post('https://proyectoin.herokuapp.com/apis/users/',this.state)
        .then(res =>{window.location.replace("/Login");
        })
    }
    render(){
        return(
            <div className="limiter">
            <div className="container-login100">
                <div className="login100-more" style={{backgroundImage: 'url("images/ten.png")'}} />
                <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                    <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-59">
                        Registrar
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Nombre de Usuario</span>
                        <input type="text" value={this.state.usuario} onChange={this.changeuser}className="input100" placeholder="Nombre de usuario..." />
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Nombres</span>
                        <input type="text"value={this.state.nombres} onChange={this.changename} className="input100" placeholder="Nombre..." />
                        <span className="focus-input100" />
                    </div>
                    </span>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Apellidos</span>
                        <input type="text" value={this.state.apellidos} onChange={this.changelast}className="input100"placeholder="Apellidos..." />
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Correo</span>
                        <input type="email" value={this.state.correo} onChange={this.changeemail}className="input100" placeholder="Email..." />
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">DNI</span>
                        <input  type="number" value={this.state.dni} onChange={this.changeDNI}className="input100" placeholder="DNI..." />
                        <span className="focus-input100" />
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Campo obligatorio">
                        <span className="label-input100">Contraseña</span>
                        <input type="password" value={this.state.contraseña} onChange={this.changepass}className="input100" placeholder="*************" />
                        <span className="focus-input100" />
                    </div>
                    
                    <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn" />
                            <button className="login100-form-btn" onClick={this.handleSubmit}>
                                Registrar
                            </button>
                        </div>
                        <a href="/Login" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
                        Ingresar
                        <i className="fa fa-long-arrow-right m-l-5" />
                        </a>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Registro;