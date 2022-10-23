import React from 'react';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGalley } from '../ImageGallery/ImageGallery';

export class App extends React.Component {
  state = {
    findName: '',
  };

  formSubmit = name => {
    this.setState({ findName: name });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGalley nameGallery={this.state.findName} />
      </div>
    );
  }
}

//------ key 29531020-3b97d8056313c52b7859c1bca
// react tostify
