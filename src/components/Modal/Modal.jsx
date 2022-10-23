import React from 'react';
import { createPortal } from 'react-dom';
import { ModalOverlay, ModalWiev } from './Modal.styled';

const modal = document.querySelector('#modal');

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target !== event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalOverlay
        onKeyDown={this.handleKeyDown}
        onClick={this.handleOverlayClick}
      >
        <ModalWiev>{this.props.children}</ModalWiev>
      </ModalOverlay>,
      modal
    );
  }
}
export { Modal };
