import React from 'react';

import {View, Button} from 'react-native';
import Task from './Task';

const TaskList = (props) => {
  return <View>
      {props.list.map((item, index) => {
      return <Task title={item.title} index={index} setList={props.setList} list={props.list} done={item.done} />
    })}
  </View>
}

export default TaskList;