import React from 'react';
import axios from 'axios';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';

export class ImageGalley extends React.Component {
  state = {
    image: null,
    loading: false,
    error: null,
    status: 'idle',
  };

  BASE_URL = 'https://pixabay.com/api/';
  KEY = '29531020-3b97d8056313c52b7859c1bca';

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.nameGallery !== this.props.nameGallery) {
      try {
        const response = await axios.get(this.BASE_URL, {
          params: {
            key: this.KEY,
            q: this.props.nameGallery,
            image_type: `photo`,
            orientation: `horizontal`,
            per_page: 12,
            page: 1,
          },
        });
        this.setState({
          image: response.data,
          status: 'resolve',
        });
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
  }

  render() {
    if (this.state.status === 'rejected') {
      return <p> {this.state.error}</p>;
    }

    if (this.state.status === 'resolve') {
      return (
         <ul className="gallery">
          {this.state.image && (
            <ImageGalleryItem image={this.state.image.hits} />
          )}
        </ul>
      );
    }
    return <div></div>;
  }
}
