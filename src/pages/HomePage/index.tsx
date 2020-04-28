import React, { Component,ReactNode } from 'react';

import { HomeBody} from './view';
import api from '../../utils/api';
type State={login:String , senha:String};

export class HomePage extends Component<any,State>{
    constructor(props:any){
        super(props)
        this.state= {login : '' , senha: ''  }
    };
    public setLogin(value: String):void {
        this.setState( {login: value} )

    };
    public setSenha(value: String):void {
        this.setState( {senha: value} )

    };

    public async logar(): Promise<void>{
        console.log("State: ",this.state);
        
        const body ={
           login:this.state.login,
           password:this.state.senha
          }
        const response=await api.post('/user/login',body);
        const token = response.data;
        this.props.navigation.navigate('Listagem')

        
    }
    public async cadastrar(): Promise<void>{
        this.props.navigation.navigate('Cadastro')

    }


    render(): ReactNode{
        return(
            <HomeBody actions={this}/>
        )
    }



}
