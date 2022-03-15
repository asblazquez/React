import React from 'react'
import { Link } from 'react-router-dom'

function MenuSidebar() {
  return (
    <div>
        <button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Menu</button>

        <div className="offcanvas offcanvas-start bg-dark" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title text-light" id="offcanvasScrollingLabel">Menu del Usuario</h5>
                <button type="button" className="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle col-12" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Acciones
                </a>
                <ul className="dropdown-menu col-12" aria-labelledby="dropdownMenuLink">
                  <li><Link className="dropdown-item text-dark" to='/'>Añadir dinero</Link></li>
                  <li><Link className="dropdown-item text-dark" to='/'>Retirar dinero</Link></li>
                  <li><Link className="dropdown-item text-dark" to='/'>Enviar dinero</Link></li>
                </ul>
              </div>
              <br/>
              <div>
                <button type="button" class="btn btn-secondary col-12">Modificar datos</button>
              </div>
              <br/>
              <div>
                <button type="button" class="btn btn-secondary col-12">Cerrar Sesion</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MenuSidebar
