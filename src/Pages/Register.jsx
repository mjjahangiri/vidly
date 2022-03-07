import React from "react";
import Form from "../Components/Form";
import Joi from "joi";
export default class Register extends Form {
  state = {
    data: { Fname: "", Lname: "", username: "", email: "", password: "" },
    errors: {},
  };

  schema = {
    Fname: Joi.string().required().label("نام"),
    Lname: Joi.string().required().label("نام خانوادگی"),
    username: Joi.string().required().label("نام کاربری"),
    email: Joi.string().required().label("ایمیل"),
    password: Joi.string().min(6).required().label("رمز عبور"),
    rePassword: Joi.ref("password"),
  };

  render() {
    return (
      <>
        <div className="main p-0 m-0 position-absolute w-100">
          <div className="w-50 mx-auto my-5 pt-5">
            <div className="row contain bg-light px-5 py-4 w-100 d-flex align-items-center justify-content-center">
              <form className="px-5" onSubmit={this.onSubmit}>
                <h3 className="text-center m-0 mb-4">ثبت نام</h3>
                <div className="d-flex flex-row justify-content-between">
                  <div className="col me-3">
                    {this.renderInput("Lname", "نام خانوادگی", "text")}
                  </div>
                  <div className="col ms-3">
                    {this.renderInput("Fname", "نام", "text", true)}
                  </div>
                </div>
                {this.renderInput("username", "نام کاربری", "text")}
                {this.renderInput("email", "ایمیل", "email")}
                {this.renderInput("password", "رمز عبور", "password")}
                {this.renderInput("rePassword", "تکرار رمز عبور", "password")}
                {this.renderButton("ثبت نام")}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
