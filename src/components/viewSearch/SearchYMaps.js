import React from 'react';
import Search from './Search'
import Maps from './Maps'
import { Row, Col } from 'react-materialize'
import '../css/Search.css'

const SearchYMaps = () => (
  <div>
    <Row>
      <div className="sidenav2 col s6">
        <Search/>
      </div>
      <div className="col offset-s6 s6 ">
        <Maps/>
      </div>
    </Row>
  </div>
);

export default SearchYMaps;





