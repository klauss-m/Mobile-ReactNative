import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderText: {
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
  },
  switch: {
    margin: 10,
  },
})

export default styles
