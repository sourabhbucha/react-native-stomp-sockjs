# react-native-stomp-sockjs
Working example of socket connection of react native with stomjs and sockjs
#### This example fixes the issue of Stomp not working with React Native and provides a simple solution for the same: add services/react-stompjs/stomp.js to your code and use it by wrapping your app.

# STOMP.js

[![Firefox, Chrome](https://github.com/stomp-js/stompjs/actions/workflows/linux.yml/badge.svg?branch=develop)](https://github.com/stomp-js/stompjs/actions/workflows/linux.yml)
[![Safari, Edge](https://github.com/stomp-js/stompjs/actions/workflows/osx.yml/badge.svg?branch=develop)](https://github.com/stomp-js/stompjs/actions/workflows/osx.yml)
[![NodeJS Test](https://github.com/stomp-js/stompjs/actions/workflows/node-js.yml/badge.svg?branch=develop)](https://github.com/stomp-js/stompjs/actions/workflows/node-js.yml)
[![API docs refresh](https://github.com/stomp-js/stompjs/actions/workflows/docs-refresh.yml/badge.svg?branch=develop)](https://github.com/stomp-js/stompjs/actions/workflows/docs-refresh.yml)

This library provides a STOMP over WebSocket client for Web browser and node.js applications.

Please visit https://stomp-js.github.io/ for guides, FAQs and API docs.

# Introduction

This library allows you to connect to a STOMP broker over WebSocket. This library
supports complete STOMP specifications including all current protocol variants. Most
popular messaging brokers support STOMP and STOMP over WebSockets out-of-the-box
or using plugins.

## Features

- Simple API to interact with the Stomp protocol
- Support for v1.2, v1.1 and v1.0 of the Stomp protocol
- Support for fallback options in case of WebSocket unavailable
- Browser and Node.js support
- Option to use STOMP over TCP
- Binary payload support

## Usage

### NodeJS

```bash
$ npm install @stomp/stompjs ws
```

```javascript
import { Client } from '@stomp/stompjs';

import { WebSocket } from 'ws';
Object.assign(global, { WebSocket });

const client = new Client({
  brokerURL: 'ws://localhost:15674/ws',
  onConnect: () => {
    client.subscribe('/topic/test01', message =>
      console.log(`Received: ${message.body}`)
    );
    client.publish({ destination: '/topic/test01', body: 'First Message' });
  },
});

client.activate();
```

## Further information

The API documentation is hosted as GitHub pages for the StompJS family of libraries.
You may head straight to the https://stomp-js.github.io/api-docs/latest/

This library comes with detailed usage instructions. Please find it at
[Usage instructions](https://stomp-js.github.io/guide/stompjs/using-stompjs-v5.html).
Check out other guides at https://stomp-js.github.io/.

There is quite detailed API documentation,
you should start at https://stomp-js.github.io/api-docs/latest/classes/Client.html.

## Upgrading

if you were using an older version of this library, you would need to make changes
to your code. Head to
[Upgrading](https://stomp-js.github.io/#upgrading).

## Usage with RxJS

https://github.com/stomp-js/rx-stomp is based on this library and exposes the entire functionality
offered by this library as RxJS Observables.

## TypeScript definitions

The npm package includes TypeScript definitions, so there is no need to install it separately.
