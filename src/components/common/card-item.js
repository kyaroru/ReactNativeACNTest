import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {normalize, getScreenWidth} from 'utils/size';
import Card from '../card';
import Label from '../text/label';
import FastImage from 'react-native-fast-image';
import {Colors} from 'themes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Space from './space';

const imageWidth = (getScreenWidth() - normalize(32) - normalize(15)) / 2;

const CardItem = props => {
  const {
    item: {image, title, price, discount, freeShipping, rating, reviews, sold},
    index,
  } = props;
  return (
    <Card
      roundedCorner={normalize(15)}
      style={{
        backgroundColor: Colors.white,
        marginRight: index % 2 === 0 ? normalize(15) : 0,
        marginBottom: normalize(15),
        overflow: 'hidden',
      }}>
      <FastImage
        source={{uri: image}}
        style={{width: '100%', height: imageWidth}}
      />
      <View
        style={{
          paddingHorizontal: normalize(10),
          marginVertical: normalize(10),
        }}>
        <Label text={title} numberOfLines={2} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Label text={price} numberOfLines={2} color="accent" variant="bold" />
          <View
            style={{
              backgroundColor: Colors.discountTag,
              marginLeft: normalize(5),
            }}>
            <Label
              text={discount}
              numberOfLines={2}
              color="accent"
              variant="bold"
              size="xs"
            />
          </View>
        </View>
        {freeShipping && (
          <View>
            <MaterialIcons
              size={normalize(20)}
              name="local-shipping"
              color={Colors.icon16}
            />
          </View>
        )}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons
            size={normalize(15)}
            name="star"
            color={Colors.icon6}
          />
          <Label size="s" text={rating} />
          <Space horizontal={normalize(3)} />
          <Label size="s" text={`(${reviews})`} color="secondaryText" />
          <Space horizontal={normalize(3)} />
          <Label size="xs" text={'•'} color="secondaryText" />
          <Space horizontal={normalize(3)} />

          <Label size="s" text={sold} color="secondaryText" />
        </View>
      </View>
    </Card>
  );
};

CardItem.propTypes = {
  style: PropTypes.any,
  roundedCorner: PropTypes.number,
  children: PropTypes.node,
};

CardItem.defaultProps = {
  style: null,
  roundedCorner: normalize(15),
  children: null,
};

export default CardItem;
