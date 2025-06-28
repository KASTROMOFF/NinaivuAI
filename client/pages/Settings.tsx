import Layout from "@/components/Layout";
import {
  ArrowLeft,
  User,
  Globe,
  Bell,
  Volume2,
  Moon,
  Shield,
  Download,
  Trash2,
  Camera,
  Edit3,
  ChevronRight,
  Smartphone,
  Cloud,
  Heart,
  Info,
  LogOut,
  Zap,
  Palette,
  Settings as SettingsIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Settings() {
  const navigate = useNavigate();
  const { preferences, updatePreference, toggleSetting } = useTheme();

  // State for profile
  const [profile, setProfile] = useState({
    name: "Lakshmi Devi",
    nickname: "Paati",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  });

  const cycleThem = () => {
    const themes = ["blue", "warm", "classic"];
    const currentIndex = themes.indexOf(preferences.appTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    updatePreference("appTheme", nextTheme);
  };

  const toggleLanguage = () => {
    updatePreference(
      "language",
      preferences.language === "english" ? "tamil" : "english",
    );
  };

  const getThemeDisplayName = () => {
    switch (preferences.appTheme) {
      case "warm":
        return "Warm Colors";
      case "classic":
        return "Classic";
      default:
        return "Modern Blue";
    }
  };

  const settingSections = [
    {
      title: "Profile & Account",
      items: [
        {
          icon: "user",
          title: "Personal Information",
          subtitle: "Name, photo, and basic details",
          action: "edit",
        },
        {
          icon: "camera",
          title: "Profile Photo",
          subtitle: "Update your profile picture",
          action: "edit",
        },
      ],
    },
    {
      title: "App Appearance",
      items: [
        {
          icon: "palette",
          title: "Theme",
          subtitle: getThemeDisplayName(),
          action: "select",
          value: preferences.appTheme,
        },
        {
          icon: "settings",
          title: "High Contrast Icons",
          subtitle: "Better visibility for icons and buttons",
          action: "toggle",
          value: preferences.highContrastIcons,
        },
        {
          icon: "moon",
          title: "Dark Mode",
          subtitle: "Switch to dark theme",
          action: "toggle",
          value: preferences.darkMode,
        },
      ],
    },
    {
      title: "Language & Voice",
      items: [
        {
          icon: "globe",
          title: "Language",
          subtitle: preferences.language === "english" ? "English" : "தமிழ்",
          action: "select",
          value: preferences.language,
        },
        {
          icon: "volume",
          title: "Voice Responses",
          subtitle: "AI speaks responses aloud",
          action: "toggle",
          value: preferences.voiceResponses,
        },
      ],
    },
    {
      title: "Notifications & Alerts",
      items: [
        {
          icon: "bell",
          title: "Push Notifications",
          subtitle: "Reminders and family updates",
          action: "toggle",
          value: preferences.notifications,
        },
        {
          icon: "smartphone",
          title: "Reminder Settings",
          subtitle: "Customize alert timing and sounds",
          action: "edit",
        },
      ],
    },
    {
      title: "Privacy & Sharing",
      items: [
        {
          icon: "shield",
          title: "Privacy Controls",
          subtitle: "Manage data sharing and security",
          action: "edit",
        },
        {
          icon: "heart",
          title: "Family Sharing",
          subtitle: "Share memories with family members",
          action: "toggle",
          value: preferences.familySharing,
        },
      ],
    },
    {
      title: "Data & Storage",
      items: [
        {
          icon: "cloud",
          title: "Auto Sync",
          subtitle: "Backup memories to cloud automatically",
          action: "toggle",
          value: preferences.autoSync,
        },
        {
          icon: "download",
          title: "Export Memories",
          subtitle: "Download all your stored memories",
          action: "edit",
        },
        {
          icon: "trash",
          title: "Clear Cache",
          subtitle: "Free up storage space",
          action: "edit",
        },
      ],
    },
  ];

  const getIconSvg = (iconType: string) => {
    const iconProps = {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "white",
      strokeWidth: "2.5",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    switch (iconType) {
      case "user":
        return (
          <svg {...iconProps}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case "camera":
        return (
          <svg {...iconProps}>
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        );
      case "palette":
        return (
          <svg {...iconProps}>
            <circle cx="13.5" cy="6.5" r=".5" />
            <circle cx="17.5" cy="10.5" r=".5" />
            <circle cx="8.5" cy="7.5" r=".5" />
            <circle cx="6.5" cy="12.5" r=".5" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
          </svg>
        );
      case "settings":
        return (
          <svg {...iconProps}>
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case "moon":
        return (
          <svg {...iconProps}>
            <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        );
      case "globe":
        return (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        );
      case "volume":
        return (
          <svg {...iconProps}>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        );
      case "bell":
        return (
          <svg {...iconProps}>
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        );
      case "smartphone":
        return (
          <svg {...iconProps}>
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        );
      case "shield":
        return (
          <svg {...iconProps}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "heart":
        return (
          <svg {...iconProps}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        );
      case "cloud":
        return (
          <svg {...iconProps}>
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        );
      case "download":
        return (
          <svg {...iconProps}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        );
      case "trash":
        return (
          <svg {...iconProps}>
            <polyline points="3,6 5,6 21,6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
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

  const getIconBackground = (iconType: string) => {
    switch (iconType) {
      case "user":
      case "bell":
      case "shield":
        return "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)";
      case "camera":
      case "smartphone":
      case "download":
        return "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)";
      case "palette":
      case "settings":
        return "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)";
      case "moon":
        return "linear-gradient(135deg, #374151 0%, #111827 100%)";
      case "globe":
      case "heart":
        return "linear-gradient(135deg, #10b981 0%, #059669 100%)";
      case "volume":
      case "cloud":
        return "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)";
      case "trash":
        return "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)";
      default:
        return "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)";
    }
  };

  const handleAction = (item: any) => {
    if (item.action === "toggle") {
      if (item.title === "High Contrast Icons") {
        toggleSetting("highContrastIcons");
      } else if (item.title === "Dark Mode") {
        toggleSetting("darkMode");
      } else if (item.title === "Voice Responses") {
        toggleSetting("voiceResponses");
      } else if (item.title === "Push Notifications") {
        toggleSetting("notifications");
      } else if (item.title === "Family Sharing") {
        toggleSetting("familySharing");
      } else if (item.title === "Auto Sync") {
        toggleSetting("autoSync");
      }
    } else if (item.action === "select") {
      if (item.title === "Theme") {
        cycleThem();
      } else if (item.title === "Language") {
        toggleLanguage();
      }
    } else if (item.action === "edit") {
      if (item.title === "Reminder Settings") {
        navigate("/reminder-settings");
      }
    }
  };

  return (
    <Layout>
      <div
        className={`min-h-screen p-6 ${preferences.darkMode ? "bg-gray-900" : "bg-gradient-to-br from-background via-light-blue/5 to-sky-blue/10"}`}
      >
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6 pt-6">
          <button
            onClick={() => navigate(-1)}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center hover:scale-105 transition-all ${preferences.darkMode ? "bg-gray-800 hover:bg-gray-700" : "apple-button"}`}
          >
            <ArrowLeft
              className={`w-5 h-5 ${preferences.darkMode ? "text-white" : "text-foreground"}`}
              strokeWidth={2.5}
            />
          </button>
          <h1
            className={`text-2xl font-bold flex-1 ${preferences.darkMode ? "text-white" : "text-foreground"}`}
          >
            Settings
          </h1>
        </div>

        {/* Profile Card */}
        <div
          className={`rounded-3xl p-6 mb-6 ${preferences.darkMode ? "bg-gray-800" : "apple-card"}`}
        >
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-3xl overflow-hidden apple-icon-bg">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-2xl flex items-center justify-center shadow-lg ${preferences.darkMode ? "bg-gray-700 hover:bg-gray-600" : "apple-button"}`}
              >
                <Edit3
                  className={`w-4 h-4 ${preferences.darkMode ? "text-white" : "text-foreground"}`}
                  strokeWidth={2.5}
                />
              </button>
            </div>

            <div className="flex-1">
              <h2
                className={`text-xl font-bold ${preferences.darkMode ? "text-white" : "text-foreground"}`}
              >
                {profile.name}
              </h2>
              <p
                className={`text-sm ${preferences.darkMode ? "text-gray-400" : "text-muted-foreground"}`}
              >
                "{profile.nickname}"
              </p>
              <div className="flex items-center mt-2 space-x-4">
                <span className="text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded-full font-medium flex items-center space-x-1">
                  <Zap className="w-3 h-3" strokeWidth={2.5} />
                  <span>127 Memories</span>
                </span>
                <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full font-medium flex items-center space-x-1">
                  <Cloud className="w-3 h-3" strokeWidth={2.5} />
                  <span>Synced</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6 pb-24">
          {settingSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-3">
              <h3
                className={`text-lg font-bold px-2 ${preferences.darkMode ? "text-white" : "text-foreground"}`}
              >
                {section.title}
              </h3>

              <div
                className={`rounded-2xl overflow-hidden ${preferences.darkMode ? "bg-gray-800" : "apple-card"}`}
              >
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`p-4 ${itemIndex !== section.items.length - 1 ? `border-b ${preferences.darkMode ? "border-gray-700" : "border-border/30"}` : ""}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ background: getIconBackground(item.icon) }}
                      >
                        {getIconSvg(item.icon)}
                      </div>

                      <div className="flex-1">
                        <h4
                          className={`font-semibold ${preferences.darkMode ? "text-white" : "text-foreground"}`}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`text-sm ${preferences.darkMode ? "text-gray-400" : "text-muted-foreground"}`}
                        >
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        {item.action === "toggle" && (
                          <button
                            onClick={() => handleAction(item)}
                            className={`w-14 h-8 rounded-full transition-all duration-300 ${
                              item.value
                                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                : preferences.darkMode
                                  ? "bg-gray-600"
                                  : "bg-gray-300"
                            }`}
                          >
                            <div
                              className={`w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                                item.value ? "translate-x-7" : "translate-x-1"
                              }`}
                            />
                          </button>
                        )}

                        {item.action === "edit" && (
                          <button
                            onClick={() => handleAction(item)}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                              preferences.darkMode
                                ? "bg-gray-700 hover:bg-gray-600"
                                : "bg-gray-100 hover:bg-gray-200"
                            }`}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={
                                preferences.darkMode ? "#ffffff" : "#374151"
                              }
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="9,18 15,12 9,6" />
                            </svg>
                          </button>
                        )}

                        {item.action === "select" && (
                          <button
                            onClick={() => handleAction(item)}
                            className="px-3 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                          >
                            <div className="flex items-center space-x-2">
                              {item.title === "Language" ? (
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="10" />
                                  <line x1="2" y1="12" x2="22" y2="12" />
                                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                              ) : (
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="13.5" cy="6.5" r=".5" />
                                  <circle cx="17.5" cy="10.5" r=".5" />
                                  <circle cx="8.5" cy="7.5" r=".5" />
                                  <circle cx="6.5" cy="12.5" r=".5" />
                                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                                </svg>
                              )}
                              <span className="text-sm font-medium">
                                {item.title === "Language"
                                  ? preferences.language === "english"
                                    ? "EN"
                                    : "TA"
                                  : item.title === "Theme"
                                    ? preferences.appTheme === "blue"
                                      ? "Blue"
                                      : preferences.appTheme === "warm"
                                        ? "Warm"
                                        : "Classic"
                                    : "Select"}
                              </span>
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* App Info & Support */}
          <div className="space-y-3">
            <h3
              className={`text-lg font-bold px-2 ${preferences.darkMode ? "text-white" : "text-foreground"}`}
            >
              Support & Info
            </h3>

            <div
              className={`rounded-2xl overflow-hidden ${preferences.darkMode ? "bg-gray-800" : "apple-card"}`}
            >
              <div
                className={`p-4 border-b ${preferences.darkMode ? "border-gray-700" : "border-border/30"}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Info className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold ${preferences.darkMode ? "text-white" : "text-foreground"}`}
                    >
                      App Version
                    </h4>
                    <p
                      className={`text-sm ${preferences.darkMode ? "text-gray-400" : "text-muted-foreground"}`}
                    >
                      NinaivuAI v2.1.0
                    </p>
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full font-medium">
                    Latest
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                    <LogOut className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-semibold ${preferences.darkMode ? "text-white" : "text-foreground"}`}
                    >
                      Sign Out
                    </h4>
                    <p
                      className={`text-sm ${preferences.darkMode ? "text-gray-400" : "text-muted-foreground"}`}
                    >
                      Sign out of your account
                    </p>
                  </div>
                  <button
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${preferences.darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
                  >
                    <ChevronRight
                      className={`w-5 h-5 ${preferences.darkMode ? "text-white" : "text-foreground"}`}
                      strokeWidth={2}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
