import './App.css'

import GoogleSuggestions from './components/GoogleSuggestions'

const suggestionsList = [
  {
    id:1,
    suggestion:'Price of Ethereum',

  },
  {
    id:2,
    suggestion:'Oculus Quest 2 specs',
  },
  {
    id:3,
    suggestion:'Price of Ethereum today',
  },
  {
    id:4,
    suggestion:'Tesla Share Price',
  },
  {
    id:5,
    suggestion:'Latest trends in AI'
  },
  {
    id:6,
    suggestion:'Latest trends in ML',
  },
]

const App = () => <GoogleSuggestions suggestionsList={suggestionsList}/>
export default App;