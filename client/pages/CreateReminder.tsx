import Layout from "@/components/Layout";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Repeat,
  Bell,
  Mic,
  Type,
  Tag,
  Users,
  Volume2,
  Plus,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateReminder() {
  const navigate = useNavigate();

  const [reminder, setReminder] = useState({
    title: "",
    description: "",
    type: "medicine",
    time: "08:00",
    date: new Date().toISOString().split("T")[0],
    repeat: "daily",
    sound: "gentle-chime",
    vibration: true,
    voiceNote: null,
    assignTo: [],
    priority: "medium",
  });

  const [inputMethod, setInputMethod] = useState<"text" | "voice">("text");
  const [isRecording, setIsRecording] = useState(false);

  const reminderTypes = [
    {
      id: "medicine",
      label: "Medicine",
      icon: "💊",
      color: "from-destructive to-destructive/80",
    },
    {
      id: "meal",
      label: "Meal",
      icon: "🍽️",
      color: "from-secondary to-emotion-happy",
    },
    {
      id: "appointment",
      label: "Appointment",
      icon: "📅",
      color: "from-primary to-secondary",
    },
    {
      id: "family",
      label: "Family",
      icon: "👨‍👩‍👧‍👦",
      color: "from-emotion-love to-emotion-nostalgic",
    },
    {
      id: "spiritual",
      label: "Prayer",
      icon: "🙏",
      color: "from-emotion-spiritual to-accent",
    },
    {
      id: "exercise",
      label: "Exercise",
      icon: "🏃‍♀️",
      color: "from-emotion-calm to-blue-emotion",
    },
  ];

  const repeatOptions = [
    { id: "once", label: "Once", description: "Single reminder" },
    { id: "daily", label: "Daily", description: "Every day" },
    { id: "weekly", label: "Weekly", description: "Every week" },
    { id: "monthly", label: "Monthly", description: "Every month" },
    { id: "custom", label: "Custom", description: "Set custom pattern" },
  ];

  const familyMembers = [
    { id: "ravi", name: "Ravi", avatar: "👨‍💼" },
    { id: "priya", name: "Priya", avatar: "👩‍⚕️" },
    { id: "arjun", name: "Arjun", avatar: "👦" },
    { id: "meera", name: "Meera", avatar: "👧" },
  ];

  const handleSave = () => {
    // Save reminder logic would go here
    console.log("Saving reminder:", reminder);
    navigate("/reminders");
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Voice recording logic would go here
  };

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
              Create Reminder
            </h1>
            <p className="text-sm text-muted-foreground">
              Set up a new reminder for yourself or family
            </p>
          </div>
          <button
            onClick={handleSave}
            className="px-6 py-3 icon-bg-high-contrast text-white rounded-2xl font-semibold hover:scale-105 transition-all"
          >
            Save
          </button>
        </div>

        {/* Input Method Toggle */}
        <div className="px-6 mb-6">
          <div className="warm-card rounded-2xl p-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setInputMethod("text")}
                className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                  inputMethod === "text"
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "text-foreground hover:bg-accent/50"
                }`}
              >
                <Type className="w-4 h-4" strokeWidth={2.5} />
                <span className="font-semibold">Type</span>
              </button>
              <button
                onClick={() => setInputMethod("voice")}
                className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                  inputMethod === "voice"
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "text-foreground hover:bg-accent/50"
                }`}
              >
                <Mic className="w-4 h-4" strokeWidth={2.5} />
                <span className="font-semibold">Voice</span>
              </button>
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <div className="px-6 mb-6">
          <div className="warm-card rounded-3xl p-6 space-y-4">
            {inputMethod === "text" ? (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Title
                  </label>
                  <input
                    type="text"
                    value={reminder.title}
                    onChange={(e) =>
                      setReminder((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="e.g., Take morning medicine"
                    className="w-full p-4 rounded-2xl border border-border bg-input text-foreground placeholder-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Description (Optional)
                  </label>
                  <textarea
                    value={reminder.description}
                    onChange={(e) =>
                      setReminder((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Add any additional details..."
                    rows={3}
                    className="w-full p-4 rounded-2xl border border-border bg-input text-foreground placeholder-muted-foreground resize-none"
                  />
                </div>
              </>
            ) : (
              <div className="text-center space-y-4">
                <div
                  className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center transition-all duration-300 ${
                    isRecording
                      ? "bg-destructive animate-pulse"
                      : "icon-bg-high-contrast"
                  }`}
                >
                  <Mic className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <button
                  onClick={toggleRecording}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    isRecording
                      ? "bg-destructive text-white"
                      : "bg-gradient-to-r from-primary to-secondary text-white hover:scale-105"
                  }`}
                >
                  {isRecording ? "Stop Recording" : "Start Recording"}
                </button>
                <p className="text-sm text-muted-foreground">
                  {isRecording
                    ? "Speak your reminder..."
                    : "Tap to record your reminder"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Reminder Type */}
        <div className="px-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-3">
            Reminder Type
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {reminderTypes.map((type) => (
              <button
                key={type.id}
                onClick={() =>
                  setReminder((prev) => ({ ...prev, type: type.id }))
                }
                className={`p-4 rounded-2xl transition-all duration-300 ${
                  reminder.type === type.id
                    ? `bg-gradient-to-br ${type.color} text-white shadow-lg scale-105`
                    : "warm-card text-foreground hover:scale-105"
                }`}
              >
                <div className="text-center space-y-2">
                  <div className="text-2xl">{type.icon}</div>
                  <span className="text-sm font-semibold">{type.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Date and Time */}
        <div className="px-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-3">When</h3>
          <div className="warm-card rounded-3xl p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Date
                </label>
                <input
                  type="date"
                  value={reminder.date}
                  onChange={(e) =>
                    setReminder((prev) => ({ ...prev, date: e.target.value }))
                  }
                  className="w-full p-3 rounded-2xl border border-border bg-input text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Time
                </label>
                <input
                  type="time"
                  value={reminder.time}
                  onChange={(e) =>
                    setReminder((prev) => ({ ...prev, time: e.target.value }))
                  }
                  className="w-full p-3 rounded-2xl border border-border bg-input text-foreground"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Repeat Options */}
        <div className="px-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-3">Repeat</h3>
          <div className="space-y-2">
            {repeatOptions.map((option) => (
              <button
                key={option.id}
                onClick={() =>
                  setReminder((prev) => ({ ...prev, repeat: option.id }))
                }
                className={`w-full p-4 rounded-2xl transition-all duration-300 text-left ${
                  reminder.repeat === option.id
                    ? "bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary"
                    : "warm-card border-2 border-transparent hover:border-primary/30"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      reminder.repeat === option.id
                        ? "bg-primary border-primary"
                        : "border-muted"
                    }`}
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {option.label}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Family Assignment */}
        <div className="px-6 pb-32">
          <h3 className="text-lg font-bold text-foreground mb-3">
            Notify Family (Optional)
          </h3>
          <div className="warm-card rounded-3xl p-6">
            <div className="grid grid-cols-2 gap-3">
              {familyMembers.map((member) => {
                const isAssigned = reminder.assignTo.includes(member.id);
                return (
                  <button
                    key={member.id}
                    onClick={() => {
                      setReminder((prev) => ({
                        ...prev,
                        assignTo: isAssigned
                          ? prev.assignTo.filter((id) => id !== member.id)
                          : [...prev.assignTo, member.id],
                      }));
                    }}
                    className={`p-3 rounded-2xl transition-all duration-300 flex items-center space-x-3 ${
                      isAssigned
                        ? "bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary"
                        : "bg-muted/50 border-2 border-transparent hover:border-primary/30"
                    }`}
                  >
                    <div className="text-lg">{member.avatar}</div>
                    <span className="font-medium text-foreground">
                      {member.name}
                    </span>
                    {isAssigned && (
                      <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center ml-auto">
                        <Plus
                          className="w-2 h-2 text-white rotate-45"
                          strokeWidth={3}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
