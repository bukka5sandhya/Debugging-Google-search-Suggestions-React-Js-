import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component{
    state ={searchInput: ''}

    onClick = (event) => {
        this.setState({searchInput: event.target.value})
    
    }
    clickArrow = value => {
        this.setState({
            searchInput:value
        })
    }
    render(){
        const {searchInput} = this.state
        const {suggestionsList} = this.props
        const filteredSuggestionsList = suggestionsList.filter(eachSuggestion =>
            eachSuggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),

        )

        return(
            <div className="app-container">
                <div className="google-suggestions-container">
                    <img
                     src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
                     className="google-logo" 
                     alt="google logo"/>


                     <div className="search-list-input-container">
                        <div className="search-input-container">
                            <img 
                            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                            alt="search icon"
                            className="search-icon" 
                            />
                        <input 
                        type="text"
                        placeholder="Search Google"
                        value={searchInput}
                        className='search-input'
                        onChange={this.onClick}
                        />
                        </div>
                        <u1 className="suggestions-list">
                            {filteredSuggestionsList.map(each => (
                                <SuggestionItem 
                                key={each.id}
                                suggestionDetails={each}
                                clickArrow ={this.clickArrow}
                                />
                            ))}
                        </u1>
                     </div>
                </div>
            </div>
        )

    }
}
export default GoogleSuggestions;