import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Container } from './App.styled';

 class App extends React.Component {
  state = {
    findName: '',
  };

  formSubmit = name => {
    this.setState({ findName: name });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.formSubmit} />
        <ImageGallery nameGallery={this.state.findName} />
        <ToastContainer autoClose={2000} />
      </Container>
    );
  }
};

export { App };


