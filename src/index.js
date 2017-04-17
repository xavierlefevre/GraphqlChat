import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { ChatRoom } from "GraphqlChat/src/features";

export default class GraphqlChat extends Component {
  state = {
    showChatRoom: false
  };

  accessChatRoom() {
    this.setState({
      showChatRoom: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showChatRoom
          ? <ChatRoom />
          : <TouchableOpacity onPress={() => this.accessChatRoom()}>
              <Text>
                Access Chat Room
              </Text>
            </TouchableOpacity>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
