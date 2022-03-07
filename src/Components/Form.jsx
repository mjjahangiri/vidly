import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import Button from "../Components/Button";

export default class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    const errors = {};
    if (!error) return null;

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleChange = ({ target: input }) => {
    const { data } = { ...this.state };
    const name = input.name;
    data[name] = input.value;
    this.setState({ data });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  renderInput = (
    name,
    label,
    type = "text",
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
