import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Segment
} from "native-base";


class Rewards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Container>
      
        <Content padder>
          <Text>Rewards Selected</Text>
        </Content>

      </Container>
    );
  }

}


const styles = StyleSheet.create({
  
});

export default Rewards;
