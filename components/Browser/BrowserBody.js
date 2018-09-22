import React from 'react';
import styled from 'react-emotion';

const styles = {
  overflow: 'hidden',
  borderRadius: '0 0 5px 5px',
  border: '2px solid #cccccc',
  borderTop: 'none',
  fontSize: 0,
};

const BrowserHeader = styled('div')(styles);

export default ({ image, alt, svg }) => (
  <BrowserHeader>
    <LazyImage src={image} svg={svg}>
      {image => <img src={image} alt={alt} />}
    </LazyImage>
  </BrowserHeader>
);

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
