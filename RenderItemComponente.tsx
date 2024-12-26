import React from 'react';
import styles from './Styles';
import {View, Text, TouchableOpacity} from 'react-native';
import {task} from './App';

interface ItemTask {
  item: task;
  markDon: () => void;
  deleFuncion: () => void;
}

export default function RenderItemComponente({
  item,
  markDon,
  deleFuncion,
}: ItemTask) {
  return (
    <>
      <View style={styles.ItemContenedot}>
        <TouchableOpacity onPress={markDon}>
          <Text style={item.done ? styles.textDone : styles.textDecoracion}>
            {item.title}
          </Text>
          <Text style={item.done ? styles.textDone : styles.textDecoracion}>
            {item.date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>

        {item.done && (
          <TouchableOpacity
            style={styles.buttonEliminado}
            onPress={deleFuncion}>
            <Text style={styles.colorTextoBotton}>Eliminar</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
