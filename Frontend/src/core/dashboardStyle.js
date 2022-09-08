import { StyleSheet } from "react-native";
import { theme } from '../core/theme'

export const DashboardStyles = StyleSheet.create({
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
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    searchBar: {
      height: 40,
      marginBottom: 15,
      paddingHorizontal: 15,
      width: 350,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: theme.colors.secondary,
      borderWidth: 1,
      fontSize: 20,
      color: theme.colors.secondary,
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      width: 250,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: theme.colors.primary,
      borderWidth: 1,
      fontSize: 20,
      color: theme.colors.primary,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      borderColor: theme.colors.primary,
      alignItems: 'center',
      borderWidth: 1.
    },
    addText: {
      fontWeight: 'bold',
      fontSize: 35,
      color: theme.colors.primary
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#00F",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
  });
  