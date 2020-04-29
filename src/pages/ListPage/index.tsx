import React, { Component,ReactNode } from 'react';
import {Container, Content, List, ListItem,Text, Body } from 'native-base';

import api from '../../utils/api';
export class ListPage extends Component<any, any>{
    
    constructor(props:any){
        super(props)
       this.state={
           itens: []
       }
    };
   
    componentDidMount(){
        api.get('/product/list').then(list=>{
            this.setState({itens:list.data})
        })
        
    }
    
    render(): ReactNode{
        
        const itens:any[] = this.state.itens
        console.log(itens)
        return(
            <Container>

                <Content>
                    <List dataArray={itens} renderRow={(iten:any)=>(
                
                        <ListItem key={iten.id} > 
                            <Body>
                                
                                <Text>Nome: {iten.name}</Text>
                                <Text>Preço: {iten.price}U$</Text>
                            </Body>
                        </ListItem>
                     ) } />
                </Content>

            </Container>
        )   
        
     
    }

}