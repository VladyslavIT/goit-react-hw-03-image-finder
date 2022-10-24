import React from 'react';
import PropTypes from 'prop-types'

import { ButtonStyle } from './Button.styled';

const Button = ({ onClick }) => (
  <ButtonStyle onClick={onClick} type="button">
    Load more
  </ButtonStyle>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export { Button };
