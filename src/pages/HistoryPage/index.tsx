import React, { Component,ReactNode } from 'react';
import {Container, Content, List, ListItem,Text, Body } from 'native-base';
import repository from '../../utils/storage'

export class HistoryPage extends Component<any, any>{
    
    constructor(props:any){
        super(props)
       this.state={
           itens: []
       }
    };

    componentDidMount(){
        repository.list().then(list=>{
            this.setState({tokens:list})
        })
    }

    render(): ReactNode{
        const tokens:any[] = this.state.itens
        return(
            <Container>

                <Content>
                    <List dataArray={tokens} renderRow={(token:any)=>(
                
                        <ListItem>
                            <Body>
                                <Text>Token: {token}</Text>
                                
                            </Body>
                        </ListItem>
                     ) } />
                </Content>

            </Container>
           
        )
     
    }

}