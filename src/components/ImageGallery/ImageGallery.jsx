import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { ImageGalley } from './ImageGallary.styled';

class ImageGallery extends React.Component {
  state = {
    image: [],
    loading: false,
    error: null,
    status: 'idle',
    page: 1,
    total: null
  };

  BASE_URL = 'https://pixabay.com/api/';
  KEY = '29531020-3b97d8056313c52b7859c1bca';

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.nameGallery !== this.props.nameGallery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      try {
        const response = await axios.get(this.BASE_URL, {
          params: {
            key: this.KEY,
            q: this.props.nameGallery,
            image_type: `photo`,
            orientation: `horizontal`,
            per_page: 12,
            page: this.state.page,
          },
        });
        if (response.data.hits.length === 0) {
          toast.error('Nothing as requested, please try another word');
          this.setState({
            image: [],
            loading: false,
            status: 'pending',
          });
          return;
        }
        if (prevProps.nameGallery !== this.props.nameGallery) {
          this.setState({
            image: [...response.data.hits],
            loading: false,
            status: 'resolve',
            page: 1,
            total: response.data.total
          });
          toast.success('Successful search');
        }
        if (prevState.page !== this.state.page) {
          this.setState(prevState => ({
            image: [...prevState.image, ...response.data.hits],
            loading: false,
            status: 'resolve',
          }));
        }
      } catch (error) {
        this.setState({ status: 'rejected' });
        toast.error('Oops, something went wrong');
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { image, status, loading, error, total} = this.state;

    return (
      <>
        {status === 'rejected' && <p> {error}</p>}
        {loading && <Loader />}
        {status === 'resolve' && (
          <ImageGalley>
            {image.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            ))}
            <ToastContainer />
          </ImageGalley>
        )}
        {image.length > 0 && image.length !== total ? <Button onClick={this.loadMore} /> : <></> }
      </>
    );
  }
}

ImageGallery.propTypes = {
  nameGallery: PropTypes.string.isRequired,
};

export { ImageGallery };


