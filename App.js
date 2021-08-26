import React, { useEffect, useState } from 'react';;
import styled from 'styled-components/native'
import AddTodoButton from './src/components/AddTodoButton/AddTodoButton'
import AddTodoForm from './src/components/AddTodoForm/AddTodoForm'
import Header from './src/components/Header/Header'
import TodoList from './src/components/TodoList/TodoList'
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isAddClicked, setIsAddClicked] = useState(false)
  const [datas, setDatas] = useState([])

  const AddEvent = async (value) => {
    datas.push({title: value})
    setIsAddClicked(false)
    await AsyncStorage.setItem('@TodoList', JSON.stringify(datas))
  }

  const handleClick = () => {
    setIsAddClicked(!isAddClicked)
  }

  const deleteEvent = async (id) => {
    datas.splice(id, 1)
    await AsyncStorage.setItem('@TodoList', JSON.stringify(datas))
  }

  useEffect( async() => {
    if(await AsyncStorage.getItem('@TodoList') !== null){
      const list = await AsyncStorage.getItem('@TodoList')
      setDatas(JSON.parse(list))
    }
  }, [])

  return (
    <TodoApp>
      <Header />
      <TodoList datas={datas} deleteEvent={deleteEvent} />
      <AddTodoForm isAddClicked={isAddClicked} AddEvent={AddEvent} />
      <AddTodoButton handleClick={handleClick} />
    </TodoApp>
  );
};

const TodoApp = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  align-items: center;
  width: 100%;
`;

export default App;