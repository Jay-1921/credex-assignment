// src/components/ChatWidget.jsx
import React, { useState, useEffect } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(dark);

    const updateTheme = (e) => {
      setIsDarkMode(e.matches);
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateTheme);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", updateTheme);
    };
  }, []);

  const exampleResponses = {
    "how do i sell my license?": "You can sell your license by logging in and listing it on your dashboard.",
    "what is softsell?": "SoftSell is a platform to resell your unused software licenses.",
    "is there a fee?": "No, listing is free. We only take a commission on successful sales.",
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);

    const lower = input.trim().toLowerCase();
    const reply = exampleResponses[lower] || "Sorry, I’m still learning. Try a different question.";
    const botMsg = { sender: "bot", text: reply };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
    }, 600);

    setInput("");
  };

  return (
    <div className="fixed z-50 bottom-6 right-6">
      {isOpen ? (
        <div className={`w-80 shadow-lg rounded-lg ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
          <div className="flex items-center justify-between p-3 font-semibold border-b">
            AI Assistant
            <button onClick={() => setIsOpen(false)} className="text-lg font-bold text-red-500 hover:text-red-700">×</button>
          </div>

          <div className="h-64 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg max-w-xs ${
                  msg.sender === "user"
                    ? `self-end ml-auto ${isDarkMode ? "bg-indigo-700 text-white" : "bg-indigo-100 text-black"}`
                    : `${isDarkMode ? "bg-transparent text-white" : "bg-gray-100 text-black"}`
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex p-2 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className={`flex-1 px-2 py-1 rounded border outline-none ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"}`}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="px-3 py-1 ml-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 text-white bg-indigo-600 rounded-full shadow hover:bg-indigo-700"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
const sendMessage = async () => {
    if (!userInput.trim()) return;
  
    const userMessage = { user: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);
  
    let aiResponse = "I'm sorry, I couldn't understand that.";
  
    // Hardcoded responses for specific questions
    if (userInput.toLowerCase().includes("how do i sell my license")) {
      aiResponse = "To sell your license, simply follow these steps: ...";
    } else if (userInput.toLowerCase().includes("what is softsell")) {
      aiResponse = "SoftSell is a platform that helps you sell unused software licenses.";
    } else {
      // Real API Call (if needed)
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userInput }],
        });
  
        aiResponse = response.choices[0].message.content;
      } catch (error) {
        console.error("Error fetching response from OpenAI:", error);
      }
    }
  
    const aiMessage = { user: "bot", text: aiResponse };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    setIsLoading(false);
    setUserInput("");
  };
  