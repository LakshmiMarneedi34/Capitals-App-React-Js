import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  onChange = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const filterCountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeId,
    )

    return filterCountry.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)

    return (
      <div className="bg-container">
        <div className="white-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="label-container">
            <select
              id="status"
              className="form-control"
              onChange={this.onChange}
            >
              {countryAndCapitalsList.map(eachOption => (
                <option key={eachOption.id} value={eachOption.id}>
                  {eachOption.capitalDisplayText}
                </option>
              ))}
            </select>
            <label className="label-text" htmlFor="status">
              is capital of which country?
            </label>
          </div>
          <p className="paragraph">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
