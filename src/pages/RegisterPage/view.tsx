import React, {Component,ReactNode} from 'react'
import { Text, View, TextInput, Button } from 'react-native'
export class HomeBody extends Component<any, any>{
    render(): ReactNode{
        const {actions}=this.props;
        return(
            <View>
                <Text>Address:  </Text>
                <TextInput keyboardType= 'name-phone-pad'
                onChangeText={ (value)=>actions.setAddress(value) } 
                />

                <Text>Age: </Text>
                <TextInput keyboardType= 'numeric'
                onChangeText={ (value)=>actions.setAge(value) } 
                />
                
                <Text>Email: </Text>
                <TextInput keyboardType= 'name-phone-pad'
                onChangeText={ (value)=>actions.setEmail(value) } 
                />

                <Text>Name: </Text>
                <TextInput keyboardType= 'name-phone-pad'
                onChangeText={ (value)=>actions.setName(value) } 
                />

                <Text>User_Password: </Text>
                <TextInput keyboardType= 'name-phone-pad'secureTextEntry={true}
                onChangeText={ (value)=>actions.setUserpassword(value) } 
                />

                <Button onPress={()=> actions.cadastrar() } title='Registrar'  />
                                
            </View>
        )
     
    }

}