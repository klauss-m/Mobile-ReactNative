import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 22,
    lineHeight: 37,
    textAlign: 'center',
  },
  description: {
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'justify',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Archivo_700Bold',
    lineHeight: 30,
    marginTop: 10,
  },
  imageFilme: {
    width: 330,
    height: 100,
    borderColor: '#FFF',
    borderWidth: 1,
    borderRadius: 8,
  },
  titleFilme: {
    fontFamily: 'Poppins_400Regular',
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 10,
    maxWidth: 300,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
});

export default styles;
