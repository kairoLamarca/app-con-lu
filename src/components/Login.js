import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

class login extends Component {
    render() {
        return (
            <View>
                <Text>
                    Formulário de login
                </Text>
                <TouchableHighlight onPress={() => Actions.home()}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Tela Inicial</Text>
                </TouchableHighlight>
            </View>
        )
    };
};

export default login;
