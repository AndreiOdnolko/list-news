import React, { Component } from 'react';

import DataRange from './DayPicker';
import SelectFilter from './Select';

class Filter extends Component {  
  render () {
    return (
      <>
        <SelectFilter />
        <DataRange />
      </>
    )
  }
  
}



export default Filter;