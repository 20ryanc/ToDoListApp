import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Task from '../components/Task'
import { theme } from '../core/theme'
import Header from '../components/Header'
import Button from '../components/Button'

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Header>Today's Task</Header>

        <View style={styles.item}>
          <Task text={'Task1'} />
          <Task text={'Task2'} />
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items: {},
  logout: {
    position: 'absolute',
    bottom: 30
  },
});
