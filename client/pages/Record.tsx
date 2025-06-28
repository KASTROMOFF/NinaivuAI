import Layout from "@/components/Layout";
import {
  Mic,
  ArrowLeft,
  Play,
  Pause,
  Square,
  Upload,
  Tag,
  BookOpen,
  ChefHat,
  Brain,
  Lightbulb,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const categories = [
  {
    id: "story",
    label: "Story",
    icon: BookOpen,
    color: "from-emotion-creative to-lavender",
  },
  {
    id: "recipe",
    label: "Recipe",
    icon: ChefHat,
    color: "from-emotion-happy to-mint-green",
  },
  {
    id: "wisdom",
    label: "Wisdom",
    icon: Brain,
    color: "from-primary to-ocean-blue",
  },
  {
    id: "memory",
    label: "Memory",
    icon: Lightbulb,
    color: "from-emotion-calm to-light-blue",
  },
];

export default function Record() {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("story");
  const [recordedTime, setRecordedTime] = useState("00:42");

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-light-blue/5 to-sky-blue/10 p-6">
        {/* Apple-style Header */}
        <div className="flex items-center space-x-4 mb-8 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-2xl apple-button flex items-center justify-center hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" strokeWidth={2.5} />
          </button>
          <h1 className="text-2xl font-bold text-foreground">Record Memory</h1>
        </div>

        {/* Category Selection */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-foreground mb-4">
            Choose Category:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-3 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : "apple-button text-foreground hover:scale-105"
                  }`}
                >
                  <IconComponent className="w-4 h-4" strokeWidth={2.5} />
                  <span className="text-sm font-semibold">
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recording Interface */}
        <div className="apple-card rounded-3xl p-8 mb-6">
          <div className="text-center space-y-6">
            {/* Waveform Visualization */}
            <div className="flex items-center justify-center space-x-1 h-20">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-t from-primary to-secondary rounded-full transition-all duration-300 ${
                    isRecording ? `waveform-bar` : ""
                  }`}
                  style={{
                    width: "4px",
                    height: isRecording
                      ? `${Math.random() * 60 + 10}px`
                      : "10px",
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            {/* Timer */}
            <div className="text-3xl font-bold text-foreground">
              {recordedTime}
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-center space-x-4">
              <button className="w-14 h-14 rounded-2xl apple-button flex items-center justify-center hover:scale-105 transition-all">
                <Play className="w-6 h-6 text-foreground" strokeWidth={2.5} />
              </button>

              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                  isRecording
                    ? "bg-gradient-to-br from-destructive to-destructive/80 shadow-xl"
                    : "apple-icon-bg shadow-xl"
                }`}
              >
                {isRecording ? (
                  <Pause className="w-8 h-8 text-white" strokeWidth={2.5} />
                ) : (
                  <Mic className="w-8 h-8 text-white" strokeWidth={2.5} />
                )}
              </button>

              <button className="w-14 h-14 rounded-2xl apple-button flex items-center justify-center hover:scale-105 transition-all">
                <Square className="w-6 h-6 text-foreground" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Recent Recordings */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground">
            Recent Recordings
          </h2>
          {[
            {
              title: "Grandmother's Sambar Recipe",
              duration: "2:34",
              category: "Recipe",
              icon: ChefHat,
            },
            {
              title: "Story about Village Festival",
              duration: "4:12",
              category: "Story",
              icon: BookOpen,
            },
            {
              title: "Advice for Young People",
              duration: "1:48",
              category: "Wisdom",
              icon: Brain,
            },
          ].map((recording, i) => (
            <div key={i} className="apple-card rounded-2xl p-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 icon-bg-high-contrast rounded-2xl flex items-center justify-center">
                  <Play
                    className="w-5 h-5"
                    strokeWidth={3}
                    style={{ color: "white", stroke: "white" }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    {recording.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <recording.icon className="w-3 h-3" strokeWidth={2.5} />
                    <span>
                      {recording.category} • {recording.duration}
                    </span>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-xl apple-button flex items-center justify-center">
                  <Upload
                    className="w-4 h-4 text-foreground"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
