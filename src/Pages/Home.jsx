import React, { Component } from "react";
import Button from "../Components/Button";
import Dashboard from "../Components/Dashboard";
import { Link } from "react-router-dom";
import NewMovies from "../Components/NewMovies";
import RateMovies from "../Components/RateMovies";
import Genres from "../Components/Genres";

export default class Home extends Component {
  handleLike = () => {
    console.log("licked");
  };
  render() {
    return (
      <div className="pt-5 d-flex align-items-center rtl justify-content-center w-75 mx-auto">
        <div className="row contain w-100 d-flex align-items-center justify-content-center bg-light">
          <div id="welcom" className="col-3 py-5 px-3 d-flex flex-column">
            <h3 className="py-2 px-4 text-center m-0 my-3">سلام مهمان عزیز</h3>
            <h5 className="py-2 px-4 text-center m-0 my-3">
              به Vidly خوش اومدی
            </h5>
            <div className="my-3 mx-auto d-flex flex-column align-items-center gap-2">
              <h5 className="text-center mb-3">لطفا وارد شوید</h5>
              <Link to="/login">
                <Button title="ورود" type="button" />
              </Link>
              <p className="text-center m-0 fw-lighter small">
                هنوز عضو نشدید؟
              </p>
              <Link to="/register">
                <Button title="ثبت نام" type="button" />
              </Link>
            </div>
          </div>
          <div id="content" className="col-9  px-0 py-4">
            <div className="p-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="py-2 px-3 m-0 d-inline-flex text-nowrap">
                جدیدترین ها
              </h6>
              <NewMovies sorted="newest" onClick={this.handleLike} />
            </div>
            <hr className="w-50 my-0 mx-auto" />
            <div className="p-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="py-2 px-3 m-0 d-inline-flex text-nowrap">
                محبوب ترین ها
              </h6>
              <RateMovies sorted="rate" onClick={this.handleLike} />
            </div>
            <Genres />
            <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}
