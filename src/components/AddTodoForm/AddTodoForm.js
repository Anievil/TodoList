import React, { useState } from 'react';
import {
    StyleSheet,
    Keyboard,
    TextInput,
    Button
} from 'react-native';
import styled from 'styled-components/native'

const AddTodoForm = (props) => {
    const [value, setValue] = useState('')

    const sendData = () => {
        if (value !== '') {
            Keyboard.dismiss()
            props.AddEvent(value)
            setValue('')
        }
        else{
            alert('You must type text')
        }
    }

    return (
        <Form style={{ width: (props.isAddClicked ? 200 : 0), height: (props.isAddClicked ? 100 : 0) }}>
            <TextInput style={input} onChangeText={setValue} value={value} placeholder='Enter your task!' />
            <Button title='Save' onPress={sendData} />
        </Form>
    );
};

const Form = styled.KeyboardAvoidingView` 
    background-color: #e3e3e3;
    position: absolute;
    align-items: center;
    bottom: 40%;
`

const input = StyleSheet.create({
    borderBottomWidth: 1,
    padding: 0,
    margin: 10
})

export default AddTodoForm;