import React, { Component } from 'react';
import '../App.css';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Select from 'react-select';

class App extends Component {

  state = {
    selection: null
  }
  
 
  render() {  
    const { articles } = this.props;  
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }))
    return (
      <div className="App">
        <UserForm />
        <Select options = {options} value = { this.state.selection } onChange = { this.changeSelection } isMulti />
        <ArticleList articles = {articles} />
      </div>
    );
  }

  changeSelection = selection => this.setState({ selection })
}

export default App;
