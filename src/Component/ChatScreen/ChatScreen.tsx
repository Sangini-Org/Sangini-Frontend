import React, { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:8000');

export default function ChatScreen() {
  useEffect(() => {
    client.onopen = () => {
      console.log('connected');
    };
    client.onmessage = (message: any) => {
      const data = JSON.parse(message.data);
      console.log('reply', data);
    };
  });

  const checkSend = (value: string) => {
    client.send(
      JSON.stringify({
        type: 'message',
        msg: value,
      })
    );
  };
  return (
    <div className="bg-white h-3/4">
      <button onClick={() => checkSend('hello devansh')}>Check message sent</button>
      <input type="text" />
    </div>
  );
}
