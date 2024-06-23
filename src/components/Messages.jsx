import React, { useState, useEffect } from 'react';
import {
  FaPaperclip,
  FaMicrophone,
  FaSmile,
  FaPaperPlane,
} from 'react-icons/fa';

const Messages = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Dr. Smith',
      lastMessage: 'See you tomorrow!',
      timestamp: '2024-06-21 09:30',
    },
    {
      id: 2,
      name: 'Midwife Jane',
      lastMessage: 'Don’t forget your vitamins.',
      timestamp: '2024-06-21 08:00',
    },
    {
      id: 3,
      name: 'Support Group',
      lastMessage: 'Meeting at 5 PM.',
      timestamp: '2024-06-20 15:45',
    },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (conversations.length > 0) {
      setSelectedConversation(conversations[0]);
    }
  }, [conversations]);

  useEffect(() => {
    if (selectedConversation) {
      // Simulating fetching messages for the selected conversation
      setMessages([
        {
          sender: selectedConversation.name,
          content: 'How are you feeling today?',
          timestamp: '2024-06-21 09:00',
        },
        {
          sender: 'Mana',
          content: 'I am feeling better, thank you!',
          timestamp: '2024-06-21 09:10',
        },
        {
          sender: selectedConversation.name,
          content: 'Great! See you tomorrow!',
          timestamp: '2024-06-21 09:30',
        },
      ]);
    }
  }, [selectedConversation]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        sender: 'Mana',
        content: newMessage,
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  if (!selectedConversation) return null; // Handle case where no conversation is selected

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Conversation List */}
      <aside className="w-full md:w-1/3 bg-white border-r border-gray-200">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Messages</h1>
          <div className="space-y-4">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-4 rounded-lg cursor-pointer ${
                  selectedConversation?.id === conversation.id
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <h3 className="font-semibold">{conversation.name}</h3>
                <p className="text-sm text-gray-600 truncate">
                  {conversation.lastMessage}
                </p>
                <p className="text-xs text-gray-400">
                  {conversation.timestamp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Chat Area */}
      <div className="w-full md:w-2/3 bg-gray-50 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{selectedConversation.name}</h2>
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                message.sender === 'Mana' ? 'justify-end' : ''
              }`}
            >
              <div
                className={`p-4 rounded-lg ${
                  message.sender === 'Mana'
                    ? 'bg-color-primary text-white'
                    : 'bg-white'
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(message.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200 flex items-center space-x-4">
          <button>
            <FaSmile className="text-gray-600" />
          </button>
          <button>
            <FaPaperclip className="text-gray-600" />
          </button>
          <button>
            <FaMicrophone className="text-gray-600" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button
            onClick={handleSendMessage}
            className="bg-color-primary text-white px-4 py-2 rounded-lg"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
