'use strict';

import React from 'react';
import Crate from './crate/Crate.react.js';
import Deck from './deck/Deck.react.js';
import TrackStore from '../stores/Tracks.js';

class Electro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tracks: TrackStore.getTracks()};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    TrackStore.listen(() => {this.onChange()});
  }

  onChange(){
    this.setState({tracks: TrackStore.getTracks()})
  }

  getDecks(){
    var decks = [];
    for(let key in this.state.tracks){
      decks.push(<Deck key={this.state.tracks[key].url} track={this.state.tracks[key]}/>);
    }

    return decks;
  }

  render(){
    return (
        <div>
          <div className={'row'}>
            <div className={'small-12 columns'}>
              <Crate/>
            </div>
          </div>
          <div className={'row'}>
            <div className={'small-12 columns'}>
              {this.getDecks()}
            </div>
          </div>
        </div>
    );
  }
}

export default Electro;
