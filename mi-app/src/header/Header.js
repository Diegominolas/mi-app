import React from "react";
import Logo from "../img/ies1.png";

class Header extends React.Component{
    render(){
        return(
            <div id="header" className="bg-dark text-center text-white p-3">
                <img src={Logo} alt="Logo Ies Número 1 de Gijón" width="100px" />
                <h3>Bienvenido a mi página de contactos</h3>
            </div>
        );
    }
}
export default Header;