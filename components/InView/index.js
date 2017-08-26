function throttle(callback, limit) {
  var wait = false;
  return () => {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(function() {
        wait = false;
      }, limit);
    }
  };
}

const offset = {
  top: 0.1,
  bottom: 0.5,
};

class InView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInView: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.inView);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.inView);
  }

  inView = throttle(() => {
    const windowHeight = document.documentElement.clientHeight;
    const topBoundry = windowHeight * offset.top;
    const bottomBoundry = windowHeight * offset.bottom;
    const elementTop =
      this.element.getBoundingClientRect().top -
      (window.pageYOffset || document.documentElement.scrollTop);

    const isInView = elementTop > topBoundry && elementTop < bottomBoundry;

    this.setState({
      isInView,
    });
  }, 150);

  render() {
    return (
      <div ref={elem => (this.element = elem)}>
        {this.props.children(this.state)}
      </div>
    );
  }
}

export default InView;
