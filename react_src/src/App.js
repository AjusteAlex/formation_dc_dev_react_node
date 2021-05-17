import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import './App.css';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const Task = () => {
  const [task, setTask] = useState([
    {

    },

  ])

  return <View style={styles.app}>
    <AddTask list={task} setList={setTask}/>
    <TaskList list={task} setList={setTask}/>
  </View>
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5F5F5',
    margin: '5%'
  },
});
export default Task;