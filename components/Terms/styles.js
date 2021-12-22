import styled from "styled-components";
import { IoClose } from 'react-icons/io5';
import { keyframes } from "styled-components";

const slide= keyframes`
 from{
   transform: translate3d(0,100%,0);
 }
 to{
   transform: translate3d(0,0,0);
 }
`


export const Container = styled.section`
  background: #f1f1f1;
  box-sizing: border-box;
  padding: 2rem;
  top: 0;
  position: fixed;
  height: 100%;
  z-index: 14;
  display: flex;
  flex-direction: column;
  animation: ${slide} .5s ease-in-out both;

  @media (min-width: 870px) {
    padding: 1.5rem 2.5rem;
  }

  &.close {
    display: none;
  }
  .button-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    height: 20%;
  }
  .modalTerms {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    padding-right: 1rem;
  }
 
  h1{
    color: #1a3968;
    font-size: 35px;
    font-weight: 800;
    margin: 0;  
    padding: 0;  
  }

  p {
    font-size: 20px;
  }

  span {
    color: #1a3968;
    font-weight: 600;
    font-weight: 800;
  }
`;

export const BtnClose = styled.button`
  border: none;
  padding: 0;
  `;

export const IcClose=styled(IoClose)`
    background: #1a3968;
    border: 1px solid #1a3968;
    color: white;
    cursor: pointer;
    font-size: 30px;


    :active {
    color: #1a3968;
    background: #f1f1f1;
  }
  @media (min-width: 768px) {
    :hover {
      color: #1a3968;
      background: #f1f1f1;
    }
  }
`