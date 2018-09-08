import glamorous from 'glamorous';

import ProjectTitle from './ProjectTitle';
import { mediaQueries } from './../../config';
import { DefaultButton } from './../Buttons/';

const styles = {
  flex: 1,
  padding: '0 20px',
  flex: '0 0 48%',
  alignSelf: 'center',
  [mediaQueries.small]: {
    padding: 0,
    order: 2,
  },
};

const styleProps = props => {
  const styles = [];

  if (props.push) {
    styles.push({
      marginLeft: '60px',
      [mediaQueries.medium]: {
        marginLeft: '0',
      },
    });
  } else {
    styles.push({
      marginRight: '40px',
      [mediaQueries.medium]: {
        marginRight: '0',
      },
    });
  }

  return styles;
};

const Desc = glamorous.div(styles, styleProps);

export default ({ title, mainDesc, push = false, showLink }) => (
  <Desc push={push}>
    <ProjectTitle>{title}</ProjectTitle>
    <p>{mainDesc}</p>
    {showLink && (
      <DefaultButton
        margin="25px 20px 20px 0"
        href={`/projects/${title.toLowerCase()}`}
      >
        Read more
      </DefaultButton>
    )}
  </Desc>
);
