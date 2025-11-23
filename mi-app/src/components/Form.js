import React from "react";
import "./Form.css";

function Form(props) {

    const envioFormulario = (event) => {
        event.preventDefault(); //evita recargar la pagina
        const form = event.target;

        props.agregarIncidencia(
            form.id_usuario.value,
            form.titulo.value,
            form.descripcion.value,
            form.tipoCategoria.value,
            form.nivelUrgencia.value,
            form.ubicacion.value
        )
    };

    return (
        <div className="card p-4 bg-light">
            <h3 className="card-title mb-4 text-center">Registrar incidencia</h3>
            <form onSubmit={envioFormulario}>
                {/**Usuario */}
                <div className="elemento-form">
                    <label className="mb-1 form-label">Id usuario </label>
                    <input className="mb-1 form-control" type="text" name="id_usuario" placeholder="Nombre de usuario" required></input>
                    <br />
                </div>
                {/**Titulo incidencia */}
                <div className="elemento-form">
                    <label className="mb-1 form-label">Titulo incidencia </label>
                    <input className="mb-1 form-control" type="text" name="titulo" placeholder="Introduce el titulo de la incidencia" required></input>
                    <br />
                </div>
                {/**Descripción de incidencia */}
                <div className="elemento-form">
                    <label className="mb-1 form-label">Descripción de la incidencia </label>
                    <textarea className="mb-1 form-control" name="descripcion" placeholder="Describa la incidencia" required></textarea>
                    <br />
                </div>
                {/**Categoria */}
                <div className="elemento-form">
                    <label className="mb-1 form-label">Categoria de la incidencia </label>
                    <select className="mb-1 form-control" name="tipoCategoria" required>
                        <option value="">Seleccionar...</option>
                        <option value="hardware">Hardware</option>
                        <option value="software">Software</option>
                        <option value="conectividad">Conectividad</option>
                        <option value="usuarios">Usuarios</option>
                        <option value="infraestructura">Infraestructura</option>
                    </select>
                    <br />
                </div>
                {/**Nivel de urgencia */}
                <div className="elemento-form">
                    <label className="mb-1 form-label">Nivel de urgencia </label>
                    <select className="mb-1 form-control" name="nivelUrgencia" required>
                        <option value="">Seleccionar...</option>
                        <option>Alta</option>
                        <option>Media</option>
                        <option>Baja</option>
                    </select>
                    <br />
                </div>
                {/**Ubicacion incidencia */}
                <div className="elemento-form">
                    <label className="mb-1 form-label">Ubicación de la incidencia </label>
                    <input className="mb-1 form-control" name="ubicacion" placeholder="Lugar de la incidencia" required></input>
                    <br />
                </div>
                {/**Boton de registro */}
                <button className="btn btn-azulOscuro mx-auto d-grid" type="submit">Registrar</button>
                <br />
            </form>
        </div>
    )
}

export default Form;