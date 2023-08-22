// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClicked: ''}

  onClickImage = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="feedback-container">
          {isClicked ? (
            <>
              <img src={loveEmojiUrl} className="love-image" alt="love emoji" />
              <h1 className="thankyou-heading">Thank You!</h1>
              <p className="description">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </>
          ) : (
            <>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="list-container">
                {emojis.map(each => (
                  <li className="list-item" key={each.id}>
                    <button
                      type="button"
                      className="button"
                      onClick={this.onClickImage}
                    >
                      <img
                        src={each.imageUrl}
                        className="image"
                        alt={each.name}
                      />
                    </button>
                    <p className="name">{each.name}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
