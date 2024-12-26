
import {
 StyleSheet, 
 Dimensions
}from 'react-native'

const styles = StyleSheet.create({
  contedor: {
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textHeader: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textDecoracion: {
    fontSize: 18,
  },

  textDone: {
    textDecorationLine: 'line-through',
  },

  inputText: {
    width: Dimensions.get('screen').width * 0.7,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
  },

  contendorHijo: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },

  button: {
    width: Dimensions.get('screen').width * 0.25,
    backgroundColor: '#5897fb',
    borderRadius: 10,
    padding: 20,
    marginLeft: 10,
  },

  buttonEliminado: {
    borderRadius: 10,
    padding: 20,
    marginLeft: 10,
    backgroundColor: 'red',
  },

  textoBotton: {
    fontWeight: 'bold',
    color: 'white',
  },

  colorTextoBotton: {
    color: ' white',
  },

  ItemContenedot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    width: '95%',
    paddingVertical: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});


export default styles