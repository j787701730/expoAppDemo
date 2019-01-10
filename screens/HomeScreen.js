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
  // Drawer,
  Content,
  List,
  ListItem
} from 'native-base';
import Drawer from 'react-native-drawer';
import Swiper from 'react-native-swiper';
import { ajax } from '../utils/utils';
import { Constants } from 'expo';

// import { MonoText } from '../components/StyledText';
import HeaderNav from '../components/Header/Header';
import FooterNav from '../components/Footer/Footer';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  componentDidMount() {
    ajax('/index/slider', '', false, (data) => {
      console.log(data);
    });
  }

  openDrawer = () => {
    this.drawer.open();
  };
  closeDrawer = () => {
    this.drawer.close();
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
          <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <Content>
              <List>
                <ListItem itemHeader first>
                  <Text>COMEDY1</Text>
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
        type={'overlay'}
        tapToClose={true}
        openDrawerOffset={0.3} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        panOpenMask={0.2}
        closedDrawerOffset={-3}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
        <Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
          <HeaderNav/>
          <Content>
            <Button onPress={this.openDrawer}>
              <Text>Button11</Text>
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
