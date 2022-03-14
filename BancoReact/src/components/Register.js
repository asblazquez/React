import React from 'react'

function Register() {
  return (
    <div>
        <form>
            <div className="row">
                <div className="col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
            </div>
            <div className="form-group">
                <label for="inputAddress">Direccion</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="form-group">
                <label for="inputAddress2">Direccion 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label for="inputCity">Ciudad</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
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
                <div className="col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
            </div>
            <div className="group">
                <div className="check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label md" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    </div>
  )
}

export default Register