import { StyleSheet, Text, View } from "react-native";
import * as Location from 'expo-location';
import WeatherScreen from './WeatherScreen';
import { useEffect, useState } from "react";

const loc = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL
}

export default function Position() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [city, setCity] = useState(''); // Corrected destructuring here

    useEffect(() => {
        (async() => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            try {
                if (status === 'granted') {
                    const location = await Location.getLastKnownPositionAsync({accuracy: 6});
                    setLatitude(location.coords.latitude);
                    setLongitude(location.coords.longitude);
                } else {
                    setIsLoading(false);
                }
            } catch (error) {
                alert(error);
            }
        })();
    }, []);

    useEffect(() => {
        if (latitude !== 0 && longitude !== 0) {
            const url = loc.url +
            'data/2.5/weather?' +
            'lat=' + latitude +
            '&lon=' + longitude +
            '&units=metric' +
            '&lang=fi' +
            '&appid=' + loc.key
            fetch(url)
            .then(res => res.json())
            .then((json) => {
                if (json) {
                    setCity(json.name);
                } else {
                    setCity('City data not available');
                }
                setIsLoading(false);
            })
            .catch(error => {
                setCity('City data not available');
                setIsLoading(false);
                console.log(error);
            });
        }
    }, [latitude, longitude]);

    if (isLoading) {
        return <View style = {styles.container}><Text>Retrieving location...</Text></View>
    } else {
        return (
            <View style = {styles.container}>
                <Text style = {styles.label}>Sijaintisi:</Text>
                <Text>{city}</Text>
                <WeatherScreen latitude = {latitude} longitude = {longitude} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginTop: 10,
    }
});