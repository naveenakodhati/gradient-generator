// Style your elements here
import styled from 'styled-components'

export const MainAppContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.stylesDirection},
    ${props => props.firstColorInput},
    ${props => props.secondColorInput}
  );
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: white;
  font-size: 26px;
  font-weight: 700;
  padding-bottom: 10px;
  text-align: center;
`

export const Paragraph = styled.p`
  color: #ededed;
  font-size: 18px;
  font-weight: 500;
  margin-right: 16px;
  text-align: center;
  align-self: center;
  margin-bottom: 0px;
  padding-bottom: 0px;
`

export const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  justify-content: space-around;
  align-self: center;
  width: 25%;
`

export const CustomInput = styled.input`
  outline: none;
  cursor: pointer;
  padding: 0px;
  width: 80px;
  height: 35px;
  border: 0px;
  opacity: 0.5;
  margin-right: 20px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 130px;
    height: 45px;
  }
`
export const UlContainer = styled.ul`
  display: flex;
  flex-direction: wrap;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 15px;
`

export const CustomButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: #00c9b7;
  color: black;
  border-radius: 7px;
  border: 0px;
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
  margin-top: 25px;
  width: 100px;
  margin-right: 13px;
  margin-bottom: 15px;
`
