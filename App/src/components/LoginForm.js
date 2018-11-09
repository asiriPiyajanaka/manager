import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Container, Header,Label, Item, Input, Card, CardItem, Content, Button, Text, Body, Right, Icon, Title } from 'native-base';
import HeaderRed from './common/HeaderRed';

class LoginForm extends Component {
    render() {
        return (
            <Content>
                <HeaderRed headerText="Login" />
                <Card>
                    <CardItem header>
                        <Text>Login</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input returnKeyType='next'/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input returnKeyType='next' secureTextEntry/>
                        </Item>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Text>GeekyAnts</Text>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

export default LoginForm;