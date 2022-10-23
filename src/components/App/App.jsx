import React from 'react';
import axios from 'axios';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGalley } from '../ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
export class App extends React.Component {
  state = {
    findName: '',
    loading: false,
  };

  formSubmit = name => {
    this.setState({ findName: name, loading: true });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.formSubmit} />
         {this.state.loading && <Loader /> } 
        <ImageGalley nameGallery={this.state.findName} />
      </div>
    );
  }
}

//------ key 29531020-3b97d8056313c52b7859c1bca
// react tostify
