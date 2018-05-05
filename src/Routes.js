import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import login from './components/Login';
import home from './components/Home';

export default props => (
    <Router>
        <Stack key="root">
            <Scene key="login" component={login} title="Login" />
            <Scene key="home" component={home} title="Home" />
        </Stack>
    </Router>
);