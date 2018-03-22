import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import '../css/maps.css'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class Map extends Component {
  static defaultProps = {
    center: { lat: -12.145641, lng: -77.021830 },
    zoom: 17
  }
render() {
    return (
      <div className='google-map map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ -12.145641 } 
            lng={ -77.021830 }
            text={ 'Estás en LABORATORIA' }
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;