import React from "react";

class MiLista extends React.Component{
    render(){
        return(
            <>
                <h4>Mi lista de {this.props.titulo}</h4>
                <ul>
                    <li>{this.props.nombre1}</li>
                    <li>{this.props.nombre2}</li>
                    <li>{this.props.nombre3}</li>
                </ul>
            </>
        );
    }
}
export default MiLista;