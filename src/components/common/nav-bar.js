import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Label from '../text/label';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {normalize, getScreenWidth} from 'utils/size';

const NavBar = props => {
  const Icon = props.iconComponent || MaterialIcons;
  return (
    <View style={styles.navBar}>
      {props.iconLeft && (
        <TouchableOpacity
          style={styles.iconLeft}
          onPress={props.onLeftIconPress}>
          <Icon
            name={props.iconLeft || 'chevron-left'}
            size={props.iconSize || normalize(30)}
            color={props.iconLeftColor || props.iconColor}
          />
        </TouchableOpacity>
      )}
      {props.title && (
        <Label
          color="secondaryText"
          size={props.titleSize || 'xl'}
          text={props.title}
          variant={props.titleVariant || 'bold'}
          style={[
            styles.navTitle,
            props.titleColor && {color: props.titleColor},
          ]}
          onPress={props.onPress}
        />
      )}
      {props.iconRight && (
        <TouchableOpacity
          style={styles.iconRight}
          onPress={props.onRightIconPress}>
          <Icon
            name={props.iconRight || 'check'}
            size={props.iconSize || normalize(30)}
            color={props.iconRightColor || props.iconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: normalize(50),
    width: getScreenWidth(),
    paddingVertical: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalize(15),
  },
  iconLeft: {
    position: 'absolute',
    left: normalize(10),
  },
  iconRight: {
    position: 'absolute',
    right: normalize(10),
  },
  navTitle: {
    marginHorizontal: normalize(30),
  },
});

export default NavBar;
