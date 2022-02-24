import React from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

export default function Register() {
  return (
    <div className="w-50 mx-auto mt-4">
      <div className="row contain px-5 py-4 w-100 d-flex align-items-center justify-content-center">
        <form className="px-5">
          <h3 className="text-center m-0 mb-4">ثبت نام</h3>
          <Input label="نام و نام خانوادگی" type="text" />
          <Input label="نام کاربری" type="text" />
          <Input label="ایمیل" type="email" />
          <Input label="رمز عبور" type="password" />
          <Input label="تکرار رمز عبور" type="password" />
          <Button type="submit" color="primary" title="ثبت نام" />
        </form>
      </div>
    </div>
  );
}
