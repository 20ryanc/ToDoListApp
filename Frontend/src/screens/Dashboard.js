import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import Task from '../components/Task'

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Header>Today's Tasks</Header>
        <View style={styles.items}>
          <Task>Task1</Task>
          <Task>Task2</Task>
        </View>
      </View>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
        style={styles.logout}
      >
        Logout
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items: {},
  logout: {
    position: 'absolute',
    bottom: 30,
  },
})
