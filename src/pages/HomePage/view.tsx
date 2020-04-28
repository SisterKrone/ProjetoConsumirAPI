import React, {Component,ReactNode} from 'react'
import { Text, View, TextInput, Button } from 'react-native'
export class HomeBody extends Component<any, any>{
    render(): ReactNode{
        const {actions}=this.props;
        return(
            <View>
                <Text>Login:  </Text>
                <TextInput keyboardType= 'name-phone-pad'
                onChangeText={ (value)=>actions.setLogin(value) } 
                />

                <Text>Senha: </Text>
                <TextInput keyboardType= 'name-phone-pad'
                onChangeText={ (value)=>actions.setSenha(value) } 
                />

                <Button onPress={()=> actions.logar() } title='Logar' color='green'  />
                <Button onPress={()=> actions.cadastrar() } title='Cadastre-se'  />
                
            </View>
        )
     
    }

}