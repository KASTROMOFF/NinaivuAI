import Layout from "@/components/Layout";
import {
  ArrowLeft,
  Bell,
  Clock,
  Plus,
  MoreVertical,
  Check,
  AlertCircle,
  Calendar,
  Pill,
  Users,
  Heart,
  Utensils,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const todayReminders = [
  {
    id: 1,
    title: "Morning Medicine",
    description: "Take blood pressure medication with breakfast",
    time: "8:00 AM",
    status: "completed",
    type: "medicine",
    icon: "Pill",
    color: "from-emotion-happy to-mint-green",
  },
  {
    id: 2,
    title: "Family Video Call",
    description: "Weekly call with grandchildren",
    time: "3:00 PM",
    status: "upcoming",
    type: "family",
    icon: "Users",
    color: "from-emotion-creative to-lavender",
  },
  {
    id: 3,
    title: "Evening Prayer",
    description: "Daily prayer and meditation time",
    time: "6:30 PM",
    status: "upcoming",
    type: "spiritual",
    icon: "Heart",
    color: "from-emotion-calm to-light-blue",
  },
  {
    id: 4,
    title: "Dinner Reminder",
    description: "Prepare and have dinner",
    time: "7:30 PM",
    status: "upcoming",
    type: "meal",
    icon: "Utensils",
    color: "from-primary to-ocean-blue",
  },
];

const upcomingAlerts = [
  {
    id: 1,
    title: "Doctor Appointment",
    description: "Annual checkup with Dr. Sharma",
    date: "Tomorrow",
    time: "10:30 AM",
    type: "health",
    urgency: "high",
  },
  {
    id: 2,
    title: "Grandson's Birthday",
    description: "Arjun turns 8 years old",
    date: "Friday",
    time: "All Day",
    type: "family",
    urgency: "medium",
  },
  {
    id: 3,
    title: "Temple Visit",
    description: "Monthly temple visit and donation",
    date: "Sunday",
    time: "9:00 AM",
    type: "spiritual",
    urgency: "low",
  },
];

export default function Reminders() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("today");

  const toggleReminder = (id: number) => {
    // Toggle reminder completion logic would go here
    console.log("Toggle reminder", id);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-light-blue/30 to-sky-blue/20 p-6">
        {/* Header with Navigation */}
        <div className="flex items-center space-x-4 mb-6 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-2xl cultural-button flex items-center justify-center hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" strokeWidth={2.5} />
          </button>
          <h1 className="text-2xl font-bold text-foreground flex-1">
            Smart Alerts
          </h1>
          <button
            onClick={() => navigate("/reminder-settings")}
            className="w-12 h-12 rounded-2xl cultural-button flex items-center justify-center hover:scale-105 transition-all"
          >
            <MoreVertical
              className="w-5 h-5 text-foreground"
              strokeWidth={2.5}
            />
          </button>
          <button
            onClick={() => navigate("/create-reminder")}
            className="w-12 h-12 rounded-2xl icon-bg-high-contrast flex items-center justify-center hover:scale-105 transition-all"
          >
            <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="warm-card rounded-2xl p-2 mb-6">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab("today")}
              className={`p-3 rounded-xl transition-all duration-300 ${
                activeTab === "today"
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "text-foreground hover:bg-accent/50"
              }`}
            >
              <span className="font-semibold">Today</span>
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`p-3 rounded-xl transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  : "text-foreground hover:bg-accent/50"
              }`}
            >
              <span className="font-semibold">Upcoming</span>
            </button>
          </div>
        </div>

        {/* Today's Reminders */}
        {activeTab === "today" && (
          <div className="space-y-4 pb-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground">
                Today's Schedule
              </h2>
              <span className="text-sm text-muted-foreground">4 reminders</span>
            </div>

            {todayReminders.map((reminder) => (
              <div key={reminder.id} className="warm-card rounded-3xl p-5">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => toggleReminder(reminder.id)}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background:
                        reminder.status === "completed"
                          ? "hsl(var(--color-emotion-happy))"
                          : "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {reminder.status === "completed" ? (
                      <Check
                        className="w-6 h-6"
                        strokeWidth={3}
                        style={{
                          color: "white",
                          stroke: "white",
                          fill: "none",
                        }}
                      />
                    ) : reminder.icon === "Pill" ? (
                      <Pill
                        className="w-6 h-6"
                        strokeWidth={3}
                        style={{
                          color: "white",
                          stroke: "white",
                          fill: "none",
                        }}
                      />
                    ) : reminder.icon === "Users" ? (
                      <Users
                        className="w-6 h-6"
                        strokeWidth={3}
                        style={{
                          color: "white",
                          stroke: "white",
                          fill: "none",
                        }}
                      />
                    ) : reminder.icon === "Heart" ? (
                      <Heart
                        className="w-6 h-6"
                        strokeWidth={3}
                        style={{
                          color: "white",
                          stroke: "white",
                          fill: "none",
                        }}
                      />
                    ) : reminder.icon === "Utensils" ? (
                      <Utensils
                        className="w-6 h-6"
                        strokeWidth={3}
                        style={{
                          color: "white",
                          stroke: "white",
                          fill: "none",
                        }}
                      />
                    ) : (
                      <Clock
                        className="w-6 h-6"
                        strokeWidth={3}
                        style={{
                          color: "white",
                          stroke: "white",
                          fill: "none",
                        }}
                      />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-bold text-base ${
                          reminder.status === "completed"
                            ? "text-muted-foreground line-through"
                            : "text-foreground"
                        }`}
                      >
                        {reminder.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-primary">
                          {reminder.time}
                        </span>
                        <button className="w-8 h-8 rounded-xl apple-button flex items-center justify-center">
                          <MoreVertical
                            className="w-4 h-4 text-foreground"
                            strokeWidth={2}
                          />
                        </button>
                      </div>
                    </div>
                    <p
                      className={`text-sm mt-1 ${
                        reminder.status === "completed"
                          ? "text-muted-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {reminder.description}
                    </p>
                    <div className="flex items-center mt-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium flex items-center space-x-1 ${
                          reminder.status === "completed"
                            ? "bg-emotion-happy/20 text-emotion-happy"
                            : "bg-primary/20 text-primary"
                        }`}
                      >
                        {reminder.status === "completed" ? (
                          <>
                            <Check className="w-3 h-3" strokeWidth={2.5} />
                            <span>Completed</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-3 h-3" strokeWidth={2.5} />
                            <span>Pending</span>
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upcoming Alerts */}
        {activeTab === "upcoming" && (
          <div className="space-y-4 pb-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground">
                Upcoming Events
              </h2>
              <span className="text-sm text-muted-foreground">3 alerts</span>
            </div>

            {upcomingAlerts.map((alert) => (
              <div key={alert.id} className="warm-card rounded-3xl p-5">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      alert.urgency === "high"
                        ? "bg-destructive"
                        : alert.urgency === "medium"
                          ? "bg-gradient-to-br from-primary to-ocean-blue"
                          : "bg-gradient-to-br from-emotion-calm to-light-blue"
                    }`}
                  >
                    {alert.urgency === "high" ? (
                      <AlertCircle
                        className="w-6 h-6 text-white"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Calendar
                        className="w-6 h-6 text-white"
                        strokeWidth={2.5}
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-foreground text-base">
                        {alert.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-foreground">
                          {alert.date}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {alert.time}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {alert.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium flex items-center space-x-1 ${
                          alert.urgency === "high"
                            ? "bg-destructive/20 text-destructive"
                            : alert.urgency === "medium"
                              ? "bg-primary/20 text-primary"
                              : "bg-emotion-calm/20 text-emotion-calm"
                        }`}
                      >
                        {alert.urgency === "high" ? (
                          <>
                            <AlertCircle
                              className="w-3 h-3"
                              strokeWidth={2.5}
                            />
                            <span>Urgent</span>
                          </>
                        ) : alert.urgency === "medium" ? (
                          <>
                            <Bell className="w-3 h-3" strokeWidth={2.5} />
                            <span>Important</span>
                          </>
                        ) : (
                          <>
                            <Calendar className="w-3 h-3" strokeWidth={2.5} />
                            <span>Note</span>
                          </>
                        )}
                      </span>
                      <div className="flex space-x-2">
                        <button className="w-8 h-8 rounded-xl apple-button flex items-center justify-center">
                          <Bell
                            className="w-4 h-4 text-foreground"
                            strokeWidth={2}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
