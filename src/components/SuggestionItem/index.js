import './index.css'
const SuggestionItem = props => {
    const {suggestionDetails,clickArrow} = props
    const {suggestion} = suggestionDetails

    const onClickArrow = () => (
        clickArrow(suggestion)
    )

    return(
        <li className="suggestion-item">
            <p className="suggestion-name">
                {suggestion}
            </p>
            <button type="button"  className="arrow-button" onClick={onClickArrow}>
                <img 
                src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
                className="arrow-img"
                alt="arrow"
                />
            </button>
        </li>
    )
    
}
export default SuggestionItem;