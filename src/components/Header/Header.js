import React from 'react';
import styled from 'styled-components/native'
const Header = () => {

    return (
        <HeaderForTitle>
            <Title onPress={() => navigation.navigate('NavMenu')} >
                TodoList
            </Title>
        </HeaderForTitle>
    );
};

const Title = styled.Text`
  font-weight: 600;
  color: white;
  font-size: 25px;
  text-align: left;
  padding-left: 25px;
`

const HeaderForTitle = styled.View`
  height: 100px;
  background-color: #539ffc;
  width: 100%;
  justify-content: center;
`;

export default Header;