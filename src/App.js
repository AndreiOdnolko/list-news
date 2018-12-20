import React, { Component } from 'react';
import './App.css';
import ArticleList from './Components/ArticleList';


class App extends Component {  
  render() {  
    const { articles } = this.props;  
    return (
      <div className="App">
        <ArticleList articles = {articles} />
      </div>
    );
  }
}

export default App;
