import React, { Component,ReactNode } from 'react';
import {Container, Content, List } from 'native-base';


export class HistoryPage extends Component<any, any>{
    render(): ReactNode{
        const {actions}=this.props;
        return(
            <Container>

                <Content>
                    <List />
                </Content>

            </Container>
           
        )
     
    }

}