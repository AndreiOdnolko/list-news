import React, { Component } from 'react';
import './App.css';
import { articles } from './fixtures';
import ArticleList from './Components/ArticleList';


class App extends Component {  
  render() {    
    return (
      <div className="App">
        <ArticleList articles = {articles} />
      </div>
    );
  }
}

export default App;
