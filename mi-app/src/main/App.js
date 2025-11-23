import MiLista from '../components/MiLista';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import React, { useState } from 'react';
import Form from '../components/Form';
import Fondo from "../img/instituto.png";

function App() {
    const [incidencias, setIncidencias] = useState(
        [
            {
                id_incidencia: 1,
                id_usuario: 'e4165763121h',
                titulo: 'Proyector averiado en Aula 2',
                descripcion: 'El proyector no enciende y la lámpara parece dañada',
                categoria: 'Hardware',
                nivel_urgencia: 'Alta',
                fecha_registro: '2025-10-14',
                estado: 'Abierta',
                ubicacion: 'A302'
            },
            {
                id_incidencia: 2,
                id_usuario: 'e4165761421h',
                titulo: 'Ordenador de secretaría no enciende',
                descripcion: 'El equipo no responde al presionar el botón de encendido.',
                categoria: 'Hardware',
                nivel_urgencia: 'Media',
                fecha_registro: '2025-10-15',
                estado: 'En proceso',
                ubicacion: 'Secretaría'
            },
            {
                id_incidencia: 3,
                id_usuario: 'e4114763121h',
                titulo: 'Impresora sin conexión',
                descripcion: 'La impresora de la sala de profesores no aparece en red.',
                categoria: 'Red/Impresión',
                nivel_urgencia: 'Alta',
                fecha_registro: '2025-10-15',
                estado: 'Resuelta',
                ubicacion: 'Sala de profesores'
            },
            {
                id_incidencia: 4,
                id_usuario: 'e4114763126g',
                titulo: 'Wifi no disponible en el pabellón deportivo',
                descripcion: 'El punto Wifi del pabellón aparece en los dispositivos pero no permite conectarse',
                categoria: 'Software',
                nivel_urgencia: 'Bajo',
                fecha_registro: '2025-10-18',
                estado: 'Pendiente',
                ubicacion: 'Pabellón deportivo'
            },
            {
                id_incidencia: 5,
                id_usuario: 'e4224763126j',
                titulo: 'Pantalla táctil del aula de informática fallando',
                descripcion: 'En ocasiones la pantalla pierde la imagen',
                categoria: 'Hardware',
                nivel_urgencia: 'Medio',
                fecha_registro: '2025-10-18',
                estado: 'En proceso',
                ubicacion: 'A301'
            },
            {
                id_incidencia: 6,
                id_usuario: 'e4142763126g',
                titulo: 'Ratón y teclado dañados en aula TIC-1',
                descripcion: 'Ambos elementos están dañados por el mal uso y al teclado le faltan varias teclas.',
                categoria: 'Hardware',
                nivel_urgencia: 'Alto',
                fecha_registro: '2025-10-19',
                estado: 'Resuelto',
                ubicacion: 'TIC-1'
            },
            {
                id_incidencia: 7,
                id_usuario: 'e4114763626g',
                titulo: 'Altavoces del aula de música no funcionan',
                descripcion: 'Al tratar de poner los videos de clase los altavoces no emiten sonido',
                categoria: 'Hardware',
                nivel_urgencia: 'Alto',
                fecha_registro: '2025-10-20',
                estado: 'Pendiente',
                ubicacion: 'A205'
            },
            {
                id_incidencia: 8,
                id_usuario: 'e4114213126p',
                titulo: 'Servidor interno se reinicia solo',
                descripcion: 'A las 16:21h de hoy el servidor se reinicia solo',
                categoria: 'Software',
                nivel_urgencia: 'Alto',
                fecha_registro: '2025-10-21',
                estado: 'resuelto',
                ubicacion: 'Sala de servidor'
            },
            {
                id_incidencia: 9,
                id_usuario: 'e4114153126e',
                titulo: 'Cable HDMI roto en aula de audiovisuales',
                descripcion: 'Cable partido en el punto de conexión.',
                categoria: 'Hardware',
                nivel_urgencia: 'Media',
                fecha_registro: '2025-10-22',
                estado: 'Pendiente',
                ubicacion: 'Sala de audiovisuales'
            },
            {
                id_incidencia: 10,
                id_usuario: 'e4534763126l',
                titulo: 'Software educativo no abre en varios equipos',
                descripcion: 'Se requiere la actualización de varios dispositivos que no permiten el uso del software educativo.',
                categoria: 'Software',
                nivel_urgencia: 'Alto',
                fecha_registro: '2025-10-23',
                estado: 'En proceso',
                ubicacion: 'A201, A204, A301, A302, A304'
            }
        ]
    )

    const agregarIncidencia = (nuevo_usuario, nuevo_titulo, nueva_descripcion,
        nueva_categoria, nuevo_nivelUrgencia, nueva_ubicacion
    ) => {
        /**Creacion de la constante para pasar el formato de fecha */
        const fecha = new Date();
        const year = fecha.getFullYear();
        const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11
        const day = String(fecha.getDate()).padStart(2, '0');
        const fechaFormateada = `${year}-${month}-${day}`;
        /**Está instruccion no debería ser necesaria, puesto que la id se introduce de manera automática */
        const nuevo_id=incidencias.length + 1;
        const esDuplicado=incidencias.some(incidencia=>incidencia.id_incidencia===nuevo_id);
        if(esDuplicado){
            console.log("El id está duplicado, no se va a añadir la incidencia.");
        }

        const nueva_incidencia = {
            /**Introduccion automatica del numero de incidencia */
            id_incidencia: nuevo_id,
            id_usuario: nuevo_usuario,
            titulo: nuevo_titulo,
            descripcion: nueva_descripcion,
            categoria: nueva_categoria,
            nivel_urgencia: nuevo_nivelUrgencia,
            fecha_registro: fechaFormateada,
            estado: "Abierta",
            ubicacion: nueva_ubicacion
        }
        /**Metodo usado para modificar la propiedad de la clase */
        setIncidencias(
            [...incidencias, nueva_incidencia]
        );
        /**Visualización de datos pasados a traves del formulario por consola */
        console.log("Datos recibidos: ", nueva_incidencia);
    }

    return (
        <div id="App" className='card' style={
            {
                backgroundImage: `url(${Fondo})`,
                backgroundSize: "contain",
                backgroundRepeat: 'repeat',
                backgroundBlendMode: 'luminosity'
            }
        }>
            <Header />
            <h2 className='card-title mb-1 text-center bg-light'> Mi aplicación</h2>
            <div className="container-fluid mt-4 d-flex row g-5">
                <main className='col-md-8 bg-transparent'>
                    {/**Lista de incidencias */}
                    <h4 className='mb-4 text-center bg-light'> Esta aplicación muestra el contenido almacenado de mi App.</h4>
                    <MiLista incidencias={incidencias} />
                </main>
                <aside className='col-md-4 bg-transparent'>
                    <Form agregarIncidencia={agregarIncidencia} />
                </aside>
            </div>
            <Footer />
        </div>
    );
}

export default App;