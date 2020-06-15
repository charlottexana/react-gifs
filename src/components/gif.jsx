import React, { Component } from 'react';

class Gif extends Component {
  render () {
    const src = "https://media3.giphy.com/media/GI1kfuiI4Tzgc/giphy.gif?cid=ecf05e474ac51e7ce89de0c1a8f95f8460c910619ff08941&rid=giphy.gif";
    return (
      <img src={src} className="gif" alt=""/>
    );
  }
}

export default Gif;
