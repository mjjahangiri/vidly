import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Like from "../Components/Like";
import Button from "./Button";
import url from "../config.json";

export default class MovieDetail extends Component {
  state = { movie: {} };

  async componentDidMount() {
    const { id } = this.props;
    const { apiUrl } = url;
    const { data: movie } = await axios.get(`${apiUrl}/movies/${id}`);
    this.setState({ movie });
  }

  render() {
    const { title, genre, like, year, rate, poster } = this.state.movie;
    const { onLike } = this.props;
    return (
      <div className="main">
        <div className="pt-5 my-5 d-flex flex-column align-items-stretch rtl justify-content-center w-75 row mx-auto">
          <div
            className="d-flex py-5 contain  flex-row align-items-center bg-light justify-content-evenly"
            id="movieMain"
          >
            <img src={poster} height="700" alt="" />
            <div className="px-5 d-flex flex-column ">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>
                      <h5 className="fw-bold">اسم:</h5>
                    </td>
                    <td>
                      <h5>{title}</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="fw-bold">سال تولید:</h5>
                    </td>
                    <td>
                      <h5>{year}</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="fw-bold">ژانر:</h5>
                    </td>
                    <td>
                      <h5>{genre}</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5 className="fw-bold">امتیاز:</h5>
                    </td>
                    <td>
                      <h5>{rate}</h5>
                    </td>
                  </tr>
                </tbody>
              </table>

              <ul className="d-flex p-0 m-0 align-items-center justify-content-between w-100">
                <li className="d-flex">
                  <Like
                    like={like}
                    onClick={() => {
                      onLike(this.state.movie);
                      const movie = { ...this.state.movie };
                      movie.like = !movie.like;
                      this.setState({ movie });
                    }}
                  />
                </li>
                <li className="d-flex">
                  <Link to="/movies">
                    <Button title="بازگشت" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
