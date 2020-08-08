import React from 'react';
import  styles  from "./Login.module.scss";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUserAction } from '../actions';
import { setCookie } from "../../../../utils/cookies";

const Login = props => {

  const onFinish = values => {
    delete values.remember;

    props.dispatch(loginUserAction(values));
  };

    let success, message;
    success = props.state.auth.login.response.success;
    message = props.state.auth.login.response.message;
    
    if (success) {
      localStorage.setItem("token",props.state.auth.login.response.data.token);
      setCookie("token",props.state.auth.login.response.data.token,{domain:'localhost',path:'/'})

    }
    let isAuthenticate;
    if(localStorage.getItem("token")){
      isAuthenticate = true
    }
    if(isAuthenticate){
      return (
        <Redirect to="/dashboard" />
      )
    }else{
  return (
    <div className={styles.loginForm}>
         <div>
          <h1 className={styles.title}>School Tribe</h1>
          <p className={styles.center}><b>"Teach better, together"</b></p>
          <h2 className={styles.center}>Login</h2>
        </div>
        {!success ? <div style={{color:"red",textAlign:"center",padding:"10px"}}>{message}</div> : <Redirect to='/dashboard' />}
    <Form
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link to="/forgotPassword" className={styles.loginFormForgot} href="">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
          Log in
        </Button>
      </Form.Item>
      <div className={styles.center}>              
          <Link to="/signup">Register now!</Link>
        </div>
    </Form>
    </div>
  );
  }
};

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps,null)(Login);