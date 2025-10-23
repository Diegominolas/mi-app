import React from "react";

class MiLista extends React.Component{
    incidencias= [ 
        {
            id_incidencia: 1,
            id_usuario: '',
            titulo: '',
            descripción: '',
            categoria: '',
            nivel_urgencia: '',
            fecha_registro: '',
            estado: '',
            ubicación: ''
        },
        {
            id_incidencia: 2,
            id_usuario: '',
            titulo: '',
            descripción: '',
            categoria: '',
            nivel_urgencia: '',
            fecha_registro: '',
            estado: '',
            ubicación: ''
        },
        {
            id_incidencia: 3,
            id_usuario: '',
            titulo: '',
            descripción: '',
            categoria: '',
            nivel_urgencia: '',
            fecha_registro: '',
            estado: '',
            ubicación: ''
        },
        {
            id_incidencia: 4,
            id_usuario: '',
            titulo: '',
            descripción: '',
            categoria: '',
            nivel_urgencia: '',
            fecha_registro: '',
            estado: '',
            ubicación: ''
        },
        {
            id_incidencia: 5,
            id_usuario: '',
            titulo: '',
            descripción: '',
            categoria: '',
            nivel_urgencia: '',
            fecha_registro: '',
            estado: '',
            ubicación: ''
        },
        {
            id_incidencia: 6,
            id_usuario: '',
            titulo: '',
            descripción: '',
            categoria: '',
            nivel_urgencia: '',
            fecha_registro: '',
            estado: '',
            ubicación: ''
        },
        {
            id_incidencia: 7,
            id_usuario: '',
            titulo: '',
            descripción: '',
            categoria: '',
            nivel_urgencia: '',
            fecha_registro: '',
            estado: '',
            ubicación: ''
        },
        {
            id_incidencia: 8,
            id_usuario: '',
            titulo: '',
            descripción: '',
            categoria: '',
            nivel_urgencia: '',
            fecha_registro: '',
            estado: '',
            ubicación: ''
        },
        {
            id_incidencia: 9,
            id_usuario: '',
            titulo: '',
            descripción: '',
            categoria: '',
            nivel_urgencia: '',
            fecha_registro: '',
            estado: '',
            ubicación: ''
        },
        {
            id_incidencia: 10,
            id_usuario: '',
            titulo: '',
            descripción: '',
            categoria: '',
            nivel_urgencia: '',
            fecha_registro: '',
            estado: '',
            ubicación: ''
        }
    ];
    
    //Funcion para la actualizacion y devolucion de datos en .jsx
    render(){
        //Generamos una condicion para poder identificar el estado del state
        return(
            <div>
                <ul>
                    {this.incidencias.map((i)=>(
                        //Introducimos el atributo key para comprobar que los elementos de la lista no están repetidos
                        <li key={i.id_incidencia}>
                            <strong>Título:</strong>{i.titulo}<br/>, 
                            <strong>Descripción:</strong> {i.descripción}<br/>, 
                            <strong>Usuario:</strong> {i.id_usuario}<br/>, 
                            <strong>Ubicación:</strong> {i.ubicación}<br/><br/></li>
                    ))}    
                </ul>
            </div>
        );

    }
}
export default MiLista;