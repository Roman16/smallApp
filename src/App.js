import React, {Component} from 'react';
import Amplify from 'aws-amplify';
import {Route, Switch} from 'react-router-dom';

import config from './config';

import Header from './components/Header';
import Login from './components/Login';

import 'antd/dist/antd.css';
import './app.scss';


Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
});


class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />

                <Switch>
                    {/*<Route exact path='/' component={}/>*/}
                    <Route exact path='/login' component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default App;
