import React, { Component } from 'react';
import Input from './Input';
import Button from '../Components/Button';

export default class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {};

  onSubmit = (e) => {
    e.preventDefault();
  };

  renderInput = (
    name,
    label,
    type = 'text',
    autoFocus = false,
    defaultValue
  ) => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={defaultValue || data[name]}
        label={label}
        type={type}
        onChange={this.handleChange}
        autoFocus={autoFocus}
        error={errors[name]}
      />
    );
  };

  renderButton = (label) => {
    return <Button title={label} />;
  };
}
