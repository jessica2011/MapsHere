import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './css/header.css'

class Header extends Component {
   render() {
     return (
     
        <nav style={{padding:'0px 50px'}} className="amber lighten-1 nav">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">HereMaps</a>
            <ul className="right hide-on-med-and-down">
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/search'><i className="material-icons left">location_on</i>Lugares</Link></li>
              <li><a href="sass.html"><i className="material-icons left">add</i>Subir Rutas</a></li>
            </ul>
          </div>
        </nav>

       )
   }
}

export default Header