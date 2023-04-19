import { Button, Form, Input } from "antd";
import React from "react";
import logo from "../assets/images/admin-logo.png";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleClick = () => {
    history.push("/secure-panel/forget-Password");
    window.location.reload(false);
  };
  return (
    <div className="login-wrapper">
      <div className="content">
        <div className="login-logo">
          <img src={logo} alt="Fitness Center" className="login-logo img" />
        </div>
        <div className="login-form">
          <Form
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h3 className="text-title">Log in to access the admin panel</h3>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Link className="text-titless" onClick={handleClick}>
              Forgot Password?
            </Link>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                LOGIN
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// <!-- login wrapper start -->
// <div class="login-wrapper">
//   <div class="content">
//      <div class="login-logo"><img src="assets/images/admin-logo.png" alt="Fitness Center"></div>
//      <div class="login-form">
//         <h3>Log in to access the admin panel</h3>
//         <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
//            <div class="form-group">
//               <input type="email" class="form-control" placeholder="Email" formControlName="email">
//               <small *ngIf="email?.hasError('required') && email?.dirty" style="color: red;">
//                 Email <strong>required</strong>
//               </small>
//               <small *ngIf="email?.hasError('email') && email?.dirty" style="color: red;">
//                 Please enter a valid email
//               </small>
//            </div>
//            <div class="form-group">
//                <div class="passwordInputBtn_wrap">
//                   <input type="{{pwdType}}" class="form-control" placeholder="Password" formControlName="password">
//                   <small *ngIf="password?.hasError('required') && password?.dirty" style="color: red;">
//                     Password is <strong>required</strong>
//                   </small>
//                   <button [ngClass]="[pwdVisible ?  'passHide' : 'passShow']" class="button_appearance_none password_eye_icon_btn" type="button" (click)="viewPassword()">
//                      <!-- "passShow passHide" -- class should be togle active to change the password show-eye-icon  -->
//                      <img class="password_eye_icon password_eye_icon_show" src="assets/images/eye_vision_view_icon.png" >
//                      <img class="password_eye_icon password_eye_icon_hide" src="assets/images/eye_slash_icon.png" >
//                   </button>
//                </div>

//            </div>
//            <div class="form-group text-center"><a class="txt-link" [routerLink]="['/secure-panel/forget-password']">Forgot Password?</a></div>
//            <div class="form-group mar-b-0">
//               <input type="submit" value="Login" [disabled]="loginForm.invalid">
//            </div>
//         </form>
//      </div>
//      <!-- <div class="form-group text-center"><a class="txt-link" href="#">Can't log in?</a></div> -->
//   </div>
// </div>
// <!-- login wrapper end -->
