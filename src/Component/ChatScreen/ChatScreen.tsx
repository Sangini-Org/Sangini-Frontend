import React, { useEffect } from 'react';
import { useAuthStore } from '../../stores/useAuthStore';
import socket from '../../socket';

export default function ChatScreen() {
  const userId = useAuthStore((state) => state.userId);
  useEffect(() => {
    socket.auth = { userId };
    socket.connect();
    socket.on('private message', ({ content, from }) => {
      console.log(content, from);
    });
  });
  const sendMessage = (message: string) => {
    let users = ['fb65719e-c077-4bbf-8b86-04bdcea34900', 'cf1e8aa9-34b2-4c6f-8965-c84375a9f933'];
    socket.emit('private message', {
      message,
      to: users.filter((user) => user != userId).pop(),
    });
  };
  return (
    <div className="text-white">
      <input className={`outline-none rounded-md dark-sec-bg py-1 mb-5 mt-1 w-full`} />
      <button>Check message sent</button>
      <button
        className="font-semibold rounded-md my-4 py-1.5 px-12 dark-sec-bg"
        onClick={() => {
          sendMessage('hello Connection');
        }}>
        Send
      </button>
      <input type="text" />
    </div>
  );
}
