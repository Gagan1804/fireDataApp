import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import firebase from "firebase";

class DeletePage extends Component {
  state = {
    name: "",
    college: "",
    id: ""
  };

  handleDelete = () => {
    const { id } = this.state;
    firebase
      .database()
      .ref("users/")
      .child(id)
      .remove();
    this.setState({
      id: ""
    });
  };

  render() {
    const { name, college, id } = this.state;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, color: "#000" }}>
          Enter the ID of person you for which you want to delete information:-
        </Text>
        <TextInput
          value={id}
          placeholder="ID.."
          style={styles.input}
          onChangeText={id => this.setState({ id })}
        />
        <TouchableOpacity
          style={{
            marginTop: 50,
            backgroundColor: "red",
            padding: 10,
            borderRadius: 15
          }}
          onPress={() => this.handleDelete()}
        >
          <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
            Delete User
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeletePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    margin: 20
  },
  input: {
    fontSize: 20,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    margin: 10
  }
});
