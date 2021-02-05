import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../../utils";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const { PRYMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

const WeatherDetails = ({ weather, unitMetric }) => {
  const {
    feelslike_c,
    humidity,
    wind_mph,
    pressure_mb,
    wind_kph,
  } = weather.current;

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={PRYMARY_COLOR}
            />
            <Text>feels like: {feelslike_c}°</Text>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="water"
              size={25}
              color={PRYMARY_COLOR}
            />
            <Text>humadity: {humidity}%</Text>
          </View>
        </View>
      </View>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
            borderTopColor: BORDER_COLOR,
            borderTopWidth: 1,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={25}
              color={PRYMARY_COLOR}
            />
            <Text>wind speed: {unitMetric ? wind_mph : wind_kph}</Text>
          </View>
        </View>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderTopColor: BORDER_COLOR,
            borderTopWidth: 1,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="speedometer"
              size={25}
              color={PRYMARY_COLOR}
            />
            <Text>Presure: {pressure_mb}hPa</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
    margin: 15,
  },
  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
});

export default WeatherDetails;
