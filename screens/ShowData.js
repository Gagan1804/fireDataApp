import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import firebase from "firebase";
import { ScrollView } from "react-native-gesture-handler";

class ShowData extends Component {
  state = {
    data: null
  };
  async componentDidMount() {
    const dbRefObject = firebase.database().ref("users");

    await dbRefObject.on("value", async snap => {
      const data = await snap.val();
      const array = Object.values(data);
      console.log(array);
      this.setState({
        data: array
      });
    });
  }
  render() {
    const { data } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          {data &&
            data.map(element => {
              return (
                <View style={{ marginTop: 10, marginBottom: 10 }}>
                  <Text style={styles.elements}>{element.name}</Text>
                  <Text style={styles.elements}>{element.college}</Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
    );
  }
}

export default ShowData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffcc",
    padding: 20
  },
  elements: {
    color: "#0000ff",
    fontFamily: "prompt_medium",
    fontSize: 20
  }
});
