import React, {Component} from 'react';
import Portada from '../assets/images/portada.jpg';
import DesiertoHuacachina from '../assets/images/desierto-huacachina.jpeg';
import Paracas from '../assets/images/paracas.jpeg';
import LagunaHuacachina from '../assets/images/laguna-huacachina.jpeg';
import Huaraz from '../assets/images/huaraz.jpeg';

import {Slider, Slide} from 'react-materialize'

class Section extends Component {
  render () {
    return (
      <div>
      <Slider>
      
      <Slide
        src={Portada}
        title="This is our big Tagline!">
        Here's our small slogan.
        
      </Slide>
      <Slide
      src={DesiertoHuacachina}
        title="Left aligned Caption"
        placement="left">
        Here's our small slogan.
      </Slide>
      <Slide
         src={Paracas}
        title="Right aligned Caption"
        placement="right">
        Here's our small slogan.
      </Slide>

      <Slide
         src={Huaraz}
        title="Right aligned Caption"
        placement="right">
        Here's our small slogan.
      </Slide>
      <Slide
         src={LagunaHuacachina}
        title="Right aligned Caption"
        placement="right">
        Here's our small slogan.
      </Slide>
      <button>hola</button>
    </Slider>
   
    </div>
    )
  }
}
 
export default Section