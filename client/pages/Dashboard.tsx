import Layout from "@/components/Layout";
import {
  Mic,
  HelpCircle,
  BookOpen,
  Heart,
  Bell,
  Users,
  Cloud,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { preferences } = useTheme();
  const [isRecording, setIsRecording] = useState(false);

  const featuresGrid = [
    {
      id: "record",
      title: "Record Memory",
      tamilTitle: "நினைவு பதிவு",
      description: "Capture precious moments",
      tamilDescription: "விலையுயர்ந்த தருணங்களைப் பிடிக்கவும்",
      route: "/record",
      icon: Mic,
    },
    {
      id: "ask",
      title: "Ask Grandma",
      tamilTitle: "பாட்டியிடம் கேள்",
      description: "Wisdom from memories",
      tamilDescription: "நினைவுகளிலிருந்து ஞானம்",
      route: "/ask",
      icon: HelpCircle,
    },
    {
      id: "storybook",
      title: "Family Storybook",
      tamilTitle: "குடும்ப கதைப்புத்தகம்",
      description: "AI-crafted legacy",
      tamilDescription: "AI-வால் வடிவமைக்கப்பட்ட பாரம்பரியம்",
      route: "/storybook",
      icon: BookOpen,
    },
    {
      id: "vault",
      title: "Memory Vault",
      tamilTitle: "நினைவு கருவூலம்",
      description: "Treasured collection",
      tamilDescription: "பொக்கிஷமான தொகுப்பு",
      route: "/vault",
      icon: Heart,
    },
    {
      id: "reminders",
      title: "Daily Reminders",
      tamilTitle: "தினசரி நினைவூட்டல்கள்",
      description: "Gentle daily care",
      tamilDescription: "மென்மையான தினசரி பராமரிப்பு",
      route: "/reminders",
      icon: Bell,
    },
    {
      id: "family",
      title: "Family Circle",
      tamilTitle: "குடும்ப வட்டம்",
      description: "Love & connection",
      tamilDescription: "அன்பு மற்றும் இணைப்பு",
      route: "/family",
      icon: Users,
    },
  ];

  const handleFeatureClick = (route: string) => {
    navigate(route);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return preferences.language === "english"
        ? "Good morning, Paati! ✨"
        : "காலை வணக்கம், பாட்டி! ✨";
    } else if (hour < 17) {
      return preferences.language === "english"
        ? "Good afternoon, Paati! 🌸"
        : "மதிய வணக்கம், பாட்டி! 🌸";
    } else {
      return preferences.language === "english"
        ? "Good evening, Paati! 🌺"
        : "மாலை வணக்கம், பாட்டி! 🌺";
    }
  };

  const getIconSvg = (featureId: string) => {
    const iconProps = {
      width: "28",
      height: "28",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "white",
      strokeWidth: "2.5",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    switch (featureId) {
      case "record":
        return (
          <svg {...iconProps}>
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="22" />
            <line x1="8" y1="22" x2="16" y2="22" />
          </svg>
        );
      case "ask":
        return (
          <svg {...iconProps}>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
      case "storybook":
        return (
          <svg {...iconProps}>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <path d="M8 7h8" />
            <path d="M8 11h6" />
          </svg>
        );
      case "vault":
        return (
          <svg {...iconProps}>
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <circle cx="12" cy="16" r="1" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        );
      case "reminders":
        return (
          <svg {...iconProps}>
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        );
      case "family":
        return (
          <svg {...iconProps}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        );
      default:
        return (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
    }
  };

  return (
    <Layout>
      <div
        className={`min-h-screen ${preferences.darkMode ? "bg-gray-900" : "bg-gradient-to-br from-background via-light-blue/5 to-sky-blue/10"}`}
      >
        {/* Cultural Greeting Header */}
        <div className="px-6 pt-8 pb-4">
          <div
            className={`rounded-3xl p-6 border ${preferences.darkMode ? "bg-gray-800 border-gray-700" : "warm-card border-secondary/10"}`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <h1
                  className={`text-2xl font-bold font-tamil ${preferences.darkMode ? "text-white" : "text-foreground"}`}
                >
                  {getGreeting()}
                </h1>
                <p
                  className={`text-sm mt-1 ${preferences.darkMode ? "text-gray-400" : "text-muted-foreground"}`}
                >
                  {preferences.language === "english"
                    ? "Your digital memory keeper is ready"
                    : "உங்கள் டிஜிட்டல் நினைவு காப்பாளர் தயார்"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Heritage Stats */}
        <div className="px-6 pb-6">
          <div
            className={`rounded-3xl p-6 border ${preferences.darkMode ? "bg-gray-800 border-gray-700" : "warm-card border-secondary/10"}`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <p
                  className={`text-lg font-bold font-tamil ${preferences.darkMode ? "text-white" : "text-foreground"}`}
                >
                  {preferences.language === "english"
                    ? "Your Precious Heritage"
                    : "உங்கள் விலையுயர்ந்த பாரம்பரியம்"}
                </p>
                <p
                  className={`text-sm mt-1 ${preferences.darkMode ? "text-gray-400" : "text-muted-foreground"}`}
                >
                  {preferences.language === "english"
                    ? "127 memories • 45 stories • 12 grandma's recipes"
                    : "127 நினைவுகள் • 45 கதைகள் • 12 பாட்டியின் செய்முறைகள்"}
                </p>
                <div className="flex space-x-3 mt-3">
                  <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full font-semibold flex items-center space-x-1">
                    <Heart className="w-3 h-3" strokeWidth={2.5} />
                    <span>
                      {preferences.language === "english"
                        ? "Blessed"
                        : "ஆசீர்வதிக்கப்பட்டது"}
                    </span>
                  </span>
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold flex items-center space-x-1">
                    <Cloud className="w-3 h-3" strokeWidth={2.5} />
                    <span>
                      {preferences.language === "english"
                        ? "Protected"
                        : "பாதுகாக்கப்பட்டது"}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="px-6 pb-32">
          <div className="grid grid-cols-2 gap-6">
            {featuresGrid.map((feature) => (
              <button
                key={feature.id}
                onClick={() => handleFeatureClick(feature.route)}
                className={cn(
                  "p-6 rounded-3xl transition-all duration-500",
                  "hover:scale-105 active:scale-95 hover:shadow-xl",
                  "text-left space-y-5 h-44 group border",
                  preferences.darkMode
                    ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
                    : "warm-card border-secondary/10",
                )}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-14 h-14 rounded-3xl flex items-center justify-center shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
                      border: "2px solid rgba(255, 255, 255, 0.4)",
                      boxShadow: "0 8px 32px rgba(30, 64, 175, 0.5)",
                    }}
                  >
                    {getIconSvg(feature.id)}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3
                    className={`font-bold text-lg leading-tight group-hover:text-primary transition-colors font-tamil ${preferences.darkMode ? "text-white" : "text-foreground"}`}
                  >
                    {preferences.language === "english"
                      ? feature.title
                      : feature.tamilTitle}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed font-medium ${preferences.darkMode ? "text-gray-400" : "text-muted-foreground"}`}
                  >
                    {preferences.language === "english"
                      ? feature.description
                      : feature.tamilDescription}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Floating Cultural Mic */}
        <div className="fixed bottom-32 right-6 z-50">
          <button
            onClick={() => navigate("/record")}
            className={cn(
              "w-16 h-16 rounded-3xl cultural-button shadow-xl",
              "transition-all duration-300 lotus-bloom hover:scale-110",
              "border-2 border-white/20",
            )}
            style={{
              background: isRecording
                ? "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
                : "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
              boxShadow: isRecording
                ? "0 12px 48px rgba(239, 68, 68, 0.6), 0 0 40px rgba(239, 68, 68, 0.4)"
                : "0 12px 48px rgba(30, 64, 175, 0.6), 0 0 20px rgba(59, 130, 246, 0.4)",
            }}
          >
            <Mic className="w-8 h-8 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </Layout>
  );
}
