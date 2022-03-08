import React, { Component } from "react";
import * as _ from "lodash";
import Button from "../Components/Button";
import Dashboard from "../Components/Dashboard";
import { Link } from "react-router-dom";
import NewMovies from "../Components/NewMovies";
import RateMovies from "../Components/RateMovies";
import Genres from "../Components/Genres";

export default class Home extends Component {
  render() {
    const { movies, onLike, user } = this.props;
    const sortedByYear = _.orderBy(movies, "year", "desc");
    const sortedByRate = _.orderBy(movies, "rate", "desc");
    return (
      <div className="pt-5 d-flex main align-items-center flex-column rtl justify-content-center w-100 mx-auto">
        <div className="row contain w-75 d-flex align-items-center my-5 justify-content-center bg-light">
          <div id="welcom" className="col-3 py-5 px-3 d-flex flex-column">
            <h3 className="py-2 px-4 text-center m-0 my-3">
              سلام {user === "" ? "مهمان" : user} عزیز
            </h3>
            <h5 className="py-2 px-4 text-center m-0 my-3">
              به Vidly خوش اومدی
            </h5>
            {!user && (
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
            )}
          </div>
          <div id="content" className="col-9  px-0 py-4">
            <div className="p-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="py-2 px-3 m-0 d-inline-flex text-nowrap">
                جدیدترین ها
              </h6>
              <NewMovies movies={sortedByYear} onClick={onLike} />
            </div>
            <hr className="w-50 my-0 mx-auto" />
            <div className="p-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="py-2 px-3 m-0 d-inline-flex text-nowrap">
                محبوب ترین ها
              </h6>
              <RateMovies movies={sortedByRate} onClick={onLike} />
            </div>
            <Genres />
            <Dashboard />
          </div>
        </div>
      </div>
    );
  }
}
