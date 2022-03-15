import React from 'react'

function Register() {
  return (
    <div>
        <form>
        <br/>
             <div className="row">
                <div className="col-4">
                    <label for="inputEmail4">Nombre</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Nombre"/>
                </div>
                <div className="col-5">
                    <label for="inputPassword4">Apellidos</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Apellido 1, Apellido 2"/>
                </div>   
                <div className="col-3">
                    <label for="inputEmail4">Fecha Nacimiento</label>
                    <input type="date" className="form-control" id="inputEmail4" placeholder="Nombre"/>
                </div>            
            </div>
            <br/>
            <br/>
            <div className="row">
                <div className="col-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="col-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
            </div>
            <br/>
            <br/>
            <div className="row">
                <div className="form-group col-8">
                    <label for="inputAddress">Direccion</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="form-group col-4">
                    <label for="inputAddress2">Teléfono</label>
                    <input type="tel" className="form-control" id="inputAddress2" placeholder="Número"/>
                </div>
            </div>
            <br/>
            <br/>
            <div className="row">
                
                <div className="col-4">
                    <label for="inputState">Comunidad</label>
                    <select id="inputState" className="form-control">
                        <option selected>Elige...</option>
                        <option>Andalucia</option>
                        <option>Aragon</option>
                        <option>Asturias</option>
                        <option>Islas Baleares</option>
                        <option>Canarias</option>
                        <option>Cantabria</option>
                        <option>Castilla y leon</option>
                        <option>Castilla la Mancha</option>
                        <option>Cataluña</option>
                        <option>Valencia</option>
                        <option>Extremadura</option>
                        <option>Galicia</option>
                        <option>Madrid</option>
                        <option>Murcia</option>
                        <option>Navarra</option>
                        <option>Pais Vasco</option>
                        <option>La Rioja</option>
                        <option>Ceuta</option>
                        <option>Melilla</option>
                    </select>
                </div>
                <div className="col-6">
                    <label for="inputCity">Ciudad</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Provincia"/>
                </div>
                <div className="col-md-2">
                    <label for="inputZip">Código Postal</label>
                    <input type="text" className="form-control" id="inputZip" placeholder="CP" />
                </div>
            </div>
            <br/>
            <div className="group">
                <div className="check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>                   
                        Acepto las condiciones en virtud de los dispuesto en el Art. 10 de la Ley 34/2002, 
                        de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), 
                        se informa que esta página web es titularidad de  GRUPO GREENTEC CB (E02589174), 
                        con domicilio en la Paseo de Ramón y Cajal , nº  3, 02630 La Roda (Albacete).                   
                </div>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Registrate</button>
            <br/>
            <br/>
        </form>
    </div>
  )
}

export default Register