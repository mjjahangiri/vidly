import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import bcryptjs from "bcryptjs";
export default class ChangePassword extends Component {
  state = {
    oldPass: {},
    newPass: {},
    reNewPass: {},
  };

  passHandle = async (e) => {
    e.preventDefault();
    const { user } = this.props;
    const { oldPass, newPass, reNewPass } = this.state;
    if (!bcryptjs.compareSync(oldPass, user.password))
      return alert("پسورد قبل اشتباه است");
    else if (newPass !== reNewPass)
      return alert("پسورد جدید و تکرارش یکسان نیستند");

    try {
      await axios.patch(
        `https://622a732d14ccb950d21cb2e4.mockapi.io/users/${user.id}`,
        {
          password: newPass,
        }
      );
      alert("پسورد شما با موفقیت عوض شد");
      window.location = "/";
    } catch (error) {
      alert(error);
    }
  };

  oldPassHandle = ({ target }) => {
    const { value } = target;
    this.setState({ oldPass: value });
  };
  newPassHandle = ({ target }) => {
    const { value } = target;
    this.setState({ newPass: value });
  };
  reNewPassHandle = ({ target }) => {
    const { value } = target;
    this.setState({ reNewPass: value });
  };

  render() {
    const { user } = this.props;
    return (
      <div className="pt-5 d-flex main align-items-center flex-column rtl justify-content-center w-100 mx-auto">
        <div className="row contain w-50 d-flex align-items-center my-5 justify-content-center bg-light">
          <div className="w-50 py-3 my-5 mx-auto flex-column d-flex align-items-center justify-content-center">
            <form className="w-75" onSubmit={this.passHandle}>
              <Input
                name="oldPass"
                label="پسورد قبل"
                autoFocus={true}
                type="text"
                onChange={this.oldPassHandle}
              />
              <Input
                name="newPass"
                label="پسورد جدید"
                type="password"
                onChange={this.newPassHandle}
              />
              <Input
                name="reNewPass"
                label="تکرار پسورد جدید"
                type="password"
                onChange={this.reNewPassHandle}
              />
              <div className="d-flex align-items-center justify-content-between mt-5">
                <Button title="ثبت" type="submit" />
                <Link to="/">
                  <Button title="انصراف" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
