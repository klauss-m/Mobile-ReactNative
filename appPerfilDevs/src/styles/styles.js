import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
  },
  textBold: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: '#0a0624',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#0a0624',
    marginBottom: 20,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#000',
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    width: 40,
    height: 40,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  inputText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});

export default styles;
