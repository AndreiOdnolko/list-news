import React, {Component} from 'react';

export default (OriginalComponent) => class WrapperComponent extends Component {
  state = {
    isOpen: false,
    openArticleId: null
  }

  render() {
    return <OriginalComponent 
      {...this.props} 
      {...this.state}
      toggleOpen = {this.toggleOpen} 
      />
  }

  toggleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen })
  }
}