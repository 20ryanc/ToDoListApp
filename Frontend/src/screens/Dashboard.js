import React, {useState} from 'react'
import { StyleSheet, Modal, Pressable, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, Keyboard } from 'react-native'
import Task from '../components/Task'
import { theme } from '../core/theme'
import Header from '../components/Header'
import { logout } from '../helpers/connector'

export default function Dashboard({ navigation }) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.logoutText}>Finished you task?</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => {
                completeTask()
                setModalVisible(!modalVisible)
              }}
            >
              <Text>YES</Text>
            </Pressable>
            <Pressable
              style={[styles.button]}
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <Text>NOT YET</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.tasksWrapper}>
        <Header>Today's Task</Header>

        <View style={styles.item}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => setModalVisible(true)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      {/* write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height" }
        style={styles.writeTaskWrapper}
      >
          <TextInput style={styles.input} 
            placeholder={"write a task"} 
            value={task} 
            onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
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
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    width: 250,
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
  addText: {},
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
