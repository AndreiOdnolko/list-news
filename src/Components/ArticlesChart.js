import React, { Component } from 'react';

class ArticlesChart extends Component {  
  
  render() {  
    return (
      <div ref ='chart'/>
    );
  }
  componentDidMount() {
    //d3 works with this.refs.chart
  }
  componentWillReceiveProps(nextProps) {
    //update chart for new articles
  }

  componentWillUnmount() {
    //do come cleanup
  }
}

export default ArticlesChart;
