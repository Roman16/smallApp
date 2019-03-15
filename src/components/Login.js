import React, {Component} from 'react';
import {
    Form,
    Icon,
    Input,
    Button,
} from 'antd';
import Amplify, { Auth } from 'aws-amplify';

import '../styles/login.scss';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await Auth.signIn(this.state.email, this.state.password);
        } catch (e) {
            alert(e.message);
        }

        console.log(this.state)
    };

    render() {
        const {email, password} = this.state;

        return (
            <div className='login-page'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="Username"
                            value={email}
                            onChange={({target: {value}}) => this.setState({email: value })}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                            placeholder="Password"
                            value={password}
                            onChange={({target: {value}}) => this.setState({password: value })}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}


export default Login;