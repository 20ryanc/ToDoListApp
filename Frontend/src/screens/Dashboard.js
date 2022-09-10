import React, {useState} from 'react'
import { Modal, Pressable, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, Keyboard, ScrollView, SafeAreaView } from 'react-native'
import Task from '../components/Task'
import { DashboardStyles } from '../core/dashboardStyle'
import Header from '../components/Header'
import {insertEntry, logout, getEntry, deleteEntry } from '../helpers/connector'

export default function Dashboard({ navigation }) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [begin, setBegin] = useState(true);
  const [taskError, setTaskError] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(0);

  if (begin) {
      setBegin(false);
      getEntry().then((content) => {
          console.log(content.data);
          let arr = [];
          content.data.forEach((obj) => {
              arr.push(obj.title);
          });
          setTaskItems(arr);
      })
  }

  const handleAddTask = () => {
    Keyboard.dismiss();
    console.log(task);
    if (task == null) {
      setTaskError("Task cannot be empty");
      return;
    }
    insertEntry([
            {
                "title": task,
            },
        ]).then(()=>{
        setTaskItems([...taskItems, task]);
        setTask(null);
        setTaskError("");
    }).catch(()=>{
        console.log("Failed to add task");
    })
  }

  const completeTask = () => {
    console.log(deleteIndex);
    console.log(taskItems.at(deleteIndex));
    deleteEntry(taskItems.at(deleteIndex)).then(()=>{
      let itemsCopy = [...taskItems];
      itemsCopy.splice(deleteIndex,1);
      setTaskItems(itemsCopy);
    }).catch((err)=>{
      console.log(err);
    })
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
            logout().then(()=>console.log("logout")).catch(()=>(console.log("logout failed")));
            }
          }
        >
        <Text style={DashboardStyles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setDeleteModalVisible(!deleteModalVisible);
        }}
      >
        <View style={DashboardStyles.centeredView}>
          <View style={DashboardStyles.modalView}>
            <Text style={DashboardStyles.logoutText}>Finished your task?</Text>
            <Pressable
              style={[DashboardStyles.button]}
              onPress={() => {
                completeTask()
                setDeleteModalVisible(!deleteModalVisible)
              }}
            >
              <Text>YES</Text>
            </Pressable>
            <Pressable
              style={[DashboardStyles.button]}
              onPress={() => {
                setDeleteModalVisible(!deleteModalVisible)
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
            <ScrollView style={DashboardStyles.item}>
              {
                taskItems
                  .filter((item) => {
                    if (item.toUpperCase().includes(search.toUpperCase())) {return item}
                  })
                  .map((item, index) => {
                    return (
                      <TouchableOpacity key={index}  onPress={() => {
                        setDeleteModalVisible(true);
                        setDeleteIndex(index);
                      }}>
                        <Task text={item} />
                      </TouchableOpacity>
                    )
                  })
              }
            </ScrollView>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height" }
        style={DashboardStyles.writeTaskWrapper}
      >
          <TextInput style={DashboardStyles.input} 
            placeholder={"write a task"} 
            value={task}
            onChangeText={text => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={DashboardStyles.addWrapper}>
              <Text style={DashboardStyles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
      {taskError != null && <Text style={DashboardStyles.error}>{taskError}</Text>}
    </View>
  );
}
