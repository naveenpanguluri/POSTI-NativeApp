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
import AnimatedProgressWheel from 'react-native-progress-wheel';

class Points extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Container>
      
        <Content padder>

          <View style={styles.aiCenter}>
            <AnimatedProgressWheel
                size={150}
                width={15}
                progress={80}
                animateFromValue={0}
                duration={5000}
                color={'orange'}
                backgroundColor={'#eee'}
            />
          </View>

          <View style={styles.pv10}><Text style={[styles.fs20, styles.tCenter]}>70/100 points</Text></View>

          <View>
            <View style={styles.pv10}>
              <Text style={styles.oClr}>Today</Text>
            </View>
            <View style={[styles.main, styles.pb10]}>
              <View><Text style={styles.fs20}>95% mail delivered</Text></View>
              <View><Text style={[styles.oClr, styles.fs20]}>8pt</Text></View>
            </View>
            <View style={[styles.main, styles.pb10]}>
              <View><Text style={styles.fs20}>Mentor badge 2</Text></View>
              <View><Text style={[styles.oClr, styles.fs20]}>25pt</Text></View>
            </View>
          </View>

          <View style={styles.divider}></View>

          <View>
            <View style={styles.pv10}>
              <Text style={styles.oClr}>Yesterday</Text>
            </View>
            <View style={[styles.main, styles.pb10]}>
              <View><Text style={styles.fs20}>82% mail delivered</Text></View>
              <View><Text style={[styles.oClr, styles.fs20]}>8pt</Text></View>
            </View>
          </View>

          <View style={styles.divider}></View>

          <View>
            <View style={styles.pv10}>
              <Text style={styles.oClr}>10.10.2019</Text>
            </View>
            <View style={[styles.main, styles.pb10]}>
              <View><Text style={styles.fs20}>100% mail delivered</Text></View>
              <View><Text style={[styles.oClr, styles.fs20]}>10pt</Text></View>
            </View>
          </View>


        </Content>

      </Container>
    );
  }

}


const styles = StyleSheet.create({
  main:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pv10:{
    paddingVertical: 10
  },
  pb10:{
    paddingBottom: 10
  },
  fs20:{
    fontSize: 20,
  },
  tCenter:{
    textAlign: 'center'
  },
  aiCenter:{
    alignItems: 'center'
  },
  oClr:{
    color: 'orange'
  },
  divider:{
    height: 3,
    backgroundColor: '#eceff1'
  }
});

export default Points;
