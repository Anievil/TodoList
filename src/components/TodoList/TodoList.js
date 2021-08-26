import React, { useState } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import Todo from '../Todo/Todo'


const TodoList = (props) => {
    const [isDeleted, setIsDeleted] = useState(false)

    const deleted = (index) => {
        props.deleteEvent(index)
        setIsDeleted(!isDeleted)
    }

    const renderItem = (item, index) => {
        return (
          <Todo item={item} key={index} index={index} deleted={deleted} />
        )
    }
    
    return (
        <ScrollView style={styles.listStyle}>
            {props.datas.map(renderItem)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listStyle: {
        width: '100%',
    }
})

export default TodoList;