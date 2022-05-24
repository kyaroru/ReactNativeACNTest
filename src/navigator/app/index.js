import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Cart, Dashboard, Splash} from 'screens';
import NavigationService from './navigation-service';
import {connect} from 'react-redux';
import Selectors from 'selectors';
import Icons from 'react-native-vector-icons/MaterialIcons';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

class AppNavigator extends Component {
  modals = () => (
    <RootStack.Group screenOptions={{presentation: 'transparentModal'}}>
      <RootStack.Screen name="Test" component={Home} />
    </RootStack.Group>
  );

  tabs = () => (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Dashboard') {
            iconName = 'account-circle';
          }

          return <Icons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );

  render() {
    return (
      <NavigationContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {this.props.isStoreRehydrated ? (
            <>
              <RootStack.Screen name="Tabs" component={this.tabs} />
              <RootStack.Screen name="Modals" component={this.modals} />
            </>
          ) : (
            <>
              <RootStack.Screen name="Splash" component={Splash} />
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = store => ({
  isStoreRehydrated: Selectors.isStoreRehydrated(store),
});

export default connect(mapStateToProps)(AppNavigator);
