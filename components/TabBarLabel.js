import React from 'react';
import { Text } from 'native-base';

import Colors from '../constants/Colors';

export default function TabBarLabel(props) {
  return (
    <Text
      style={{
        color: props.focused ? Colors.tabIconSelected : Colors.tabIconDefault,
        fontSize: 12,
        textAlign: 'center',
      }}
    >
      {props.title}
    </Text>
  );
}
