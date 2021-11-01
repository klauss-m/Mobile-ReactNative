import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
  list: {
    flex: 1,
    padding: 20,
  },
  item: {
    backgroundColor: '#99c2f2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
