import React, { Component } from 'react';

class AddComentFrom extends Component {
  state = {
    userName: '',
    text: ''
  }

  render() {  
    const { userName, text } = this.state;
    console.log(userName, text);
    return (
      <div>
        Name: <input type='text' className={this.toRedBorder(userName)(5, 15)} value = {userName} onChange = {this.handleChange('userName')} />
        Text: <input type='text' className={this.toRedBorder(text)(20, 50)} value = {text} onChange = {this.handleChange('text')}/>
        <input type='text' value = 'submit' />
      </div>
    );
  }

  toRedBorder = type => (start, finish) => {
    if( start > type.length || [type].length > finish) return "red";
  }

  handleChange = type => ev => {
    const { value } = ev.target;
    this.setState({
      [type]: value
    })    
  }  
}

export default AddComentFrom;
