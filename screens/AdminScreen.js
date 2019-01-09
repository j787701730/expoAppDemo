import React from 'react';
import { Text } from 'native-base';

export default class AdminScreen extends React.Component {
  static navigationOptions = {
    title: 'admin',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <Text>admin</Text>
    );
  }
}
