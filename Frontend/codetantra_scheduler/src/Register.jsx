import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFkbWludG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: rgba(0.12, 0.33, 0, 0);
  margin-left: 50px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #dde8ec;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 7px;
  font-size: medium;
  border-color: teal;
  
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  margin: 20px 10px 0px 0px;
  cursor: pointer;
  font-weight: bold;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register