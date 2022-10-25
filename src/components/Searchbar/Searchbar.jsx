import React from 'react';
import PropTypes from 'prop-types';

import { SearchHeader } from './Searchbar.styled';
import { SearchForm } from './Searchbar.styled';
import { SearchButton } from './Searchbar.styled';
import { SearchInput } from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';

 class Searchbar extends React.Component {
  state = {
    name: '',
  };

  handleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      toast.info('Please enter keyword');
      return;
    }
    this.props.onSubmit(this.state.name);
   
  };
 
  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <BiSearchAlt className="icon">Search</BiSearchAlt>
          </SearchButton>

          <SearchInput
            className="input"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchHeader>
    );
  }
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export { Searchbar };