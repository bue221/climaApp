import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { colors } from "../../utils";

const WeatherInfo = ({ weather, unitMetric }) => {
  const {
    condition: { icon, text },
    temp_c,
    temp_f,
  } = weather.current;
  const { country, name } = weather.location;

  const iconImg = weather && icon;
  const temp = unitMetric === "temp_c" ? temp_c : temp_f;

  return (
    <View style={styles.weatherInfo}>
      <Text>{text}</Text>
      <Image source={{ uri: `http:${iconImg}` }} style={styles.iconWeather} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.textSecondary}>
        {country} - {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  iconWeather: {
    width: 100,
    height: 100,
  },
  textPrimary: {
    fontSize: 40,
    color: colors.PRYMARY_COLOR,
  },
  textSecondary: {
    fontSize: 20,
    color: colors.SECONDARY_COLOR,
    fontWeight: "500",
    marginTop: 10,
  },
});

export default WeatherInfo;
