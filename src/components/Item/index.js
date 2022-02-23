import './index.css'

const Item = props => {
  const {itemDetails, onPressButton} = props
  const {id, imageUrl} = itemDetails

  const onClickButton = () => {
    onPressButton(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClickButton}>
        <img src={imageUrl} className="image" alt="game" />
      </button>
    </li>
  )
}
export default Item
