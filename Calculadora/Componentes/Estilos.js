import { StyleSheet } from "react-native";

export const estilos=StyleSheet.create({

    //Estilo contenedor
    container:{
      paddingTop:50,
    },
    //Estilos del boton
    boton:{
        backgroundColor:'black',
        padding:5,
        borderRadius:5,
        borderColor:'white',
        borderWidth:2,
        //margin:3,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        paddingRight:50,
        height:55,
        width:80,
      },
      textoB:{
        color:'white',
        fontSize:20
      },
      logoB:{
        height:35,
        width:35,
        marginRight:7
      },

    //Estilos de la caja
    boxContainer:{
        borderColor:'gray',
        borderWidth:2,
        borderRadius:5,
        height:70,
        margin:15,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:5,
        
    },
    TextBox:{
      color:'white',
        fontSize:30
    },

    //estilo de contenedor de los botones
    botonescontainer:{
        padding:10,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:''
    },
    orden:{
      paddingTop:5,
      display: 'flex',
      justifyContent:'center',
      flexDirection:'row'

    }
})