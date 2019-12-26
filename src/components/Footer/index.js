import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, StyleProvider } from 'native-base';

class FooterBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
    
      <FooterTab>
          <Button vertical active style={styles.h80}>
              <Icon name="home" />
              <Text style={[styles.textCenter, styles.h35, styles.lh12, styles.pt10]}>Home</Text>
          </Button>
          <Button vertical style={styles.h80}>
              <Icon name="camera" />
              <Text style={[styles.textCenter, styles.h35, styles.lh12, styles.pt10]}>Points & Badges</Text>
          </Button>
          <Button vertical style={styles.h80}>
              <Icon active name="navigate" />
              <Text style={[styles.textCenter, styles.h35, styles.lh12, styles.pt10]}>My profile</Text>
          </Button>
          <Button vertical style={styles.h80}>
              <Icon name="person" />
              <Text style={[styles.textCenter, styles.h35, styles.lh12, styles.pt10]}>My Team</Text>
          </Button>
          <Button vertical style={styles.h80}>
              <Icon name="person" />
              <Text style={[styles.textCenter, styles.h35, styles.lh12, styles.pt10]}>More</Text>
          </Button>
      </FooterTab>
    
    );
  }

}


const styles = StyleSheet.create({
  textCenter:{
      textAlign: "center",
  },
  pt10:{
    paddingTop: 10
  },
  h35:{
      height: 35,
  },
  h80:{
    height: 80
  },
  lh12:{
    lineHeight: 12
  },
});

export default FooterBar;
