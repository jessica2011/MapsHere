import React, { Component } from 'react';
import '../css/Search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      searchWord: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  search() {
    fetch(`https://places.cit.api.here.com/places/v1/autosuggest?at=-12.0463731,-77.042754&q=${this.state.searchWord}&app_id=OGYLftP8d2ca44VEO7PF&app_code=xil_Gm8hAdrTOIHhwDc2rg`)
    .then(function(response) {
      return response.json();
      console.log(response)
    })
    .then((data) => {
      this.setState({ data });
      console.log(data)
    })
    .catch(function(error) {
      console.log('something went wrong');
    })
  }

onSubmit(e) {
  e.preventDefault();
  this.search();
}

onInputChange(e) {
  this.setState({ searchWord: e.target.value })
}

render() {
  const { data } = this.state;

  return(
    <div>
      <form onSubmit={this.onSubmit} className="margin-top-0">
        <input onChange={this.onInputChange} />
      </form>
      <div>
        {data && data.results && data.results.map((item, idx) => (
          <div key={idx} className="caard">
            <div>
              <h5>{item.title}</h5>
              <img className="icon" src="https://image.ibb.co/fO8VNx/placeholder.png" alt={item.title} />
              <span>{item.highlightedVicinity}</span>           
            </div>
          </div>
        )).reverse()}
      </div>
    </div>
  )
 }
}

export default Search;