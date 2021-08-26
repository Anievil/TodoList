import React, { useState } from 'react';
import styled from 'styled-components/native'

const Todo = (props) => {
    const [isTodoEventClicked, setIsTodoEventClicked] = useState(false)

    const handleClick = () => {
        setIsTodoEventClicked(!isTodoEventClicked)
    }

    const deleteEvent = () => {
        props.deleted(props.index)
    }

    return (
        <TodoEvent onPress={handleClick} >
            <Desc>
                {props.item.title}
            </Desc>
            <DeleteButton onPress={deleteEvent} style={{ height: (isTodoEventClicked ? "100%" : 0) }} />
        </TodoEvent>
    );
};

const DeleteButton = styled.TouchableOpacity`
    background-color: #e3e3e3;

    width: 60px;
`

const Desc = styled.Text`
    color: #000;
    flex: 1;
    font-size: 20px;
    text-align: left;
    padding: 15px;
    width: 60%
    min-height: 60px;
`;

const TodoEvent = styled.TouchableOpacity`
    background-color: #fae9bb;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-top: 20px;
    margin-left: 5%;
`

export default Todo;