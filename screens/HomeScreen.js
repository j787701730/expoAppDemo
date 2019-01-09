import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  // Text,
  View,
} from 'react-native';
import {
  Container,
  Button,
  Text,
  Drawer,
  Content,
  List,
  ListItem
} from 'native-base';
import { Constants } from 'expo';

// import { MonoText } from '../components/StyledText';
import HeaderNav from '../components/Header/Header';
import FooterNav from '../components/Footer/Footer';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  openDrawer = () => {
    this.drawer._root.open();
  };
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openfooterNav = () => {
    this.props.navigation.navigate('UserInfo');
  };

  render() {
    return (

      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={
          <Container style={{ paddingTop: Constants.statusBarHeight }}>
            <Content>
              <List>
                <ListItem itemHeader first>
                  <Text>COMEDY</Text>
                </ListItem>
                <ListItem>
                  <Text>Hangover</Text>
                </ListItem>
                <ListItem last>
                  <Text>Cop Out</Text>
                </ListItem>
                <ListItem itemHeader>
                  <Text>ACTION</Text>
                </ListItem>
                <ListItem>
                  <Text>Terminator Genesis</Text>
                </ListItem>
              </List>
            </Content>
          </Container>
        }
        onClose={this.closeDrawer}
      >
        <Container style={{ paddingTop: Constants.statusBarHeight }}>
          <HeaderNav/>
          <Content>
            <Button onPress={this.openDrawer}>
              <Text>Button</Text>
            </Button>
            <Button onPress={this.openfooterNav}>
              <Text>go UserInfo</Text>
            </Button>
          </Content>
          {/*<FooterNav/>*/}
        </Container>
      </Drawer>
    );
  }
}
