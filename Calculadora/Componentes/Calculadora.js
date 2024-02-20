import React, { useState } from 'react';
import { View } from 'react-native';
import { Boton, Caja } from './Atomicos'; // Asegúrate de que las rutas sean correctas
import { estilos } from './Estilos'; // Asegúrate de que la ruta sea correcta

export const Calculadora = () => {
    const [valorActual, setValorActual] = useState('0');
    const [ultimoValor, setUltimoValor] = useState(null);
    const [operacion, setOperacion] = useState(null);

    const manejarInput = (input) => {
        switch (input) {
            case 'c':
                setValorActual('0');
                setUltimoValor(null);
                setOperacion(null);
                break;
            case 'ce':
                setValorActual(valorActual.substring(0, valorActual.length - 1) || '0');
                break;
            case '=':
                if (!ultimoValor || !operacion) return;
                calcular();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                setUltimoValor(valorActual);
                setOperacion(input);
                setValorActual('');
                break;
            default:
                setValorActual(valorActual === '0' ? input : valorActual + input);
                break;
        }
    };

    const calcular = () => {
        let resultado = parseFloat(ultimoValor);
        const valorActualFloat = parseFloat(valorActual);

        switch (operacion) {
            case '+':
                resultado += valorActualFloat;
                break;
            case '-':
                resultado -= valorActualFloat;
                break;
            case '*':
                resultado *= valorActualFloat;
                break;
            case '/':
                resultado /= valorActualFloat;
                break;
            default:
                return;
        }

        setValorActual(String(resultado));
        setOperacion(null);
        setUltimoValor(null);
    };

    return (
        <View style={estilos.container}>
            <Caja valor={valorActual} />
            <View style={estilos.botonescontainer}>
                <View style={estilos.orden}>
                    <Boton texto={'c'} accion={() => manejarInput('c')} />
                    <Boton texto={'ce'} accion={() => manejarInput('ce')} />
                    <Boton texto={'%'} />
                    <Boton texto={'/'} accion={() => manejarInput('/')} />
                </View>
                <View style={estilos.orden}>
                    <Boton texto={'7'} accion={() => manejarInput('7')} />
                    <Boton texto={'8'} accion={() => manejarInput('8')} />
                    <Boton texto={'9'} accion={() => manejarInput('9')} />
                    <Boton texto={'*'} accion={() => manejarInput('*')} />
                </View>
                <View style={estilos.orden}>
                    <Boton texto={'4'} accion={() => manejarInput('4')} />
                    <Boton texto={'5'} accion={() => manejarInput('5')} />
                    <Boton texto={'6'} accion={() => manejarInput('6')} />
                    <Boton texto={'-'} accion={() => manejarInput('-')} />
                </View>
                <View style={estilos.orden}>
                    <Boton texto={'1'} accion={() => manejarInput('1')} />
                    <Boton texto={'2'} accion={() => manejarInput('2')} />
                    <Boton texto={'3'} accion={() => manejarInput('3')} />
                    <Boton texto={'+'} accion={() => manejarInput('+')} />
                </View>
                <View style={estilos.orden}>
                    <Boton texto={''} />
                    <Boton texto={'0'} accion={() => manejarInput('0')} />
                    <Boton texto={'.'} accion={() => manejarInput('.')} />
                    <Boton texto={'='} accion={() => manejarInput('=')} />
                </View>
            </View>
        </View>
    );
};
