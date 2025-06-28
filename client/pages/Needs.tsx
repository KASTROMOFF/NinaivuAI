import Layout from "@/components/Layout";
import {
  ArrowLeft,
  Plus,
  Check,
  Clock,
  User,
  Mic,
  Send,
  ChefHat,
  Pill,
  Flower,
  Glasses,
  UserCircle,
  Briefcase,
  Stethoscope,
  Baby,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const needsItems = [
  {
    id: 1,
    item: "Coconut Oil (Cold-pressed)",
    category: "Kitchen",
    categoryIcon: ChefHat,
    requestedBy: "Paati",
    requestedDate: "Today",
    status: "pending",
    assignedTo: "Ravi",
    priority: "medium",
    notes: "For daily hair care routine",
  },
  {
    id: 2,
    item: "Blood Pressure Medicine",
    category: "Health",
    categoryIcon: Pill,
    requestedBy: "Paati",
    requestedDate: "Yesterday",
    status: "completed",
    assignedTo: "Priya",
    priority: "high",
    notes: "Monthly refill needed",
  },
  {
    id: 3,
    item: "Jasmine Flowers",
    category: "Prayer",
    categoryIcon: Flower,
    requestedBy: "Paati",
    requestedDate: "2 days ago",
    status: "in_progress",
    assignedTo: "Arjun",
    priority: "low",
    notes: "For morning prayers",
  },
  {
    id: 4,
    item: "Reading Glasses",
    category: "Personal",
    categoryIcon: Glasses,
    requestedBy: "Paati",
    requestedDate: "3 days ago",
    status: "pending",
    assignedTo: "Meera",
    priority: "medium",
    notes: "Lost the old ones",
  },
];

const familyMembers = [
  { id: 1, name: "Ravi", avatar: Briefcase, status: "online" },
  { id: 2, name: "Priya", avatar: Stethoscope, status: "busy" },
  { id: 3, name: "Arjun", avatar: Baby, status: "offline" },
  { id: 4, name: "Meera", avatar: UserCircle, status: "online" },
];

export default function Needs() {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("kitchen");
  const [isListening, setIsListening] = useState(false);

  const categories = [
    {
      id: "kitchen",
      label: "Kitchen",
      icon: ChefHat,
      color: "from-emotion-happy to-mint-green",
    },
    {
      id: "health",
      label: "Health",
      icon: Pill,
      color: "from-destructive/80 to-destructive",
    },
    {
      id: "prayer",
      label: "Prayer",
      icon: Flower,
      color: "from-emotion-creative to-lavender",
    },
    {
      id: "personal",
      label: "Personal",
      icon: Glasses,
      color: "from-primary to-ocean-blue",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emotion-happy/20 text-emotion-happy";
      case "in_progress":
        return "bg-primary/20 text-primary";
      case "pending":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✅";
      case "in_progress":
        return "🔄";
      case "pending":
        return "⏳";
      default:
        return "⏳";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/20 text-destructive";
      case "medium":
        return "bg-primary/20 text-primary";
      case "low":
        return "bg-emotion-calm/20 text-emotion-calm";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const addNewItem = () => {
    if (newItem.trim()) {
      // Add item logic would go here
      console.log("Adding new item:", newItem);
      setNewItem("");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-light-blue/5 to-sky-blue/10 p-6">
        {/* Apple-style Header */}
        <div className="flex items-center space-x-4 mb-6 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-2xl apple-button flex items-center justify-center hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" strokeWidth={2.5} />
          </button>
          <h1 className="text-2xl font-bold text-foreground flex-1">
            Smart List
          </h1>
          <button className="w-12 h-12 rounded-2xl apple-button flex items-center justify-center hover:scale-105 transition-all">
            <Plus className="w-5 h-5 text-foreground" strokeWidth={2.5} />
          </button>
        </div>

        {/* Add New Item */}
        <div className="apple-card rounded-3xl p-5 mb-6">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">
              Add New Request
            </h2>

            {/* Category Selection */}
            <div className="grid grid-cols-4 gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-2 rounded-xl transition-all duration-300 flex flex-col items-center space-y-1 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                        : "apple-button text-foreground hover:scale-105"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" strokeWidth={2.5} />
                    <span className="text-xs font-semibold">
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Input Area */}
            <div className="flex items-center space-x-3">
              <div className="flex-1 apple-button rounded-2xl p-3">
                <input
                  type="text"
                  placeholder="What do you need?"
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addNewItem()}
                  className="w-full bg-transparent text-foreground placeholder-muted-foreground outline-none"
                />
              </div>

              <button
                onClick={() => setIsListening(!isListening)}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isListening
                    ? "bg-destructive text-white animate-pulse"
                    : "apple-button hover:scale-105"
                }`}
              >
                <Mic className="w-5 h-5" strokeWidth={2.5} />
              </button>

              <button
                onClick={addNewItem}
                disabled={!newItem.trim()}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  newItem.trim()
                    ? "apple-icon-bg hover:scale-105"
                    : "bg-muted opacity-50"
                }`}
              >
                <Send className="w-5 h-5 text-white" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Family Members Status */}
        <div className="apple-card rounded-2xl p-4 mb-6">
          <h3 className="text-sm font-bold text-foreground mb-3">
            Family Helpers
          </h3>
          <div className="flex items-center space-x-4">
            {familyMembers.map((member) => {
              const IconComponent = member.avatar;
              return (
                <div key={member.id} className="flex items-center space-x-2">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-2xl apple-icon-bg flex items-center justify-center">
                      <IconComponent
                        className="w-5 h-5 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        member.status === "online"
                          ? "bg-emotion-happy"
                          : member.status === "busy"
                            ? "bg-primary"
                            : "bg-muted"
                      }`}
                    />
                  </div>
                  <span className="text-xs font-medium text-foreground">
                    {member.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Needs List */}
        <div className="space-y-4 pb-24">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">
              Current Requests
            </h2>
            <span className="text-sm text-muted-foreground">
              {needsItems.length} items
            </span>
          </div>

          {needsItems.map((need) => (
            <div key={need.id} className="apple-card rounded-3xl p-5">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-base">
                      {need.item}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {need.notes}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(need.status)}`}
                    >
                      {getStatusIcon(need.status)}{" "}
                      {need.status.replace("_", " ")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium flex items-center space-x-1">
                      <need.categoryIcon
                        className="w-3 h-3"
                        strokeWidth={2.5}
                      />
                      <span>{need.category}</span>
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(need.priority)}`}
                    >
                      {need.priority}
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-semibold text-foreground">
                      Assigned: {need.assignedTo}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {need.requestedDate}
                    </div>
                  </div>
                </div>

                {need.status === "pending" && (
                  <div className="flex space-x-2 pt-2">
                    <button className="flex-1 p-2 apple-button rounded-xl">
                      <span className="text-sm font-medium text-foreground">
                        Remind
                      </span>
                    </button>
                    <button className="flex-1 p-2 bg-gradient-to-r from-primary to-ocean-blue text-white rounded-xl">
                      <span className="text-sm font-medium">Mark Complete</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
