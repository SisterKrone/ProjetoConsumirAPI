import {AsyncStorage} from 'react-native'

class Repository {

    public save(token:any): void{
        this.list().then(list =>{
        list.push(token)
        AsyncStorage.setItem('codigos_acesso', JSON.stringify(list))
        }) 
        
    }

    public async list(): Promise<any[]>{
        const jsonText=await AsyncStorage.getItem('codigos_acesso')
        
        if(!jsonText){
            return new Array<any>()
        }

        return JSON.parse(jsonText!)
    }

}

export default new Repository()