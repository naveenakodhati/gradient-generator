// Style your elements here
import styled from 'styled-components'

export const LiComponent = styled.li`
  list-style-type: none;
`
export const DirectionButton = styled.button`
  background-color: ${props => props.bgColor};
  color: #00c9b7;
  opacity: ${props => props.opacityVal};
  margin-bottom: 10px;
  margin-right: 15px;
  margin-top: 18px;
  cursor: pointer;
  padding: 10px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 700;
  width: 90px;
  text-align: center;
  outline: none;
`
