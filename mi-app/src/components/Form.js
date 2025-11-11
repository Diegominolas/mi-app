import React from "react";
import './Form.css';

class Form extends React.Component{
    
    envioFormulario=(event)=>{
        event.preventDefault(); //evita recargar la pagina
        const form = event.target;

        this.props.setIncidencias(
            form.id_usuario.value,
            form.titulo.value,
            form.descripcion.value,
            form.tipoCategoria.value,
            form.nivelUrgencia.value,
            form.estadoIncidencia.value,
            form.ubicacion.value
        )
    };
    
    render(){
        return(
            <>
                <h2>Registrar incidencia</h2>
                <form onSubmit={this.envioFormulario}>
                    {/**Usuario */}
                    <div className="elemento-form">
                        <label>Id usuario </label>
                        <input type="text" name="id_usuario" placeholder="Nombre de usuario" required></input>
                        <br/><br/>
                    </div>
                    {/**Titulo incidencia */}
                    <div className="elemento-form">
                        <label>Titulo incidencia </label>
                        <input type="text" name="titulo" placeholder="Introduce el titulo de la incidencia" required></input>
                        <br/><br/>
                    </div>
                    {/**Descripción de incidencia */}
                    <div className="elemento-form">
                        <label>Descripción de la incidencia </label>
                        <textarea name="descripcion" placeholder="Describa la incidencia" required></textarea>
                        <br/><br/>
                    </div>
                    {/**Categoria */}
                    <div className="elemento-form">
                        <label>Categoria de la incidencia </label>
                        <select name="tipoCategoria" required>
                            <option value="">Seleccionar...</option>
                            <option value="hardware">Hardware</option>
                            <option value="software">Software</option>
                            <option value="conectividad">Conectividad</option>
                            <option value="usuarios">Usuarios</option>
                            <option value="infraestructura">Infraestructura</option>
                        </select>
                        <br/><br/>
                    </div>
                    {/**Nivel de urgencia */}
                    <div className="elemento-form">
                        <label>Nivel de urgencia </label>
                        <select name="nivelUrgencia" required>
                            <option value="">Seleccionar...</option>
                            <option>Alta</option>    
                            <option>Media</option>  
                            <option>Baja</option>  
                        </select>
                        <br/><br/>
                    </div>
                    {/**Estado de incidencia */}
                    <div className="elemento-form">
                        <label>Estado de la incidencia </label>
                        <select name="estadoIncidencia" required>
                            <option defaultChecked>Abierta: incidencia registrada, pendiente de revisión.</option>    
                            <option>En curso: alguien está trabajando en resolverla.</option>  
                            <option>Resuelta: solución aplicada, pendiente de verificación.</option>  
                            <option>Cerrada: validada y finalizada.</option> 
                        </select>
                        <br/><br/>
                    </div>
                    {/**Ubicacion incidencia */}
                    <div className="elemento-form">
                        <label>Ubicación de la incidencia </label>
                        <input name="ubicacion" placeholder="Lugar de la incidencia" required></input>
                        <br/><br/>
                    </div>
                        {/**Boton de registro */}
                        <button type="submit" className="element-form-button">Registrar</button>
                        <br/>
                </form>
            </>
        )
    }
    
}
export default Form;