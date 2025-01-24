import React from 'react';

const HealthAnalysis = ({ messages, input, setInput, sendMessage }) => (
  <div>
    <h2>Text Analysis</h2>
    <div className="chat-box">
      {messages.map((msg, index) => (
        <div key={index} className={`chat-entry ${msg.sender}`}>
          <span>{msg.text}</span>
        </div>
      ))}
    </div>
    <input
      type="text"
      placeholder="Type your response..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      className="chat-input"
    />
    <button onClick={sendMessage} className="send-button">Spank</button>
  </div>
);

export default HealthAnalysis;
