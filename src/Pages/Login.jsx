import React from "react";
import Form from "../Components/Form";
import Joi from "joi-browser";
import { authHandle } from "../App";
import url from "../config.json";

export default class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("نام کاربری"),
    password: Joi.string().required().label("رمز عبور"),
  };

  doSubmit = async () => {
    const { apiUrl } = url;
    const errors = await authHandle(`${apiUrl}/login`, this.state);
    this.setState({ errors });
  };

  render() {
    return (
      <>
        <div className="main p-0 m-0 position-absolute w-100">
          <div className="w-50 mx-auto my-5 pt-5">
            <div className="row contain bg-light px-5 py-4 w-100 d-flex align-items-center justify-content-center">
              <form className="px-5" onSubmit={this.onSubmit}>
                <h3 className="text-center m-0 mb-4">ورود</h3>
                {this.renderInput("email", "نام کاربری", "text", true)}
                {this.renderInput("password", "رمز عبور", "password")}
                {this.renderButton("ورود")}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
