import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    license: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  reset = () => {
    this.setState({
      name: '',
      tag: '',
      experience: 'junior',
    });
  };

  handleChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
    this.setState({ license: false });
  };

  handleLicenseChange = ({ currentTarget: { checked } }) => {
    this.setState({ license: checked });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor={this.tagInputId}>
          Tag
          <input
            type="text"
            name="tag"
            id={this.tagInputId}
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <p>Ваш уровень</p>
        <label>
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
        </label>
        <br />
        <label>
          Middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
        </label>
        <br />
        <label>
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="license"
            onChange={this.handleLicenseChange}
            checked={this.state.license}
          />
          "Согласен с условиями труда ;)"
        </label>
        <button type="submit" disabled={!this.state.license}>
          Отправить
        </button>
      </form>
    );
  }
}

export default Form;
