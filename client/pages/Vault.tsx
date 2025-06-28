import Layout from "@/components/Layout";
import {
  ArrowLeft,
  Play,
  Heart,
  Share,
  Search,
  Filter,
  BookOpen,
  ChefHat,
  Brain,
  PartyPopper,
  Smile,
  ThumbsUp,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const memories = [
  {
    id: 1,
    title: "Wedding Day Stories",
    description:
      "Tales from my wedding ceremony and the beautiful traditions we followed...",
    category: "Story",
    categoryIcon: BookOpen,
    duration: "5:23",
    date: "2 days ago",
    mood: "Happy",
    moodIcon: Smile,
    color: "from-emotion-happy to-mint-green",
  },
  {
    id: 2,
    title: "Authentic Rasam Recipe",
    description: "The secret ingredients that make rasam taste like home...",
    category: "Recipe",
    categoryIcon: ChefHat,
    duration: "3:45",
    date: "1 week ago",
    mood: "Content",
    moodIcon: ThumbsUp,
    color: "from-emotion-creative to-lavender",
  },
  {
    id: 3,
    title: "Life Lessons for Grandchildren",
    description: "Important values and wisdom I want to pass down...",
    category: "Wisdom",
    categoryIcon: Brain,
    duration: "7:12",
    date: "2 weeks ago",
    mood: "Proud",
    moodIcon: Heart,
    color: "from-primary to-ocean-blue",
  },
  {
    id: 4,
    title: "Festival Celebrations",
    description: "How we celebrated Diwali in our village back in the day...",
    category: "Tradition",
    categoryIcon: PartyPopper,
    duration: "4:58",
    date: "3 weeks ago",
    mood: "Nostalgic",
    moodIcon: Calendar,
    color: "from-emotion-calm to-light-blue",
  },
];

export default function Vault() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

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
            Memory Vault
          </h1>
          <button className="w-12 h-12 rounded-2xl apple-button flex items-center justify-center hover:scale-105 transition-all">
            <Filter className="w-5 h-5 text-foreground" strokeWidth={2.5} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="apple-card rounded-2xl p-4 mb-6">
          <div className="flex items-center space-x-3">
            <Search
              className="w-5 h-5 text-muted-foreground"
              strokeWidth={2.5}
            />
            <input
              type="text"
              placeholder="Search your memories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none"
            />
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="apple-card rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-primary">127</div>
            <div className="text-xs text-muted-foreground">Total Memories</div>
          </div>
          <div className="apple-card rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-emotion-happy">24h</div>
            <div className="text-xs text-muted-foreground">Recording Time</div>
          </div>
          <div className="apple-card rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-emotion-creative">8</div>
            <div className="text-xs text-muted-foreground">Categories</div>
          </div>
        </div>

        {/* Memory List */}
        <div className="space-y-4 pb-24">
          {memories.map((memory) => (
            <div key={memory.id} className="apple-card rounded-3xl p-5">
              <div className="flex items-start space-x-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${memory.color} flex items-center justify-center shadow-lg feature-card-icon`}
                >
                  <Play
                    className="w-6 h-6"
                    strokeWidth={3}
                    style={{ color: "white", stroke: "white" }}
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-foreground text-base leading-tight">
                      {memory.title}
                    </h3>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 rounded-xl apple-button flex items-center justify-center">
                        <Heart
                          className="w-4 h-4 text-foreground"
                          strokeWidth={2}
                        />
                      </button>
                      <button className="w-8 h-8 rounded-xl apple-button flex items-center justify-center">
                        <Share
                          className="w-4 h-4 text-foreground"
                          strokeWidth={2}
                        />
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {memory.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium flex items-center space-x-1">
                        <memory.categoryIcon
                          className="w-3 h-3"
                          strokeWidth={2.5}
                        />
                        <span>{memory.category}</span>
                      </span>
                      <span className="text-xs bg-emotion-happy/10 text-emotion-happy px-2 py-1 rounded-full font-medium flex items-center space-x-1">
                        <memory.moodIcon
                          className="w-3 h-3"
                          strokeWidth={2.5}
                        />
                        <span>{memory.mood}</span>
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-foreground">
                        {memory.duration}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {memory.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
