import React from 'react';
import styled from 'react-emotion';

import LazyImage from './../LazyImage/LazyImage';

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
