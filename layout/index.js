import React from 'react';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      });
    }, 1000);
  }

  render() {
    return (
      <div className={this.state.loaded ? 'loaded' : ''}>
        {this.props.children}
      </div>
    );
  }
}
