import React, {useState} from "react";

function MiLista(){
    const [incidencias] = useState([
        {
            id_incidencia: 1,
            id_usuario: 'e4165763121h',
            titulo: 'Proyector averiado en Aula 2',
            descripción: 'El proyector no enciende y la lámpara parece dañada',
            categoria: 'Hardware',
            nivel_urgencia: 'Alta',
            fecha_registro: '2025-10-14',
            estado: 'Abierta',
            ubicación: 'A302'
        },
        {
            id_incidencia: 2,
            id_usuario: 'e4165761421h',
            titulo: 'Ordenador de secretaría no enciende',
            descripción: 'El equipo no responde al presionar el botón de encendido.',
            categoria: 'Hardware',
            nivel_urgencia: 'Media',
            fecha_registro: '2025-10-15',
            estado: 'En proceso',
            ubicación: 'Secretaría'
        },
        {
            id_incidencia: 3,
            id_usuario: 'e4114763121h',
            titulo: 'Impresora sin conexión',
            descripción: 'La impresora de la sala de profesores no aparece en red.',
            categoria: 'Red/Impresión',
            nivel_urgencia: 'Alta',
            fecha_registro: '2025-10-15',
            estado: 'Resuelta',
            ubicación: 'Sala de profesores'
        },
        {
            id_incidencia: 4,
            id_usuario: 'e4114763126g',
            titulo: 'Wifi no disponible en el pabellón deportivo',
            descripción: 'El punto Wifi del pabellón aparece en los dispositivos pero no permite conectarse',
            categoria: 'Software',
            nivel_urgencia: 'Bajo',
            fecha_registro: '2025-10-18',
            estado: 'Pendiente',
            ubicación: 'Pabellón deportivo'
        },
        {
            id_incidencia: 5,
            id_usuario: 'e4224763126j',
            titulo: 'Pantalla táctil del aula de informática fallando',
            descripción: 'En ocasiones la pantalla pierde la imagen',
            categoria: 'Hardware',
            nivel_urgencia: 'Medio',
            fecha_registro: '2025-10-18',
            estado: 'En proceso',
            ubicación: 'A301'
        },
        {
            id_incidencia: 6,
            id_usuario: 'e4142763126g',
            titulo: 'Ratón y teclado dañados en aula TIC-1',
            descripción: 'Ambos elementos están dañados por el mal uso y al teclado le faltan varias teclas.',
            categoria: 'Hardware',
            nivel_urgencia: 'Alto',
            fecha_registro: '2025-10-19',
            estado: 'Resuelto',
            ubicación: 'TIC-1'
        },
        {
            id_incidencia: 7,
            id_usuario: 'e4114763626g',
            titulo: 'Altavoces del aula de música no funcionan',
            descripción: 'Al tratar de poner los videos de clase los altavoces no emiten sonido',
            categoria: 'Hardware',
            nivel_urgencia: 'Alto',
            fecha_registro: '2025-10-20',
            estado: 'Pendiente',
            ubicación: 'A205'
        },
        {
            id_incidencia: 8,
            id_usuario: 'e4114213126p',
            titulo: 'Servidor interno se reinicia solo',
            descripción: 'A las 16:21h de hoy el servidor se reinicia solo',
            categoria: 'Software',
            nivel_urgencia: 'Alto',
            fecha_registro: '2025-10-21',
            estado: 'resuelto',
            ubicación: 'Sala de servidor'
        },
        {
            id_incidencia: 9,
            id_usuario: 'e4114153126e',
            titulo: 'Cable HDMI roto en aula de audiovisuales',
            descripción: 'Cable partido en el punto de conexión.',
            categoria: 'Hardware',
            nivel_urgencia: 'Media',
            fecha_registro: '2025-10-22',
            estado: 'Pendiente',
            ubicación: 'Sala de audiovisuales'
        },
        {
            id_incidencia: 10,
            id_usuario: 'e4534763126l',
            titulo: 'Software educativo no abre en varios equipos',
            descripción: 'Se requiere la actualización de varios dispositivos que no permiten el uso del software educativo.',
            categoria: 'Software',
            nivel_urgencia: 'Alto',
            fecha_registro: '2025-10-23',
            estado: 'En proceso',
            ubicación: 'A201, A204, A301, A302, A304'
        }
    ]
);
    
    //Generamos una condicion para poder identificar el estado del state
    return(
            <div>
                <ul>
                    {incidencias.map((i)=>(
                        //Introducimos el atributo key para comprobar que los elementos de la lista no están repetidos
                        <li key={i.id_incidencia}>
                            <strong>Título:</strong>{i.titulo}<br/> 
                            <strong>Descripción:</strong> {i.descripción}<br/>
                            <strong>Usuario:</strong> {i.id_usuario}<br/> 
                            <strong>Ubicación:</strong> {i.ubicación}<br/><br/></li>
                    ))}    
                </ul>
            </div>
        );

    }
export default MiLista;