import {Component, React} from 'react'
import ReactDom from 'react-dom'
import Popup from 'reactjs-popup'
import {AiOutlineClose} from 'react-icons/ai'
import Item from './components/Item'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    list: choicesList,
    score: 0,
  }

  render() {
    const {score, list} = this.state
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="content-container">
            <div className="text">
              <p className="name">ROCK</p>
              <p className="name">PAPER</p>
              <p className="name">SCISSORS</p>
            </div>
            <div className="score-container">
              <p className="score">Score</p>
              <p className="score-num">{score}</p>
            </div>
          </div>
          <ul className="list-container">
            {list.map(each => (
              <Item
                key={each.id}
                itemDetails={each}
                onPressButton={this.onPressButton}
              />
            ))}
          </ul>

          <Popup
            modal
            trigger={
              <button type="button" className="rules-button">
                Rules
              </button>
            }
            position="left center"
            className="remote"
          >
            {close => (
              <div className="popup-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="rules-image"
                />
                <button
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  <AiOutlineClose className="close" />
                </button>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
