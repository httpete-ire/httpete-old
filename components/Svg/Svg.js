import glamorous from 'glamorous';

const styles = {
  flexBasis: 100;
};

const Svg = glamorous.div(styles);

export default ({
    markup,
}) => {
    <Svg>
    <div dangerouslySetInnerHTML={{ __html: markup }} />
    </Svg>
};
