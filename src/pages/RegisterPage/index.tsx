import React, { Component,ReactNode } from 'react';

import { HomeBody} from './view';
import api from '../../utils/api';
import repository from '../../utils/storage'
type State={address:String, age:number, email:String, name:String, userPassword:String};

export class RegisterPage extends Component<any,State>{
    constructor(props:any){
        super(props)
        this.state= {address : '' , age: 0, email:'', name:'', userPassword:''}
    };
    public setAddress(value: String):void {
        this.setState( {address: value} )

    };
    public setAge(value: number):void {
        this.setState( {age: value} )

    };
    public setEmail(value: String):void {
        this.setState( {email: value} )

    };
    public setName(value: String):void {
        this.setState( {name: value} )

    };
    public setUserpassword(value: String):void {
        this.setState({userPassword:value})

    };

    public async cadastrar(): Promise<void>{
        console.log("State: ",this.state);
        
        const body ={
            address:this.state.address,
            age:this.state.age,
            email:this.state.email,
            name:this.state.name,
            userPassword:this.state.userPassword
            
          }
        const response=await api.post('/user/customer/add',body);
        const token = response.data;
        repository.save(token)
        this.props.navigation.navigate('Listagem')

        
    }
   


    render(): ReactNode{
        return(
            <HomeBody actions={this}/>
        )
    }



}
