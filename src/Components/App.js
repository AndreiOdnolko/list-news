import React, { Component } from 'react';
import '../App.css';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';

class App extends Component {
  render() {      
    return (
      <div className="App">
        <Counter />
        <Filters />
        <UserForm />
        <ArticleList />
      </div>
    );
  }
}

export default App;
