/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, useState } from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'
import posed from 'react-native-pose'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

type Props = {}

const Box = posed.View({
  visible: {
    opacity: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 10000 },
      default: { ease: 'linear', duration: 500 },
    },
  },
  hidden: { opacity: 0 },
})

export default function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <View>
      <Text style={styles.welcome}>Welcome to React Native!333~~~</Text>
      <Text>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title="Learn More22">
        Click me
      </Button>

      <Text>hey223</Text>

      <Box style={styles.box} pose={isVisible ? 'visible' : 'hidden'} />

      <Button onPress={() => setIsVisible(!isVisible)} title="Click me" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  box: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
})
