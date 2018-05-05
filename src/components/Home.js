import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

class home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>
                        Tela Inicial
                    </Text>
                    <Text>
                        Escolha uma das opções
                    </Text>
                </View>
                <View style={{ flex: 8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#ffce00', justifyContent: 'center', alignItems: 'center', margin: 15, height: 125, width: 125 }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor="#ffce00"
                            >
                                <Image source={require('../imgs/interrogacao.png')} />
                            </TouchableHighlight>
                            <Text>
                                FAQ
                        </Text>
                        </View>
                        <View style={{ backgroundColor: '#e25335', justifyContent: 'center', alignItems: 'center', margin: 15, height: 125, width: 125 }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor="#e25335"
                            >
                                <Image source={require('../imgs/boleto.png')} />
                            </TouchableHighlight>
                            <Text>
                                2ª VIA DO BOLETO
                        </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#bf2fdc', justifyContent: 'center', alignItems: 'center', margin: 15, height: 125, width: 125 }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor="#bf2fdc"
                            >
                                <Image source={require('../imgs/video.png')} />
                            </TouchableHighlight>
                            <Text>
                                ASSEMBLÉIA
                        </Text>
                        </View>
                        <View style={{ backgroundColor: '#33c3dd', justifyContent: 'center', alignItems: 'center', margin: 15, height: 125, width: 125 }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor="#33c3dd"
                            >
                                <Image source={require('../imgs/debito.png')} />
                            </TouchableHighlight>
                            <Text>
                                DÉBITO
                        </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#3fcb2a', justifyContent: 'center', alignItems: 'center', margin: 15, height: 125, width: 125 }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor="#3fcb2a"
                            >
                                <Image source={require('../imgs/atendimento.png')} />
                            </TouchableHighlight>
                            <Text>
                                ATENDIMENTO
                        </Text>
                        </View>
                        <View style={{ backgroundColor: '#72b98d', justifyContent: 'center', alignItems: 'center', margin: 15, height: 125, width: 125 }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor="#72b98d"
                            >
                                <Image source={require('../imgs/email.png')} />
                            </TouchableHighlight>
                            <Text>
                                E-MAIL
                        </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    };
};

export default home;
