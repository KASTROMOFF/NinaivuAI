import Layout from "@/components/Layout";
import {
  ArrowLeft,
  Bell,
  Volume2,
  Clock,
  Smartphone,
  Users,
  Heart,
  Moon,
  Sun,
  Coffee,
  Pill,
  Utensils,
  Phone,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ReminderSettings() {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    enableNotifications: true,
    soundEnabled: true,
    vibrationEnabled: true,
    voiceReminders: true,
    familyNotifications: true,
    quietHours: true,
    quietStart: "22:00",
    quietEnd: "07:00",
    snoozeTime: 10, // minutes
    reminderVolume: 75,
  });

  const [reminderTypes, setReminderTypes] = useState({
    medicine: { enabled: true, sound: "gentle-chime", priority: "high" },
    meals: { enabled: true, sound: "soft-bell", priority: "medium" },
    family: { enabled: true, sound: "warm-tone", priority: "medium" },
    spiritual: { enabled: true, sound: "temple-bell", priority: "low" },
    appointments: { enabled: true, sound: "alert-tone", priority: "high" },
    daily: { enabled: true, sound: "nature-sound", priority: "low" },
  });

  const toggleSetting = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const toggleReminderType = (type: string) => {
    setReminderTypes((prev) => ({
      ...prev,
      [type]: {
        ...prev[type as keyof typeof prev],
        enabled: !prev[type as keyof typeof prev].enabled,
      },
    }));
  };

  const reminderTypeList = [
    {
      id: "medicine",
      title: "Medicine & Health",
      description: "Pills, doctor appointments, health checks",
      icon: Pill,
      color: "from-destructive to-destructive/80",
    },
    {
      id: "meals",
      title: "Meals & Nutrition",
      description: "Breakfast, lunch, dinner reminders",
      icon: Utensils,
      color: "from-secondary to-emotion-happy",
    },
    {
      id: "family",
      title: "Family & Calls",
      description: "Video calls, messages, family time",
      icon: Users,
      color: "from-emotion-love to-emotion-nostalgic",
    },
    {
      id: "spiritual",
      title: "Prayer & Spiritual",
      description: "Prayer times, temple visits, festivals",
      icon: Heart,
      color: "from-emotion-spiritual to-accent",
    },
    {
      id: "appointments",
      title: "Appointments",
      description: "Doctor visits, important meetings",
      icon: Calendar,
      color: "from-primary to-secondary",
    },
    {
      id: "daily",
      title: "Daily Routine",
      description: "Morning routine, exercise, bedtime",
      icon: Clock,
      color: "from-emotion-calm to-blue-emotion",
    },
  ];

  return (
    <Layout showNavigation={false}>
      <div className="min-h-screen bg-gradient-to-br from-background via-light-blue/30 to-sky-blue/20">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6 px-6 pt-12">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-3xl cultural-button flex items-center justify-center hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" strokeWidth={2.5} />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">
              Reminder Settings
            </h1>
            <p className="text-sm text-muted-foreground">
              Customize your notifications and alerts
            </p>
          </div>
        </div>

        {/* General Settings */}
        <div className="px-6 mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4">
            General Settings
          </h2>
          <div className="warm-card rounded-3xl overflow-hidden">
            {[
              {
                icon: Bell,
                title: "Enable Notifications",
                subtitle: "Allow app to send reminders",
                key: "enableNotifications",
              },
              {
                icon: Volume2,
                title: "Sound Alerts",
                subtitle: "Play sounds for reminders",
                key: "soundEnabled",
              },
              {
                icon: Smartphone,
                title: "Vibration",
                subtitle: "Vibrate for urgent reminders",
                key: "vibrationEnabled",
              },
              {
                icon: Users,
                title: "Family Notifications",
                subtitle: "Notify family when tasks are completed",
                key: "familyNotifications",
              },
            ].map((setting, index, array) => {
              const IconComponent = setting.icon;
              return (
                <div
                  key={setting.key}
                  className={`p-4 ${index !== array.length - 1 ? "border-b border-border/30" : ""}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl icon-bg-high-contrast flex items-center justify-center">
                      <IconComponent
                        className="w-6 h-6 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {setting.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {setting.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleSetting(setting.key)}
                      className={`w-14 h-8 rounded-full transition-all duration-300 ${
                        settings[setting.key as keyof typeof settings]
                          ? "bg-gradient-to-r from-primary to-secondary"
                          : "bg-muted"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                          settings[setting.key as keyof typeof settings]
                            ? "translate-x-7"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quiet Hours */}
        <div className="px-6 mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4">
            Quiet Hours
          </h2>
          <div className="warm-card rounded-3xl p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-2xl icon-bg-high-contrast flex items-center justify-center">
                <Moon className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">
                  Do Not Disturb
                </h3>
                <p className="text-sm text-muted-foreground">
                  Reduce notifications during sleep hours
                </p>
              </div>
              <button
                onClick={() => toggleSetting("quietHours")}
                className={`w-14 h-8 rounded-full transition-all duration-300 ${
                  settings.quietHours
                    ? "bg-gradient-to-r from-primary to-secondary"
                    : "bg-muted"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                    settings.quietHours ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {settings.quietHours && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Start Time
                  </label>
                  <input
                    type="time"
                    value={settings.quietStart}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        quietStart: e.target.value,
                      }))
                    }
                    className="w-full p-3 rounded-2xl border border-border bg-input text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    End Time
                  </label>
                  <input
                    type="time"
                    value={settings.quietEnd}
                    onChange={(e) =>
                      setSettings((prev) => ({
                        ...prev,
                        quietEnd: e.target.value,
                      }))
                    }
                    className="w-full p-3 rounded-2xl border border-border bg-input text-foreground"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reminder Types */}
        <div className="px-6 pb-32">
          <h2 className="text-lg font-bold text-foreground mb-4">
            Reminder Types
          </h2>
          <div className="space-y-4">
            {reminderTypeList.map((type) => {
              const IconComponent = type.icon;
              const isEnabled =
                reminderTypes[type.id as keyof typeof reminderTypes].enabled;

              return (
                <div key={type.id} className="warm-card rounded-3xl p-5">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-14 h-14 rounded-3xl bg-gradient-to-br ${type.color} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent
                        className="w-7 h-7 text-white"
                        strokeWidth={2.5}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">
                        {type.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {type.description}
                      </p>

                      <div className="flex items-center space-x-4 mt-3">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            reminderTypes[type.id as keyof typeof reminderTypes]
                              .priority === "high"
                              ? "bg-destructive/20 text-destructive"
                              : reminderTypes[
                                    type.id as keyof typeof reminderTypes
                                  ].priority === "medium"
                                ? "bg-primary/20 text-primary"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {reminderTypes[
                            type.id as keyof typeof reminderTypes
                          ].priority.toUpperCase()}{" "}
                          PRIORITY
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleReminderType(type.id)}
                      className={`w-14 h-8 rounded-full transition-all duration-300 ${
                        isEnabled
                          ? "bg-gradient-to-r from-primary to-secondary"
                          : "bg-muted"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 ${
                          isEnabled ? "translate-x-7" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
