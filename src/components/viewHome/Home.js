import React, {Component} from 'react';
import Portada from '../../assets/images/portada.jpg';
import DesiertoHuacachina from '../../assets/images/desierto-huacachina.jpeg';
import Paracas from '../../assets/images/paracas.jpeg';
import LagunaHuacachina from '../../assets/images/laguna-huacachina.jpeg';
import Huaraz from '../../assets/images/huaraz.jpeg';

import {Slider, Slide} from 'react-materialize'

class Home extends Component {
  render () {
    return (
      <div>
      <Slider>
      
      <Slide
        src={Portada}
        title="Más que un mapa">
      </Slide>
      <Slide
      src={DesiertoHuacachina}
        title="Encuentra los lugares que buscabas"
        placement="center">
      </Slide>
      <Slide
         src={Paracas}
        title="Right aligned Caption"
        placement="center">
      </Slide>
    </Slider>
   
    </div>
    )
  }
}
 
export default Home