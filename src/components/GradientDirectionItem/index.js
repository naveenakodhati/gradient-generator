// Write your code here
import {LiComponent, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirectionItem, onChangeButtonColor, stylesColor} = props
  const {value, displayText} = eachDirectionItem

  const buttonColor = stylesColor === value ? '#ededed' : '#ffffff79'
  const opacityValue = stylesColor === value ? '1' : '0.5'

  const onChangeActiveButton = () => {
    onChangeButtonColor(value)
  }
  return (
    <LiComponent>
      <DirectionButton
        opacityVal={opacityValue}
        bgColor={buttonColor}
        onClick={onChangeActiveButton}
      >
        {displayText}
      </DirectionButton>
    </LiComponent>
  )
}

export default GradientDirectionItem
