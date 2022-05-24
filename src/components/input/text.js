import {TextInput as RNTextInput, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Colors} from 'themes';
import Label from '../text/label';
import {normalize} from 'utils/size';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class TextInput extends Component {
  render() {
    const {
      containerStyle,
      inputContainerStyle,
      inputStyle,
      errorStyle,
      value,
      error,
      iconLeft,
      iconSize,
      iconLeftColor,
      iconColor,
      iconComponent,
      onChangeText,
      itemRight,
      ...otherProps
    } = this.props;
    const Icon = iconComponent || MaterialIcons;

    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.inputContainer, inputContainerStyle]}>
          {iconLeft && (
            <View style={styles.iconLeft}>
              <Icon
                name={iconLeft || 'search'}
                size={iconSize || normalize(25)}
                color={iconLeftColor || iconColor}
              />
            </View>
          )}
          <RNTextInput
            onChangeText={onChangeText}
            value={value}
            style={[styles.input, {color: Colors.primaryText}, inputStyle]}
            placeholderTextColor={Colors.inputPlaceholder}
            {...otherProps}
          />
          {itemRight && itemRight}
        </View>

        {error && (
          <Label
            size="s"
            color={'error'}
            align={'left'}
            style={[errorStyle]}
            text={error}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(16),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: normalize(15),
    paddingVertical: normalize(3),
    paddingHorizontal: normalize(5),
  },
  input: {
    flex: 1,
  },
  error: {
    paddingTop: normalize(5),
  },
});

TextInput.propTypes = {
  containerStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  errorStyle: PropTypes.any,
};

TextInput.defaultProps = {
  containerStyle: null,
  inputStyle: null,
  errorStyle: null,
};

export default TextInput;
