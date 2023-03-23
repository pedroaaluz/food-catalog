import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  inputTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#11999e',
    padding: 10,
  },
  inputText: {
    marginLeft: 10,
    flex: 1,
    borderBottomWidth: 1,
    color: '#fff',
    borderColor: '#fff',
  },
  flatList: {
    flex: 1,
    padding: 10,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  cardBody: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cardBodyText: {
    paddingVertical: 40,
    backgroundColor: '#FFF',
    width: 300,
  },
  cardText: {
    color: 'black',
    textAlign: 'center',
  },
});
