

import React from "react";
import { useState } from "react";

import styled from "styled-components";

import MenuIcon from "@material-ui/icons/Menu";





const Menu = () => {

  const [burgerStatus, setBurgerStatus] = useState(false);


  return (
    <div>
      <RightMenu >
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)} />
        </CloseWrapper>
        
        <li><a href='#'>Use A Bigger Screen for Better Experience</a></li>

      </BurgerNav>
    </div>
  )
}



export default Menu


const RightMenu = styled.div`
  display: flex;
  align-item: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    color: rgb(255, 136, 0);
  }

  @media (min-width: 768px) {
      display: none;
  }

`


const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  color: rgb(255, 136, 0);
  font-size: 60px;
  border: 1px solid rgb(255, 136, 0);
`

const BurgerNav = styled.div`
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  background: black;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(100%)'};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2)

    a {
      font-weight: 600;
    }
  }


`

const CustomClose = styled(MenuIcon)`
cursor: pointer;
color: rgb(255, 136, 0);
font-size: 60px;
border: 1px solid rgb(255, 136, 0);

`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`