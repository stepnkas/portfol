import React, { useEffect, useState } from 'react';
import { Button, Form, FormProps, Input } from "antd";
import { User } from './models/User';

type FieldType = {
    username?: string;
    password?: string;
};

const onFinish: FormProps<User>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<User>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const RegisterForm: React.FC = () => {
    const [role, setRole] = useState("user"); 
  
    const onFinish = async (values: { username: string; password: string }) => {
      const { username, password } = values;
  
      const assignedRole = username === "Step" ? "admin" : "user";
  
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          password: password,
          role: assignedRole,
        }),
      });
  
      if (res.ok) {
        const newUser = await res.json();
        console.log("User registered:", newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
      } else {
        const errorData = await res.json();
        console.error("Registration failed", errorData);
      }
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
  
    return (
      <Form
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button style={{backgroundColor: '#4a9a9f', color: 'black' }} type="primary" htmlType="submit">
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
export default RegisterForm;
