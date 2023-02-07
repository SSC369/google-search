import {Component} from 'react'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
          <div className="suggestions-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                value={searchInput}
                type="search"
                placeholder="Search Google"
                className="custom-input"
                onChange={this.onSearchInput}
              />
            </div>

            <ul className="list-container">
              {searchResults.map(eachItem => (
                <li
                  key={eachItem.id}
                  className="list-item"
                  value={eachItem.suggestion}
                >
                  <p className="suggestion">{eachItem.suggestion}</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
                    alt="arrow"
                    className="arrow-icon"
                    value={eachItem.suggestion}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
