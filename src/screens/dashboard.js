import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Colors} from 'themes';
import {Label} from 'components';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

class Dashboard extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <Label
          size="xxl"
          variant="bold"
          color="white"
          text="Dashboard"
          align="center"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
});

Dashboard.defaultProps = {};

const mapStateToProps = store => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
