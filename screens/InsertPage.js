import React, { Component } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";
import firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";

class InsertPage extends Component {
  state = {
    name: "",
    college: "",
    id: ""
  };

  handleInsert = () => {
    const { name, college, id } = this.state;
    firebase
      .database()
      .ref("users/")
      .push({
        name: name,
        college: college,
        id: id
      });
    this.setState({
      name: "",
      college: "",
      id: ""
    });
  };

  render() {
    const { name, college, id } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="ID"
          value={id}
          style={styles.input}
          onChangeText={id => this.setState({ id })}
        />
        <TextInput
          placeholder="Name"
          value={name}
          style={styles.input}
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          value={college}
          placeholder="College"
          style={styles.input}
          onChangeText={college => this.setState({ college })}
        />
        <TouchableOpacity
          style={{
            marginTop: 50,
            backgroundColor: "#29a329",
            padding: 10,
            borderRadius: 15
          }}
          onPress={() => this.handleInsert()}
        >
          <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
            Add User
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default InsertPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20
  },
  input: {
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    margin: 10
  }
});
