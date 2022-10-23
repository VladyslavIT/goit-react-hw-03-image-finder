import React from 'react';
import axios from 'axios';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export class ImageGalley extends React.Component {
  state = {
    image: [],
    loading: false,
    error: null,
    status: 'idle',
    page: 1,
  };

  BASE_URL = 'https://pixabay.com/api/';
  KEY = '29531020-3b97d8056313c52b7859c1bca';

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.nameGallery !== this.props.nameGallery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      console.log(this.state.page);
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
        this.setState(prevState => ({
          image: [...prevState.image, ...response.data.hits],
          loading: false,
          status: 'resolve',
        }));
        console.log(this.state);
        console.log(response.data.hits);
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
  }
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const hits = this.state.image;
    console.log(hits);
    if (this.state.status === 'rejected') {
      return <p> {this.state.error}</p>;
    }

    if (this.state.loading) {
      return <Loader />;
    }

    if (this.state.status === 'resolve') {
      return (
        <ul className="gallery">
          {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          ))}

          <Button onClick={this.loadMore} />
        </ul>
      );
    }
    return <div></div>;
  }
}
