import React from 'react';

export class Searchbar extends React.Component {
  state = {
    name: '',
  };

    handleNameChange = event => {
        const { name, value } = event.currentTarget;
    this.setState({ [name] : value.toLowerCase() });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.name.trim() === '') {
            alert('STOP')
            return;
        }
        this.props.onSubmit(this.state.name);
        this.reset();
    }
    reset = () => {
        this.setState({name: ''})
    }
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
                    type="text"
                    name='name'
            value={this.state.name}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
