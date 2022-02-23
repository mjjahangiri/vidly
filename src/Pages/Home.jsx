import React from "react";

export default function Home() {
  return (
    <div className="pt-4 d-flex align-items-center rtl justify-content-center w-75 mx-auto">
      <div
        id="contain"
        className="row w-100 d-flex align-items-center justify-content-center"
      >
        <div id="welcom" className="col-3 py-5 px-3 d-flex flex-column">
          <h3 className="py-2 px-5 text-center m-0 my-3">سلام کاربر عزیز</h3>
          <h5 className="py-2 px-5 text-center m-0 my-3">به Vidly خوش اومدی</h5>
        </div>
        <div id="content" className="col-9  p-0 ">
          <div className="p-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="py-2 px-3 m-0 d-inline-flex">جدیدترین ها</h6>
          </div>
          <hr className="w-50 my-0 mx-auto" />
          <div className="p-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="py-2 px-3 m-0 d-inline-flex">محبوب ترین ها</h6>
          </div>
          <hr className="w-50 my-0 mx-auto" />
          <div className="p-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="py-2 px-3 m-0 d-inline-flex">ژانرها</h6>
          </div>
          <hr className="w-50 my-0 mx-auto" />
          <div className="p-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="py-2 px-3 m-0 d-inline-flex">داشبورد</h6>
            {/* <ul className="d-flex flex-row align-items-start mb-0 mt-2 w-100 justify-content-center">
              <li className="d-flex flex-column justify-content-between mx-2 text-center">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
                  height="150"
                  alt="Movie"
                />
                <p className="my-2 mx-0">The Lion King</p>
                <p className="mt-0 mb-2">2019</p>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
