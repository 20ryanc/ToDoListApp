import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Task from '../components/Task'
import { theme } from '../core/theme'
import Header from '../components/Header'
import { logout } from '../helpers/connector'

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logout}>
        <TouchableOpacity
          onPress={() =>{
            navigation.reset({
              index: 0,
              routes: [{ name: 'StartScreen' }],
            });
            logout().then(()=>console.log("logout")).catch(()=>(consol.log("logout failed")));
            }
          }
        >
        <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksWrapper}>
        <Header>Today's Task</Header>

        <View style={styles.item}>
          <Task text={'Task1'} />
          <Task text={'Task2'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  tasksWrapper: {
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 30,
    
  },
  logout: {
    zIndex: 1,
    position: 'relative',
    marginTop: 40,
    marginLeft: 315,
  },
  logoutText: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  }
});
