import { Avatar, Badge, Box, IconButton, Menu, Tooltip, Typography } from "@material-ui/core";

import { Notifications, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { style } from "@mui/system";
// import { Link } from 'react-router-dom';
import { UserContext } from "./App";
import React, { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";

const Container = styled.div`
  align-items: center;
  text-decoration: none;
  position: sticky;
  
`;

const Wrapper = styled.div`
  padding: 10px 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* position: sticky; */
  /* background-color: #11272C; */
  background-color: #1f1d1d;
  color: white;
  text-decoration: none;
`;

const Left = styled.div`
  flex: 1;
  text-align: center;
  text-decoration: none;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-top: 0px;
  padding: 5px;
  text-decoration: none;
`;

const Input = styled.input`
  border: none;
  text-decoration: none;
  `;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  text-decoration: none;

`;

const Logo = styled.h1`
  font: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none !important;
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 35px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  
`;




const Navbar = () => {
  const [state, dispatch] = useContext(UserContext);

  const RenderNav = () =>{
    if (state){
      return (
        <>
          <Wrapper>
        <Left>
          {/* <Link to = {'/'}> */}

        <Logo>Schedu-La</Logo>
          {/* </Link> */}
        </Left>
        <Center>
          
          {/* <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Center>
        <Right>
          {/* <Link  to = {'/guide'}> */}
          <MenuItem>CALENDAR</MenuItem>
          {/* </Link > */}
          {/* <Link to ={'/racketlist/rackets'}> */}
          <MenuItem>EVENTS</MenuItem>
          {/* </Link> */}
          {/* <Link to={'/login'}> */}
          <MenuItem>
         <Badge badgeContent={4} color="red">
      <Notifications color="white" />
    </Badge>
         
         </MenuItem>
        

          
          <MenuItem>
          <Avatar>N</Avatar>
          </MenuItem>
         
        </Right>
      </Wrapper>
        </>
      )
    }
    else{
      return (
        <>
          <Wrapper>
        <Left>
          {/* <Link to = {'/'}> */}

        <Logo>Schedu-La</Logo>
          {/* </Link> */}
        </Left>
        <Center>
          
          {/* <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
        </Center>
        <Right>
          {/* <Link  to = {'/guide'}> */}
          <MenuItem>CALENDAR</MenuItem>
          {/* </Link > */}
          {/* <Link to ={'/racketlist/rackets'}> */}
          <MenuItem>EVENTS</MenuItem>
          {/* </Link> */}
          {/* <Link to={'/login'}> */}
          <MenuItem>
         <Badge badgeContent={4} color="red">
      <Notifications color="white" />
    </Badge>
         
         </MenuItem>
        

          <MenuItem  >SIGN IN</MenuItem>
        
         
        </Right>
      </Wrapper>
        </>
      )
    }

  }

  return (
    <Container>
    
    </Container>
  );
};

export default Navbar;



// appbar with responsive menu + search bar + logout pe nav change 


//STudents View

// events like feed + preferred events stack 

// sidebar to select preferred events (and to sort it in calender add this there too)

// try catalogue if possible 

// feed pagination + specific topic like 

// feedback section

// footer 

// Commitee View

// feedback highlights

//changes req 

// 

//

// TEacher View 

//  events 

// req 

// req sent back 


