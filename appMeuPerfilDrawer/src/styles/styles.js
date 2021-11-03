import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerDrawer: {
    width: '100%',
    height: 77,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  imageDrawer: {
    width: 65,
    height: 65,
    marginLeft: 20,
  },
  textDrawer: {
    color: '#000',
    fontSize: 17,
    marginTop: 5,
    marginBottom: 25,
  },
  textHeader: {
    color: '#000',
    fontSize: 17,
    marginTop: 5,
    marginBottom: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textOption: {
    color: '#000',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  text: {
    color: '#000',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: '5%',
  },
  container: {
    backgroundColor: '#fff',
    margin: '5%',
    borderRadius: 10,
    padding: '5%',
  },
});

export default styles;
