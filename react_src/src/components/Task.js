
import React from 'react';

import { Text, View, Button, StyleSheet } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, props.done === true && styles.textDone]}>
        {props.title}
      </Text>
      <Button
        style={styles.button}
        title="X"
        onPress={() => {
          let newList = [...props.list];

          newList.splice(props.index, 1);

          props.setList(newList);
        }}
      />
      {props.done === false && (
        <Button
          style={styles.button}
          title="Terminer"
          onPress={() => {
            let newList = [...props.list];

            newList[props.index].done = true;

            props.setList(newList);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 32,
  },
  text: {
    flex: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
    marginRight: 8,
  },
  textDone: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  button: {
    flex: 1,
  },
});

export default Task;
