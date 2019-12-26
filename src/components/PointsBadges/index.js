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
  Footer,
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

import FooterBar from "../Footer";

import Points from "./Points";
import Badges from "./Badges";
import Rewards from "./Rewards";


class PointsBadges extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seg: 1
    };
  }

  render() {
    return (
      <Container>
        <Header hasSegment style={styles.w_bg}>
          <Left></Left>
          <Body>

              <Segment style={styles.w_bg}>
                <Button
                  first
                  active={this.state.seg === 1 ? true : false}
                  onPress={() => this.setState({ seg: 1 })}
                  style={{
                    backgroundColor: this.state.seg === 1 ? "orange" : undefined,
                    borderColor:'orange',
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}
                >
                  <Text style={{color: this.state.seg === 1 ? "white" : "orange"}}>Points</Text>
                </Button>
                <Button
                  active={this.state.seg === 2 ? true : false}
                  onPress={() => this.setState({ seg: 2 })}
                  style={{
                    borderColor:'orange',
                    backgroundColor: this.state.seg === 2 ? "orange" : undefined,
                  }}
                >
                  <Text style={{color: this.state.seg === 2 ? "white" : "orange"}}>Badges</Text>
                </Button>
                <Button
                  last
                  active={this.state.seg === 3 ? true : false}
                  onPress={() => this.setState({ seg: 3 })}
                  style={{
                    borderColor:'orange',
                    backgroundColor: this.state.seg === 3 ? "orange" : undefined,
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15
                  }}
                >
                  <Text style={{color: this.state.seg === 3 ? "white" : "orange"}}>Rewards</Text>
                </Button>
            </Segment>

          </Body>
          <Right></Right>
        </Header>
        

        <Content padder>
          {this.state.seg === 1 && <Points/>}
          {this.state.seg === 2 && <Badges/>}
          {this.state.seg === 3 && <Rewards/>}
        </Content>

        <Footer style={{height:80}}>
            <FooterBar/>  
        </Footer>

      </Container>
    );
  }

}


const styles = StyleSheet.create({
  w_bg:{
    backgroundColor: 'white',
  },
});

export default PointsBadges;
