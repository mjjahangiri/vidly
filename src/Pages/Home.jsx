import React from "react";

export default function Home() {
  return (
    <div className="position-relative vh-100 d-flex align-items-center rtl justify-content-center w-75 mx-auto">
      <div
        id="contain"
        className="row w-75 d-flex align-items-center justify-content-center"
      >
        <div id="welcom" className="col-4 py-5 px-3 d-flex flex-column">
          <h3 className="py-2 px-5 text-center m-0 my-3">سلام کاربر عزیز</h3>
          <h5 className="py-2 px-5 text-center m-0 my-3">به Vidly خوش اومدی</h5>
        </div>
        <div id="content" className="col-8  p-0 ">
          <div className="p-1">
            <h6 className="py-2 px-3 m-0">جدیدترین ها</h6>

            <ul className="d-flex flex-row align-items-start mb-0 mt-2 justify-content-center">
              <li className="d-flex flex-column justify-content-between mx-2 text-center">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
                  height="150"
                  alt="Movie"
                />
                <p className="my-2 mx-0">The Lion King</p>
                <p className="mt-0 mb-2">2019</p>
              </li>
              <li className="d-flex flex-column justify-content-between mx-2 text-center">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
                  height="150"
                  alt="Movie"
                />
                <p className="my-2 mx-0">Mowgli: Legend of the Jungle</p>
                <p className="mt-0 mb-2">2018</p>
              </li>
              <li className="d-flex flex-column justify-content-between mx-2 text-center">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
                  height="150"
                  alt="Movie"
                />
                <p className="my-2 mx-0">Doctor Strange</p>
                <p className="mt-0 mb-2">2016</p>
              </li>
              <li className="d-flex flex-column justify-content-between mx-2 text-center">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
                  height="150"
                  alt="Movie"
                />
                <p className="my-2 mx-0">John Wick</p>
                <p className="mt-0 mb-2">2014</p>
              </li>
            </ul>
          </div>
          <hr className="w-50 my-0 mx-auto" />
          <div className="p-3">
            <h6>محبوب ترین ها</h6>
          </div>
          <hr className="w-50 my-0 mx-auto" />
          <div className="p-3">
            <h6>ژانرها</h6>
          </div>
          <hr className="w-50 my-0 mx-auto" />
          <div className="p-3">
            <h6>داشبورد</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
