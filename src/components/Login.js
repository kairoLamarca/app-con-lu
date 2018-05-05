import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

class login extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../imgs/consorcio_logo.png')}>
                    </Image>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', padding: 15 }}>
                    <TextInput
                        style={{ fontSize: 20, height: 45, margin: 15 }}
                        placeholder='Usuário'
                    />
                    <TextInput
                        secureTextEntry
                        style={{ fontSize: 20, height: 45, margin: 15 }}
                        placeholder='Senha'
                    />
                    <View style={{ margin: 15 }}>
                        <Button
                            title="Acessar"
                            color="#0076b6"
                            onPress={() => Actions.home()}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>
                        Desenvolvido pelo T.I. do Consórcio Luiza
                    </Text>
                    <Image
                        style={{ width: 20, height: 20, marginLeft: 5 }}
                        source={require('../imgs/logoTI.png')}
                    >
                    </Image>
                </View>
            </View>
        )
    };
};

export default login;
