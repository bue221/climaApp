import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import { Picker } from "@react-native-community/picker";

const UnitPicker = ({ unitMetric, setUnicMetric }) => {
  return (
    <View style={styles.unitSystem}>
      <Picker
        selectedValue={unitMetric}
        onValueChange={(i) => setUnicMetric(i)}
      >
        <Picker.Item label="C" value="temp_c" />
        <Picker.Item label="F" value="temp_f" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  unitSystem: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 20,
      },
    }),
    left: 20,
    height: 50,
    width: 100,
  },
});

export default UnitPicker;
