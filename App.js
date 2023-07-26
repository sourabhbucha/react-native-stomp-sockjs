import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StompEventTypes, withStomp } from './services/react-stompjs/stomp'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'Not Connected',
    }
  }

  componentDidMount() {
    this.props.stompContext.addStompEventListener(
      StompEventTypes.Connect,
      () => {
        this.setState({ status: 'Connected' })
      }
    )
    this.props.stompContext.addStompEventListener(
      StompEventTypes.Disconnect,
      () => { this.setState({ status: 'Disconnected' }) }
    )
    this.props.stompContext.addStompEventListener(
      StompEventTypes.WebSocketClose,
      () => { this.setState({ status: 'Disconnected (not graceful)' }) }
    )
    this.props.stompContext.newStompClient("https://your-ws-url/",
      {
        token: "abc",
        userId: "123",
      },
      "/host")
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <View><Text>Status: {this.state.status}</Text></View>
      </View>
    )
  }
}

export default withStomp(App)