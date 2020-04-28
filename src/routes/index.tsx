import React,{ReactNode,Component} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {HomePage}from '../pages/HomePage'
import {RegisterPage}from '../pages/RegisterPage'
import {ListPage}from '../pages/ListPage'

export default class Routes extends Component {
    render(): ReactNode{
    const StackNavigator= createStackNavigator()
    return (
       <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen
                name={"home"} component={HomePage}
                options={{title:"Login"}}
                />
                
            </StackNavigator.Navigator>
       </NavigationContainer>
    )
    
    }
}
