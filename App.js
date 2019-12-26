/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
} from "native-base";

import PointsBadges from "./src/components/PointsBadges";


class App extends Component {

  render() {
    return (
      <Container>

        <PointsBadges/>

      </Container>
    );
  }

}

const styles = StyleSheet.create({
  
});

export default App;
