import React from 'react';

class LazyImage extends React.Component {
  state = {
    loaded: false,
  };

  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.imageObserver = null;
  }

  componentDidMount() {
    this.setUpLazyLoading();
  }

  setUpLazyLoading = () => {
    if ('IntersectionObserver' in window) {
      this.imageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImage();
            this.imageObserver.unobserve(this.imgRef.current);
          }
        });
      });

      this.imageObserver.observe(this.imgRef.current);
    } else {
      this.loadImage();
    }
  };

  componentWillUnmount() {
    if (this.imageObserver) this.imageObserver.unobserve(this.imgRef.current);
  }

  loadImage = () => {
    const img = new Image();
    img.src = this.props.src;

    img.onload = () => {
      this.setState({
        loaded: true,
      });
    };
  };

  render() {
    const { src, svg, children } = this.props;
    const { loaded } = this.state;

    return <div ref={this.imgRef}>{children(!svg || loaded ? src : svg)}</div>;
  }
}

export default LazyImage;
