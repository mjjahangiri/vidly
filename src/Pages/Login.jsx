import React from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

export default function Login() {
  return (
    <div className="w-50 mx-auto mt-4">
      <div className="row contain px-5 py-4 w-100 d-flex align-items-center justify-content-center">
        <form className="px-5">
          <h3 className="text-center m-0 mb-4">ورود</h3>
          <Input label="نام کاربری" type="text" />
          <Input label="رمز عبور" type="password" />
          <Button type="submit" title="ورود" />
        </form>
      </div>
    </div>
  );
}
