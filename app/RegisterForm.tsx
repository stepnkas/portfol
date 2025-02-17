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


const RegisterForm: React.FC = (asdUser) => {

    const [user, setUser] = useState<User[]>([]);
    const [name, setName] = useState("");
    const [role, setRole] = useState("user");

    useEffect(() => {
        async function getUser() {
            const res = await fetch("/api/user");
            const data = await res.json();


        }
        getUser()
    }, []);

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<User>
                label="Username"
                name="name"
                rules={[{ required: true, message: 'Заполните имя пж' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<User>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Заполните пароль пж' }]}
            >
                <Input.Password />
            </Form.Item>

            { }

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    )
}
export default RegisterForm;
