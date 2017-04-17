import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, TextInput } from "react-native";

import conversation from "GraphqlChat/src/fixtures";

export default class ChatRoom extends Component {
  state = {
    conversation,
    message: ""
  };

  onChangeText(text) {
    this.setState({
      message: text
    });
  }

  saveMessage(event) {
    this.setState({
      conversation: [
        ...this.state.conversation,
        { text: event.text, timestamp: new Date().getTime() }
      ],
      message: ""
    });
  }

  displayMessages() {
    return this.state.conversation.map(message => (
      <Text key={message.timestamp}>{message.text}</Text>
    ));
  }

  render() {
    return (
      <View style={styles.chatRoom}>
        <ScrollView contentContainerStyle={styles.messages}>
          {this.displayMessages()}
        </ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Send a message"
          onSubmitEditing={({ nativeEvent }) => this.saveMessage(nativeEvent)}
          onChangeText={text => this.onChangeText(text)}
          value={this.state.message}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messages: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 25
  },
  input: {
    height: 40,
    flex: 0
  }
});
