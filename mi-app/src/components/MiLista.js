import React from "react";

function MiLista(props){  
    //Generamos una condicion para poder identificar el estado del state
    return(
            <div>
                <dl>
                    {props.incidencias.map((i)=>(
                        //Introducimos el atributo key para comprobar que los elementos de la lista no están repetidos
                        <React.Fragment key={i.id_incidencia}>
                            <dt><strong>Título:</strong>{i.titulo}</dt>
                            <dd><strong>Número incidencia:</strong>{i.id_incidencia}</dd>
                            <dd><strong>Usuario:</strong> {i.id_usuario}</dd>
                            <dd><strong>Descripción:</strong> {i.descripcion}</dd>
                            <dd><strong>Categoría:</strong> {i.categoria}</dd>
                            <dd><strong>Nivel de urgencia:</strong> {i.nivel_urgencia}</dd>
                            <dd><strong>Fecha de notificación:</strong> {i.fecha_registro}</dd>
                            <dd><strong>Estado:</strong> {i.estado}</dd>
                            <dd><strong>Ubicación:</strong> {i.ubicacion}</dd>
                            <br/>
                        </React.Fragment>
                    ))}    
                </dl>
            </div>
        );

    }
export default MiLista;
