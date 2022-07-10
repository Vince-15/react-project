import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Form, Button, Input } from 'antd'
import './login.less'
const Login = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Success:', values)
    navigate('/main')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Card
      title="博客后台管理系统"
      style={{
        width: 500,
        height: 300,
      }}
      headStyle={{ textAlign: 'center' }}
      className="wrapper"
    >
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        // wrapperCol={{
        //   span: 16,
        // }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Login
