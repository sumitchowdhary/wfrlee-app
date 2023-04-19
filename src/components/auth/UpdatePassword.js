import { Button, Form, Input } from "antd";
import React from "react";
import logo from "../assets/images/admin-logo.png";
import { Link, useHistory } from "react-router-dom";

const UpdatePassword = () => {
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
            <h3 className="text-title">Update Password</h3>
            <Form.Item
              name="currentPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your CurrentPassword!",
                },
              ]}
            >
              <Input.Password placeholder="Current Password" />
            </Form.Item>

            <Form.Item
              name="newPassword"
              rules={[
                { required: true, message: "Please input your New password!" },
              ]}
            >
              <Input.Password placeholder="New Password" />
            </Form.Item>

            <Form.Item
              name="cofirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirm password!",
                },
              ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Update Password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
