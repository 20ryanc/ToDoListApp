import React, {useState} from 'react'
import { Modal, Pressable, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, Keyboard } from 'react-native'
import Task from '../components/Task'
import { DashboardStyles } from '../core/dashboardStyle'
import Header from '../components/Header'
import { logout } from '../helpers/connector'

export default function Dashboard({ navigation }) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState("");

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
    <View style={DashboardStyles.container}>
      <View style={DashboardStyles.logout}>
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
        <Text style={DashboardStyles.logoutText}>Logout</Text>
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
        <View style={DashboardStyles.centeredView}>
          <View style={DashboardStyles.modalView}>
            <Text style={DashboardStyles.logoutText}>Finished your task?</Text>
            <Pressable
              style={[DashboardStyles.button]}
              onPress={() => {
                completeTask()
                setModalVisible(!modalVisible)
              }}
            >
              <Text>YES</Text>
            </Pressable>
            <Pressable
              style={[DashboardStyles.button]}
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <Text>NOT YET</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={DashboardStyles.tasksWrapper}>
        <Header>Task To Be Done</Header>
        {/* Search bar is here */}
        <TextInput style={DashboardStyles.searchBar}
            placeholder={"Search..."} 
            value={search} 
            onChangeText={text => setSearch(text)}/>
        <View style={DashboardStyles.item}>
          {
            taskItems
            .filter((item) => {
              if (item.toUpperCase().includes(search.toUpperCase())) {return item}
            })
            .map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => setModalVisible(true)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height" }
        style={DashboardStyles.writeTaskWrapper}
      >
          <TextInput style={DashboardStyles.input} 
            placeholder={"write a task"} 
            value={task} 
            onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={DashboardStyles.addWrapper}>
              <Text style={DashboardStyles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
