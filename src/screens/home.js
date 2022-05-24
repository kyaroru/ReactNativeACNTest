import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Colors} from 'themes';
import {Label, NavBar} from 'components';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {alertWithTitle} from 'utils/alert';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <NavBar
          title="Home"
          titleColor="white"
          iconLeft="qr-code-scanner"
          iconColor={Colors.white}
          iconRight="account-balance-wallet"
          onLeftIconPress={() => alertWithTitle('Scan QR!')}
          onRightIconPress={() => alertWithTitle('Wallet!')}
        />
        <ScrollView style={styles.content}>
          <Label
            size="xxl"
            variant="bold"
            color="white"
            text="Landing Page"
            align="center"
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.accent,
  },
});

Home.defaultProps = {};

const mapStateToProps = store => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
