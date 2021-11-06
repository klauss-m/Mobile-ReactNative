import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
  cardHeaderEnrolled: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: '#99edf0',
  },
  cardHeaderNotEnrolled: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: '#E7E7E7',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },
  cardBody: {
    padding: 24,
  },
  userName: {
    fontSize: 20,
    color: '#32264d',
    fontWeight: 'bold',
  },
  cardFooter: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingBottom: 24,
  },
  headerInfoText: {
    fontSize: 15,
    color: '#999',
  },
  cardBodyText: {
    fontSize: 15,
    color: '#999',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    color: '#32264d',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  deleteButton: {
    backgroundColor: '#E7E7E7',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#32264d',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#8257E5',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 8,
  },
});

export default styles;
