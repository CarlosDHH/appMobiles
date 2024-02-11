import {Pressable,Image,Text, View} from 'react-native'
import { estilos } from './Estilos'

export const Boton=({texto,logo,accion,colorA,colorB})=>{
    return(
      <Pressable
        style={({pressed})=>[{
          backgroundColor:pressed?colorB:colorA,
          margin: pressed?5:5
        },estilos.boton]}
        onPress={accion}
        >
        <Image 
        style={estilos.logoB}
        source={logo}
        />
        <Text style={estilos.textoB} >{texto}</Text>
      </Pressable>
    )
  }

  export const Caja=({valor})=>{
    return(
        <View style={estilos.boxContainer}>
            <Text style={estilos.TextBox}>{valor}</Text>
        </View>
    )
  }