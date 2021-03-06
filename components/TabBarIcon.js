import React from 'react';
import { Icon } from 'native-base';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon
      type={props.type ? props.type : 'AntDesign'}
      name={props.name}
      size={26}
      style={{
        marginBottom: -3,
        color: props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
      }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
