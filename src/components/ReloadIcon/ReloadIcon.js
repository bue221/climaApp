import React from 'react'
import { Platform, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ReloadIcon = ({ load }) => {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';
    return (
        <View style={styles.reloadIcon}>
          <TouchableOpacity onPress={load} >
          <Ionicons onPress={load} name={reloadIconName} size={24} color='black' />
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 30,
        right: 20
    }
})

export default ReloadIcon
