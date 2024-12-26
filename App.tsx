import React from 'react';
import styles from './Styles';

import {
  View,
  Text,
  TextInput,
  /*   StyleSheet, */
  /*   Dimensions, // para que mi dipositivo sea reponsive */
  TouchableOpacity, // este es un button el que mas se usa
  FlatList,
} from 'react-native';


// arry con un objecto dentro
const array = [
  {
    title: 'alimenta el perro',
    done: true,
    date: new Date(),
  },

  {
    title: 'Salir a correr',
    done: false,
    date: new Date(),
  },
  {
    title: 'Salir a Comer',
    done: true,
    date: new Date(),
  },
];

// Creo un interface para tipar La varible con typeScript
export interface task {
  title: string;
  done: boolean;
  date: Date;
}

function App() {
  return (
    <>
      <View style={styles.contedor}>
        <Text style={styles.textHeader}>Mis tarea por hacer</Text>
        <View style={styles.contendorHijo}>
          <TextInput placeholder="Ingrese una tarea" style={styles.inputText} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textoBotton}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <FlatList renderItem={({item}) =>  } data={array} />
      </View>
    </>
  );
}

export default App;
