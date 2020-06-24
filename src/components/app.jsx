import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "9NAXpI52kjBjG"
    }
  }

  search = (query) => {
    giphy('6dxa4QIP1sjGlRUJeLzoF268SzSjwZll').search({
      q: 'query',
      rating: 'g'
    }, function (error, result) {
      console.log(result);
    });

  }

  render() {
    const gifs = [
      { id: "9NAXpI52kjBjG" }, { id: "S0A0PBw8pZNFC"},
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
