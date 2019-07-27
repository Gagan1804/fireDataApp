import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import firebase from "firebase";

import { createStackNavigator, createAppContainer } from "react-navigation";

import InsertPage from "./screens/InsertPage.js";
import DeletePage from "./screens/DeletePage.js";
import UpdatePage from "./screens/UpdatePage.js";
import ShowData from "./screens/ShowData.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyW6jZIlEg3_LyIeVIyZdyt3JzrZERl8I",
  authDomain: "datafireapp.firebaseapp.com",
  databaseURL: "https://datafireapp.firebaseio.com",
  projectId: "datafireapp",
  storageBucket: "datafireapp.appspot.com"
};

firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <View style={styles.containerColm}>
        <View>
          <Image
            style={{ width: 200, height: 100 }}
            source={require("./assets/fireBase.png")}
          />
        </View>

        <View>
          <View style={styles.containerRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Insert")}
            >
              <Text style={styles.buttonText}>Insert</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("View")}
            >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Update")}
            >
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Delete")}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    App: {
      screen: App,
      navigationOptions: { header: null }
    },
    Insert: {
      screen: InsertPage
    },
    Delete: {
      screen: DeletePage
    },
    Update: {
      screen: UpdatePage
    },
    View: {
      screen: ShowData
    }
  },
  {
    initialRouteName: "App"
  }
);

export default createAppContainer(RootStack);

const styles = StyleSheet.create({
  containerColm: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    justifyContent: "center"
  },
  button: {
    marginTop: 30,
    backgroundColor: "#0000ff",
    margin: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingRight: 20,
    paddingTop: 10,
    borderRadius: 40
  },
  buttonText: {
    fontSize: 20,
    color: "#fff"
  },
  header: {
    fontSize: 30,
    color: "#0000e6"
  },
  containerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});
