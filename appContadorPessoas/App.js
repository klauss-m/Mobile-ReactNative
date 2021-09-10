import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

class App extends Component {
  state = {
    value: 0,
    total_taps: 0,
  };

  incrementValue = () => {
    this.setState({
      value: this.state.value + 1,
      total_taps: this.state.total_taps + 1,
    });
  };

  decrementValue = () => {
    this.setState({
      value: this.state.value - 1,
      total_taps: this.state.total_taps - 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.styledCounter}>{this.state.value}</Text>
        <View style={styles.containerButtons}>
          <Pressable
            style={styles.styledButtonDown}
            onPress={this.decrementValue}>
            <Text style={styles.textButtons}>-</Text>
          </Pressable>
          <Pressable
            style={styles.styledButtonUp}
            onPress={this.incrementValue}>
            <Text style={styles.textButtons}>+</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  containerButtons: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 20,
  },
  styledCounter: {
    marginLeft: 150,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    textAlign: 'center',
    paddingTop: 15,
    fontSize: 50,
    borderColor: '#F75C03',
  },
  styledButtonUp: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#04A777',
    width: 100,
    height: 60,
    margin: 40,
  },
  styledButtonDown: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#D90368',
    width: 100,
    height: 60,
    margin: 40,
  },
  textButtons: {
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default App;
