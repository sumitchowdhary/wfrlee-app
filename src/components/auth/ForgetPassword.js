import { Button, Form, Input } from "antd";
import React from "react";
import logo from "../assets/images/admin-logo.png";
import { Link, useHistory } from "react-router-dom";

const ForgetPassword = () => {
  let history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleClick = () => {
    history.push("/secure-panel/login");
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
          >
            <h3 className="text-title">Provide email to reset password</h3>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Link className="text-titles" onClick={handleClick}>
              <b>Sign in</b>
            </Link>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Reset Password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
