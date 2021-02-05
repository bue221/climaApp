import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import * as location from "expo-location";

import {
  WeatherInfo,
  UnitPicker,
  ReloadIcon,
  WeatherDetails,
} from "./src/components";

const WEATHER_API_KEY = "6b87885fb717463284324551210102";

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [weather, setWeather] = useState(null);
  const [unitMetric, setUnicMetric] = useState("temp_c");

  const load = async () => {
    try {
      let { status } = await location.requestPermissionsAsync();

      if (status !== "granted")
        setErrorMessage("Access to location is needed to run the app");

      const coordenates = await location.getCurrentPositionAsync();
      const { latitude, longitude } = coordenates.coords;
      // alert("latitud: " + latitude + " longitud: " + longitude);

      // api
      const urlWeatherApi = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${latitude},${longitude}`;
      const res = await fetch(urlWeatherApi);
      const result = await res.json();

      if (res.ok) {
        setWeather(result);
      } else {
        setErrorMessage(result.message);
      }
    } catch (err) {
      setErrorMessage(err.message);
      alert(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        {weather ? (
          <>
            <UnitPicker unitMetric={unitMetric} setUnicMetric={setUnicMetric} />
            <ReloadIcon load={() => load()} />
            <WeatherInfo weather={weather} unitMetric={unitMetric} />
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
      {weather && <WeatherDetails weather={weather} unitMetric={unitMetric} />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});
