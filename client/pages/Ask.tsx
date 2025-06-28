import Layout from "@/components/Layout";
import {
  ArrowLeft,
  Mic,
  Send,
  Brain,
  Volume2,
  Copy,
  ThumbsUp,
  Home,
  ChefHat,
  Users,
  Pill,
  Heart,
  Phone,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const chatHistory = [
  {
    id: 1,
    type: "user",
    message: "Where did I keep my reading glasses?",
    time: "2:30 PM",
  },
  {
    id: 2,
    type: "ai",
    message:
      "Based on your memories, you mentioned keeping your reading glasses on the small table next to your favorite armchair in the living room. You recorded this on Tuesday when you were talking about your daily routine.",
    time: "2:30 PM",
    memorySource: "Daily Routine - Tuesday recording",
  },
  {
    id: 3,
    type: "user",
    message: "How do I make rasam like my mother did?",
    time: "Yesterday",
  },
  {
    id: 4,
    type: "ai",
    message:
      "From your recipe recording last week, here's your mother's rasam recipe:\n\n🥄 Ingredients:\n- 1 cup tamarind water\n- 2 tomatoes, chopped\n- Curry leaves\n- Mustard seeds\n- Turmeric powder\n\nYou mentioned the secret is to add jaggery at the end for the perfect sweet-tangy balance, just like your mother taught you.",
    time: "Yesterday",
    memorySource: "Authentic Rasam Recipe - Last week",
  },
];

const quickQuestions = [
  { text: "Where did I put my...?", icon: Home },
  { text: "How do I cook...?", icon: ChefHat },
  { text: "Tell me about my family stories", icon: Users },
  { text: "When should I take my medicine?", icon: Pill },
  { text: "What are my daily prayers?", icon: Heart },
  { text: "Who should I call today?", icon: Phone },
];

export default function Ask() {
  const navigate = useNavigate();
  const [inputMessage, setInputMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Send message logic would go here
      console.log("Sending message:", inputMessage);
      setInputMessage("");
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Voice recognition logic would go here
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-light-blue/5 to-sky-blue/10 flex flex-col">
        {/* Apple-style Header */}
        <div className="flex items-center space-x-4 p-6 pt-12">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-2xl apple-button flex items-center justify-center hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" strokeWidth={2.5} />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">
              Smart Assistant
            </h1>
            <p className="text-sm text-muted-foreground">
              Ask me anything about your memories
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl apple-icon-bg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 px-6 space-y-4 overflow-y-auto pb-4">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] space-y-2 ${chat.type === "user" ? "items-end" : "items-start"} flex flex-col`}
              >
                <div
                  className={`p-4 rounded-3xl ${
                    chat.type === "user"
                      ? "bg-gradient-to-r from-primary to-ocean-blue text-white"
                      : "apple-card"
                  }`}
                >
                  <p
                    className={`text-sm leading-relaxed ${chat.type === "user" ? "text-white" : "text-foreground"}`}
                  >
                    {chat.message.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < chat.message.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">
                    {chat.time}
                  </span>

                  {chat.type === "ai" && (
                    <>
                      <button className="w-6 h-6 rounded-lg apple-button flex items-center justify-center">
                        <Volume2
                          className="w-3 h-3 text-foreground"
                          strokeWidth={2}
                        />
                      </button>
                      <button className="w-6 h-6 rounded-lg apple-button flex items-center justify-center">
                        <Copy
                          className="w-3 h-3 text-foreground"
                          strokeWidth={2}
                        />
                      </button>
                      <button className="w-6 h-6 rounded-lg apple-button flex items-center justify-center">
                        <ThumbsUp
                          className="w-3 h-3 text-foreground"
                          strokeWidth={2}
                        />
                      </button>
                    </>
                  )}
                </div>

                {chat.memorySource && (
                  <div className="bg-emotion-happy/10 text-emotion-happy px-3 py-1 rounded-full flex items-center space-x-1">
                    <BookOpen className="w-3 h-3" strokeWidth={2.5} />
                    <span className="text-xs font-medium">
                      Source: {chat.memorySource}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Questions */}
        <div className="px-6 pb-4">
          <p className="text-sm font-semibold text-foreground mb-3">
            Quick Questions:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {quickQuestions.map((question, i) => {
              const IconComponent = question.icon;
              return (
                <button
                  key={i}
                  onClick={() => setInputMessage(question.text)}
                  className="p-3 apple-button rounded-2xl text-left hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <IconComponent
                    className="w-4 h-4 text-primary"
                    strokeWidth={2.5}
                  />
                  <span className="text-xs font-medium text-foreground">
                    {question.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 pt-0 pb-28">
          <div className="apple-card rounded-3xl p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none"
                />

                <button
                  onClick={toggleListening}
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isListening
                      ? "bg-destructive text-white animate-pulse"
                      : "apple-button hover:scale-105"
                  }`}
                >
                  <Mic className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>

              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  inputMessage.trim()
                    ? "apple-icon-bg hover:scale-105"
                    : "bg-muted opacity-50"
                }`}
              >
                <Send className="w-5 h-5 text-white" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
