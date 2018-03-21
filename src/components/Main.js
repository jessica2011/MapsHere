import React, { Component } from 'react';

class Places extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
    };
    this.platform = new window.H.service.Platform({
      'app_id': 'OGYLftP8d2ca44VEO7PF',
      'app_code': 'xil_Gm8hAdrTOIHhwDc2rg'
    });
    // Obtain the default map types from the platform object:
    this.defaultLayers = this.platform.createDefaultLayers();
  }

  // componentDidMount() {
  //   fetch('https://places.cit.api.here.com/places/v1/autosuggest?at=40.74917,-73.98529&q=chrysler&app_id=OGYLftP8d2ca44VEO7PF&app_code=xil_Gm8hAdrTOIHhwDc2rg')
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     this.setState({ data });
  //   })
  //   .catch(function(error) {
  //     console.log('se ha presentado un error');
  //   })
  // }

  render() {
    const { data } = this.state;
    return(
      <div>
        <h1>Hello</h1>
        <p>We are consoling the results</p>
        <div style={{ width: '300px', height: '400px' }} ref={(node) => {
          if (node instanceof HTMLElement) {
            const map = new window.H.Map(
              node,
              this.defaultLayers.normal.map,
              {
                zoom: 10,
                center: { lat: 52.5, lng: 13.4 }
              }
            );
          } 
        }}></div>
        {data && data.results && data.results.map((item, idx) => (
          <div key={idx}>{item.title}</div>
        ))}
      </div>
    )
  }
}

export default Places;