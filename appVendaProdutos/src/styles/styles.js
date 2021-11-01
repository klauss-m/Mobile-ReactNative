import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textPrice: {
    fontSize: 15,
    color: '#000',
    marginTop: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;
