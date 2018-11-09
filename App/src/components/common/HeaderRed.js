import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Container,
    Header,
    Button,
    Text,
    Body,
    Right,
    Icon,
    Title,
    Card
} from 'native-base';

const HeaderRed = (props) => {
    return (
        <Header style={{ backgroundColor: 'red' }}
            androidStatusBarColor="red" >
            {/* <Left>
                <Button transparent>
                  <Icon name='arrow-back' />
                </Button>
              </Left> */}
            <Body>
                <Title>{props.headerText}</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='search' />
                </Button>
                <Button transparent>
                    <Icon name='heart' />
                </Button>
                <Button transparent>
                    <Icon name='more' />
                </Button>
            </Right>
        </Header>
    );
};


export default HeaderRed;