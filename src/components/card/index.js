import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {normalize} from 'utils/size';

const Card = props => {
  const {style, roundedCorner, children} = props;
  return <View style={[{borderRadius: roundedCorner}, style]}>{children}</View>;
};

Card.propTypes = {
  style: PropTypes.any,
  roundedCorner: PropTypes.number,
  children: PropTypes.node,
};

Card.defaultProps = {
  style: null,
  roundedCorner: normalize(15),
  children: null,
};

export default Card;
