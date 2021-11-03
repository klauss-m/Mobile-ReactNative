import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 40,
  },
  containerDarkMode: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 40,
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#000000',
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 40,
    textAlign: 'center',
  },
  titleDarkMode: {
    fontFamily: 'Archivo_700Bold',
    color: '#ffffff',
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 40,
    textAlign: 'center',
  },
  labelSwitch: {
    color: '#000000',
    fontFamily: 'Poppins_400Regular',
  },
  labelSwitchDarkMode: {
    color: '#ffffff',
    fontFamily: 'Poppins_400Regular',
  },
  containerSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  containerQuote: {
    borderRadius: 5,
    padding: 10,
    borderColor: '#000000',
    borderWidth: 2,
  },
  containerQuoteDarkMode: {
    borderRadius: 5,
    padding: 10,
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  textQuote: {
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 26,
    margin: 10,
    textAlign: 'justify',
  },
  textQuoteDarkMode: {
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 26,
    margin: 10,
    textAlign: 'justify',
    color: '#ffffff',
  },
  textQuoteSmall: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 26,
    margin: 10,
    textAlign: 'justify',
  },
  textQuoteSmallDarkMode: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 26,
    margin: 10,
    textAlign: 'justify',
    color: '#ffffff',
  },
});

export default styles;
