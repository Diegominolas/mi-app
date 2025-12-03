import React from "react";

function MiLista(props) {
    //Generamos una condicion para poder identificar el estado del state
    return (
            <table className="card p-4 table table-striped table-secondary table-hover align-middle shadow-sm">
                <thead>
                    <tr>
                        <th className="text-center w-auto">Título</th>
                        <th className="text-center">Número incidencia</th>
                        <th className="text-center">Usuario</th>
                        <th className="text-center">Descripción</th>
                        <th className="text-center">Categoría</th>
                        <th className="text-center">Nivel de urgencia</th>
                        <th className="text-center">Fecha de notificación</th>
                        <th className="text-center">Estado</th>
                        <th className="text-center">Ubicación</th>
                    </tr>
                </thead>
                <tbody>
                    {props.incidencias.map((i) => (
                        //Introducimos el atributo key para comprobar que los elementos de la lista no están repetidos
                        <tr key={i.id_incidencia}>
                            {/**Cada propiedad es una fila td */}
                            <td className="text-center">{i.titulo}</td>
                            <td className="text-center">{i.id}</td>
                            <td className="text-center">{i.usuario.email}</td>
                            <td className="text-center">{i.descripcion}</td>
                            <td className="text-center">{i.categoria}</td>
                            <td className="text-center">{i.nivel_urgencia}</td>
                            <td className="text-center">{i.fecha_registro}</td>
                            <td className="text-center">{i.estado}</td>
                            <td className="text-center">{i.ubicacion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );

}
export default MiLista;
