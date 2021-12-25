import styled from 'styled-components';
import React, { useState } from 'react';
import { Button, message } from 'antd';
import backgroundImage from './asset/background.jpg';
import 'antd/dist/antd.min.css';

const MainWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
`;

const Header = styled.div`
  height: 80px;
  background-color: #65350F;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 48px;
`;

const TopContainer = styled.div`
  display: flex;
  padding: 48px 24px 24px 24px;
  justify-content: space-between;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 24px;
  align-items: center;
`;

const ItemContainer = styled.div`
  display: flex;
  width: 50%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 90%;
  background-color: white;
  color: #282c34;
  border-radius: 10px;
  justify-content: space-between;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  height: 80px;
  font-size: 24px;
  padding: 5px;
  width: 90%;
  font-weight: bold;
  color: white;
  &:hover {
    opacity: 0.8;
  }
  &:hover, &:active, &:focus {
    border: 1px solid white;
    color: white;
  }
`;

const TakeButton = styled(StyledButton)`
  background-color: green;
  &:hover, &:active, &:focus {
    background-color: green;
  }
`;

const ReturnButton = styled(StyledButton)`
  background-color: red;
  &:hover, &:active, &:focus {
    background-color: red;
  }
`;

const App = () => {
  const totalCups = 20;
  const [count, setCount] = useState(totalCups);

  const takeCup = (isError) => {
    if (!isError) setCount(count - 1);
    message[isError ? 'error' : 'info']({
      content: isError ? 'Sorry, there are no more cups left. Please wait until someone returns their cup!' : 'Please remember to return the cup after use. Thank you!',
      style: { fontSize: 16, top: 80, position: 'relative' },
    });
  }

  const returnCup = (isError) => {
    if (!isError) setCount(count + 1);
    message[isError ? 'error' : 'info']({
      content: isError ? 'All the cups have already been returned!' : 'Thank you for returning the cup. Have a good day!',
      style: { fontSize: 16, top: 80, position: 'relative' },
    });
  }

  return (
    <MainWrapper>
      <Header> Cup Counter </Header>
      <TopContainer>
        <ItemContainer style={{ justifyContent: 'flex-start' }}>
          <Item>
            <Text style={{ marginBottom: 5 }}> Cups Remaining </Text>
            <Text style={{ fontSize: 32 }}> {count} </Text>
          </Item>
        </ItemContainer>
        <ItemContainer style={{ justifyContent: 'flex-end' }}>
          <Item>
            <Text style={{ marginBottom: 5 }}> Cups Taken </Text>
            <Text style={{ fontSize: 32 }}> {totalCups - count} </Text>
          </Item>
        </ItemContainer>
      </TopContainer>
      <BottomContainer>
        <ItemContainer style={{ justifyContent: 'flex-start' }}>
          <TakeButton onClick={() => takeCup(count <= 0)} > Take </TakeButton>
        </ItemContainer>
        <ItemContainer style={{ justifyContent: 'flex-end' }}>
          <ReturnButton onClick={() => returnCup(count >= totalCups)} > Return </ReturnButton>
        </ItemContainer>
      </BottomContainer>
    </MainWrapper>
  );
}

export default App;
