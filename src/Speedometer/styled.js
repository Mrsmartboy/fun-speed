import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #07080c;
 min-height: 100vh;
`

export const Heading = styled.h1`
   color: #ffffff;
   font-size: 30px;
   font-family: 'Roboto';
   font-weight: bold;

`

export const Image = styled.img`
   width: 50%;
`
export const SpeedHeader = styled.h1`
  
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #ffffff;
`
export const Description=styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #cbd5e1;
  font-weight: 500;
`

export const ButtonContainer=styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`
export const AccelerateButton =styled.button`
    background-color:  #0b69ff;
    font-size: 15px;
    padding: 10px;
    border-radius: 10px;
    color: #ffffff;
    font-family: 'Roboto';
    font-weight: 500;
    border: none;
    outline: none;
    margin: 10px;
    cursor: pointer;

`
export const BrakeButton=styled.button`
   background-color:  transparent;
    font-size: 15px;
    padding: 10px;
    border-radius: 10px;
    color: #94a3b8;
    font-family: 'Roboto';
    font-weight: 500;
    border: 2px solid #94a3b8;
    margin: 10px;
    cursor: pointer;
`