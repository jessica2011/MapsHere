import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
   render() {
     return (
     
        <nav style={{padding:'0px 50px'}}>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><Link to='/'>Inicio</Link></li>
              <li><Link to='/search'><i className="material-icons left">directions_bike</i>Rutas del mundo</Link></li>
              <li><a href="sass.html"><i className="material-icons left">add</i>subir rtass</a></li>
              <li><a href="sass.html"><i className="material-icons left">search</i>buscar</a></li>
              {/* <li><a href="badges.html"><i class="material-icons right">view_module</i>Link with Right Icon</a></li> */}
            </ul>
          </div>
        </nav>

       )
   }
}

export default Header