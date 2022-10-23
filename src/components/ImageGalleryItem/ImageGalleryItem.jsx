import React from 'react';
import { Modal } from 'components/Modal/Modal';

class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { image } = this.props;
    return image.map(({ id, webformatURL, largeImageURL, tags }) => (
      <li onClick={this.toggleModal} key={id}>
        <img src={webformatURL} alt={tags} />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    ));
  }
}
export { ImageGalleryItem };
