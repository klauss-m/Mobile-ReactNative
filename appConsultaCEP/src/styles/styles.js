import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },
  containerInputButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    fontSize: 16,
    lineHeight: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 30,
    marginBottom: 40,
  },

  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  label: {
    color: '#d4c2ff',
    fontSize: 16,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#04d361',
    height: 50,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerDados: {
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 8,
    borderColor: '#000',
    borderWidth: 2,
    marginTop: 20,
  },
});

export default styles;
