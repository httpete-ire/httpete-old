import React from 'react';

class PageViewTracking extends React.Component {
  componentDidMount() {
    // window.gtag('config', 'UA-125400257-1', {
    //   page_location: window.location.pathname,
    // });
  }

  render() {
    return this.props.children;
  }
}

export default PageViewTracking;
