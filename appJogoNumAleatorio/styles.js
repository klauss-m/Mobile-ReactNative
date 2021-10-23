import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textTop: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
    margin: 10,
  },
  img: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    margin: 5,
  },
  textGame: {
    fontSize: 20,
    color: 'black',
    margin: 10,
    textAlign: 'center',
  },
  gameInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  btn: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#2AC062',
    padding: 10,
    width: '95%',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  containerResult: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textResult: {
    fontSize: 16,
    color: 'red',
    marginTop: 100,
  },
});
