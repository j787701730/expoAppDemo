import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { BottomTabNav, UserInfoStack, GoodsDescStack } from './MainTabNavigator';
// import UserTabNavigator from './UserTabNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: BottomTabNav,
  User: UserInfoStack,
  GoodsDesc: GoodsDescStack
}));
