import React from "react";
import DashboardSection from "../Components/DashboardSection";

export default function Dashboard() {
  return (
    <>
      <hr className="w-50 my-0 mx-auto" />
      <div className="p-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="py-2 px-3 m-0 d-inline-flex">داشبورد</h6>
        <ul className="d-flex flex-row align-items-start mb-0 mt-2 w-100 justify-content-center px-5">
          <DashboardSection
            link="/profile"
            title="اطلاعات کاربری"
            icon={<i className="bi bi-person-circle fs-4"></i>}
          />
          <DashboardSection
            link="/changepassword"
            title="تغییر رمز"
            icon={<i className="bi bi-fingerprint fs-4"></i>}
          />
          <DashboardSection
            link="/favorite"
            title="مورد علاقه ها"
            icon={<i className="bi bi-heart-fill fs-4"></i>}
          />
          <DashboardSection
            link="/logout"
            title="خروج"
            icon={<i className="bi bi-box-arrow-right fs-4"></i>}
          />
        </ul>
      </div>
    </>
  );
}
