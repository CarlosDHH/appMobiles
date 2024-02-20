import { ActivityIndicator, Alert, Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const Clima = () => {
    const [dato, setDato] = useState(null);
    const [load, setLoad] = useState(false);

    // API key de OpenWeatherMap corregida
    const apiKey = 'ea690b399da7d80410d303ab4ba8ecf7';
    // Utilizaremos la ciudad de Londres para este ejemplo
    const cityId = '2643743'; // ID de la ciudad para Londres, GB

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric&lang=es`)
        .then((res) => res.json())
        .then((obj) => {
            setDato(obj);
            setLoad(true);
        })
        .catch((err) => Alert.alert('Ocurrió un error: ' + err));
    }, []);

    const screenL = () => {
        // Verifica si dato y dato.weather existen antes de intentar acceder a sus propiedades
        if (!dato || !dato.weather || dato.weather.length === 0) {
            return screenU(); // Si no existen, muestra la pantalla de carga
        }

        // Construir URL para el ícono del clima, asegurándose de que dato.weather[0].icon exista
        const iconUrl = `http://openweathermap.org/img/w/${dato.weather[0].icon}.png`;

        return (
            <View>
                <Text>Clima Actual en {dato.name}</Text>
                <Text>Temperatura: {dato.main.temp} °C</Text>
                <Text>Descripción: {dato.weather[0].description}</Text>
                <Image source={{ uri: iconUrl }} style={{ height: 100, width: 100 }} />
                <Text>Humedad: {dato.main.humidity}%</Text>
                <Text>Presión: {dato.main.pressure} hPa</Text>
            </View>
        );
    };

    const screenU = () => {
        return (
            <View>
                <Text>Cargando Datos del Clima...</Text>
                <ActivityIndicator/>
            </View>
        );
    };

    return (
        <View>
            {load ? screenL() : screenU()}
        </View>
    );
};

export default Clima;
