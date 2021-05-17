import React, {useState} from 'react';

import {View, TextInput, Button, StyleSheet} from 'react-native';

const AddTask = (props) => {
    const [inputValue, setInputValue] = useState("");

    return <View style={styles.addtask}> 
      <TextInput style={styles.input} placeholder="Entrez le nom de la tâche" onChangeText={(value) => {
        setInputValue(value);
      }} />
      <Button title="Valider" onPress={() => {
        let newList = [...props.list];

        newList.push({
          title: inputValue,
          done: false
        })
        props.setList(newList);
      }}/>
    </View>
}

const styles = StyleSheet.create({
  addtask: {
    justifyContent: 'flex-start',
    backgroundColor: '#F5F5F5',
    margin: '5%'
  },
  input: {
    
  }
});

export default AddTask;