import React from 'react';
import md5 from 'md5';
import axios from 'axios';
import CharacterList from './CharacterList';
import SearchCharacter from './SearchCharacter'

class MarvelDataCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    this.getData()
  }


  getData = async () => {
    let baseUrl = "http://gateway.marvel.com/v1/public/characters"
    const publicKey = "f8ad949f605c15a6d46e8fe3d0a348fe"
    const privateKey = "42a0734d132d836a5dce3b386b8e70f76478827d"
    const ts = 1;
    const stringToHash = ts + privateKey + publicKey;
    const hash = md5(stringToHash);
    const url = baseUrl + '?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;

    await axios.get(url)
      .then(response => {
        console.log(response.data.data.results)
        this.setState({
          characters : response.data.data.results
        })
      })
      .catch(error => console.log(error))
  }
  render() {
    return(
      <div>
        <SearchCharacter />
        <CharacterList char={this.state.characters}/>
      </div>
    )
  }
}

export default MarvelDataCall;