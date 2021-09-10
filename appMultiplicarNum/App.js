import React, {Component} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

class App extends Component {
  state = {
    num1: 0,
    num2: 0,
  };

  handlerText = (text, inputNumber) => {
    if (Number.isInteger(+text) && inputNumber === 1) {
      this.setState({num1: +text});
    } else {
      this.setState({num2: +text});
    }
  };

  multiplyValue = () => {
    this.setState({result: this.state.num1 * this.state.num2});
  };

  render() {
    return (
      <View>
        <Text style={styles.styledHeader}>Multiplicador de Números</Text>
        <View>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              placeholder="Digite o primeiro nº"
              keyboardType="number-pad"
              onChangeText={text => this.handlerText(text, 1)}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite o segundo nº"
              keyboardType="number-pad"
              onChangeText={text => this.handlerText(text, 2)}
            />
          </SafeAreaView>
          <View style={styles.boxButton}>
            <Pressable style={styles.styledButton} onPress={this.multiplyValue}>
              <Text>Multiplicar</Text>
            </Pressable>
          </View>
        </View>
        <Text style={styles.styledResult}>Resultado: {this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  boxButton: {
    marginLeft: 130,
    marginTop: 20,
  },
  styledButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#04A777',
    width: 140,
    height: 40,
  },
  styledResult: {
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 140,
    marginTop: 40,
  },
  styledHeader: {
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: '20%',
    marginTop: 10,
  },
});

export default App;
