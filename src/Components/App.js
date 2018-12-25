import React, { Component } from 'react';
import '../App.css';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import DayPickerFrom from './DayPicker';
import Counter from './Counter';

class App extends Component {
  render() {      
    return (
      <div className="App">
        <Counter />
        <DayPickerFrom />
        <UserForm />
        <ArticleList />
      </div>
    );
  }
}

export default App;
