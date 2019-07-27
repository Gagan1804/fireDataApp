import React, { Component } from "react";
import firebase from "firebase";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

class UpdatePage extends Component {
  state = {
    name: "",
    college: "",
    id: ""
  };

  handleUpdate = () => {
    const { name, college, id } = this.state;
    firebase
      .database()
      .ref("users/")
      .child(id)
      .update({
        name: name,
        college: college
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
        <Text style={{ fontSize: 20, color: "#000" }}>
          Enter ID and the information you want to update:-
        </Text>
        <TextInput
          value={id}
          placeholder="Enter ID.."
          style={styles.input}
          onChangeText={id => this.setState({ id })}
        />
        <TextInput
          placeholder="Enter new name.."
          value={name}
          style={styles.input}
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          value={college}
          placeholder="Enter new college.."
          style={styles.input}
          onChangeText={college => this.setState({ college })}
        />

        <TouchableOpacity
          style={{
            marginTop: 50,
            backgroundColor: "#ff751a",
            padding: 10,
            borderRadius: 15
          }}
          onPress={() => this.handleUpdate()}
        >
          <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
            Update User
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default UpdatePage;

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
