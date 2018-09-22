import React from 'react';

class LazyImage extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    const img = new Image();
    img.src = this.props.src;

    img.onload = () => {
      this.setState({
        loaded: true,
      });
    };
  }

  render() {
    const { src, svg, children } = this.props;
    const { loaded } = this.state;

    return children(!svg || loaded ? src : svg);
  }
}

export default LazyImage;
