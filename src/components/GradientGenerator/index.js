import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainAppContainer,
  CustomInput,
  UlContainer,
  InputsContainer,
  CustomButton,
  Heading,
  Paragraph,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    firstInputColorValue: '#8ae323',
    secondInputColorValue: '#014f7b',
    styleValue: gradientDirectionsList[0].value,
    stylesColor: gradientDirectionsList[0].value,
  }

  onChangeButtonColor = value => {
    this.setState({stylesColor: value})
  }

  generateButton = () => {
    const {firstColor, secondColor, stylesColor} = this.state
    this.setState({
      firstInputColorValue: firstColor,
      secondInputColorValue: secondColor,
      styleValue: stylesColor,
    })
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  render() {
    const {
      firstColor,
      secondColor,
      stylesColor,
      styleValue,
      secondInputColorValue,
      firstInputColorValue,
    } = this.state
    return (
      <MainAppContainer
        data-testid="gradientGenerator"
        stylesDirection={styleValue}
        firstColorInput={firstInputColorValue}
        secondColorInput={secondInputColorValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>

        <UlContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              stylesColor={stylesColor}
              onChangeButtonColor={this.onChangeButtonColor}
              key={eachDirection.directionId}
              eachDirectionItem={eachDirection}
            />
          ))}
        </UlContainer>

        <Paragraph>Pick the Colors</Paragraph>
        <InputsContainer>
          <Paragraph>{firstColor}</Paragraph>
          <Paragraph>{secondColor}</Paragraph>
        </InputsContainer>

        <InputsContainer>
          <CustomInput
            value={firstColor}
            type="color"
            onChange={this.onChangeFirstColor}
          />
          <CustomInput
            value={secondColor}
            type="color"
            onChange={this.onChangeSecondColor}
          />
        </InputsContainer>
        <CustomButton
          bgColor="#00c9b7"
          type="button"
          onClick={this.generateButton}
        >
          Generate
        </CustomButton>
      </MainAppContainer>
    )
  }
}

export default GradientGenerator
