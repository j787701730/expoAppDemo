import React from 'react';
// import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarLabel from '../components/TabBarLabel';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import UserInfo from '../screens/User/UserInfo';
import AdminScreen from '../screens/AdminScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused} title="首页" />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      // name={
      //   Platform.OS === 'ios'
      //     ? `ios-information-circle${focused ? '' : '-outline'}`
      //     : 'md-information-circle'
      // }
      name="home"
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused} title="个人中心" />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="user"
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused} title="商家管理" />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="isv"
    />
  ),
};

const AdminStack = createStackNavigator({
  Admin: AdminScreen,
});

AdminStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarLabel focused={focused} title="后台管理" />
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="API"
    />
  ),
};
// import LinksScreen from '../screens/LinksScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const UserInfoStack = createStackNavigator({
  UserInfo,
});

const BottomTabNav = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  AdminStack,
}, {
  activeTintColor: '#e91e63',
  labelStyle: {
    fontSize: 20,
  },
  style: {
    backgroundColor: 'blue',
  },
});

export { BottomTabNav, UserInfoStack };
