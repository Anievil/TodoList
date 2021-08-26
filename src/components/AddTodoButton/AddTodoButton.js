import React from 'react';
import styled from 'styled-components/native'

const AddTodoButton = (props) => {

    return (
        <AddButton onPress={props.handleClick} />
    );
};

const AddButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 25px;
  bottom: 25px;
  background-color: green;
  border-radius: 50px;
`

export default AddTodoButton;