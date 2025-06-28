import Layout from "@/components/Layout";
import {
  ArrowLeft,
  BookOpen,
  Play,
  Download,
  Share,
  Edit,
  Sparkles,
  Heart,
  Crown,
  ChefHat,
  Home,
  Flower,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const storyChapters = [
  {
    id: 1,
    title: "Childhood Memories",
    tamilTitle: "குழந்தைப் பருவ நினைவுகள்",
    icon: Crown,
    stories: 12,
    lastUpdated: "2 days ago",
    description: "Sweet tales from village life and innocent joys",
    tamilDescription:
      "கிராம வாழ்க்கை மற்றும் அப்பாவி மகிழ்ச்சிகளின் இனிய கதைகள்",
    color: "from-emotion-happy to-secondary",
    coverImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Love & Marriage",
    tamilTitle: "காதல் மற்றும் திருமணம்",
    icon: Heart,
    stories: 8,
    lastUpdated: "1 week ago",
    description: "Beautiful journey of finding love and building a family",
    tamilDescription:
      "அன்பைக் கண்டுபிடித்து குடும்பத்தை உருவாக்கும் அழகான பயணம்",
    color: "from-emotion-love to-emotion-nostalgic",
    coverImage:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Recipes & Cooking",
    tamilTitle: "செய்முறைகள் மற்றும் சமையல்",
    icon: ChefHat,
    stories: 15,
    lastUpdated: "3 days ago",
    description: "Grandmother's secret recipes passed down through generations",
    tamilDescription: "தலைமுறைகளாக அனுப்பப்பட்ட பாட்டியின் ரகசிய ��ெய்முறைகள்",
    color: "from-secondary to-emotion-happy",
    coverImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Spiritual Life",
    tamilTitle: "ஆன்மீக வாழ்க்கை",
    icon: Flower,
    stories: 6,
    lastUpdated: "5 days ago",
    description: "Prayers, festivals, and spiritual wisdom",
    tamilDescription: "பிரார்த்தனைகள், விழாக்கள் மற்றும் ஆன்மீக ஞானம்",
    color: "from-emotion-spiritual to-accent",
    coverImage:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Life Advice",
    tamilTitle: "வாழ்க்கை ஆலோசனைகள்",
    icon: Crown,
    stories: 10,
    lastUpdated: "1 week ago",
    description: "Wisdom and guidance for future generations",
    tamilDescription: "எதிர்கால தலைமுறைகளுக்கான ஞானம் மற்றும் வழிகாட்டுதல்",
    color: "from-primary to-secondary",
    coverImage:
      "https://images.unsplash.com/photo-1516627145497-ae4712d64d82?w=400&h=300&fit=crop",
  },
];

const recentStories = [
  {
    id: 1,
    title: "The Festival of Lights in Our Village",
    tamilTitle: "எங்கள் கிராமத்தில் விளக்கு திருநாள்",
    chapter: "Spiritual Life",
    duration: "4:23",
    generatedDate: "Today",
    aiGenerated: true,
  },
  {
    id: 2,
    title: "How I Met Your Grandfather",
    tamilTitle: "நான் உங்கள் தாத்தாவை எப்படி சந்தித்தேன்",
    chapter: "Love & Marriage",
    duration: "6:12",
    generatedDate: "Yesterday",
    aiGenerated: true,
  },
  {
    id: 3,
    title: "Secret to Perfect Sambar",
    tamilTitle: "சரியான சாம்பாரின் ரகசியம்",
    chapter: "Recipes & Cooking",
    duration: "3:45",
    generatedDate: "2 days ago",
    aiGenerated: true,
  },
];

export default function Storybook() {
  const navigate = useNavigate();
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-light-blue/30 to-sky-blue/20">
        {/* Cultural Header */}
        <div className="flex items-center space-x-4 mb-6 px-6 pt-12">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-3xl cultural-button flex items-center justify-center hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" strokeWidth={2.5} />
          </button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground font-tamil">
              Family Storybook
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              AI-crafted from your precious memories
            </p>
          </div>
          <div className="w-12 h-12 rounded-3xl icon-bg-high-contrast flex items-center justify-center lotus-animation">
            <BookOpen
              className="w-6 h-6"
              strokeWidth={3}
              style={{ color: "white", stroke: "white" }}
            />
          </div>
        </div>

        {/* AI Magic Banner */}
        <div className="px-6 mb-8">
          <div className="warm-card rounded-3xl p-6 border-2 border-secondary/30">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary to-emotion-happy rounded-3xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-foreground">
                  AI Storyteller Active
                </h2>
                <p className="text-sm text-muted-foreground">
                  Your voice memories are being transformed into beautiful,
                  lasting stories
                </p>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold text-sm hover:scale-105 transition-all">
                Generate New
              </button>
            </div>
          </div>
        </div>

        {/* Story Chapters */}
        <div className="px-6 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6 font-tamil">
            Story Chapters
          </h2>
          <div className="space-y-4">
            {storyChapters.map((chapter) => {
              const IconComponent = chapter.icon;
              return (
                <div
                  key={chapter.id}
                  className="w-full warm-card rounded-3xl p-6 cursor-pointer hover:scale-102 transition-all duration-500 border border-secondary/10"
                  onClick={() => setSelectedChapter(chapter.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${chapter.color} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent
                        className="w-8 h-8 text-white"
                        strokeWidth={2.5}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground font-tamil">
                        {chapter.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {chapter.description}
                      </p>
                      <div className="flex items-center space-x-4 mt-3">
                        <span className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full font-semibold">
                          {chapter.stories} stories
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Updated {chapter.lastUpdated}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <button
                        className="w-10 h-10 rounded-2xl cultural-button flex items-center justify-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle play action
                        }}
                      >
                        <Play
                          className="w-5 h-5 text-foreground"
                          strokeWidth={2.5}
                        />
                      </button>
                      <button
                        className="w-10 h-10 rounded-2xl cultural-button flex items-center justify-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle download action
                        }}
                      >
                        <Download
                          className="w-5 h-5 text-foreground"
                          strokeWidth={2.5}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent AI-Generated Stories */}
        <div className="px-6 pb-32">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground font-tamil">
              Recently Generated
            </h2>
            <span className="text-sm text-muted-foreground">
              {recentStories.length} new stories
            </span>
          </div>

          <div className="space-y-4">
            {recentStories.map((story) => (
              <div
                key={story.id}
                className="warm-card rounded-3xl p-5 border border-secondary/10"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 icon-bg-high-contrast rounded-2xl flex items-center justify-center">
                    <BookOpen
                      className="w-6 h-6"
                      strokeWidth={3}
                      style={{ color: "white", stroke: "white" }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-bold text-foreground">
                        {story.title}
                      </h3>
                      {story.aiGenerated && (
                        <div className="bg-gradient-to-r from-secondary to-emotion-happy px-2 py-1 rounded-full">
                          <Sparkles
                            className="w-3 h-3 text-white"
                            strokeWidth={2.5}
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {story.chapter} • {story.duration} • {story.generatedDate}
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <button className="w-10 h-10 rounded-2xl cultural-button flex items-center justify-center hover:scale-105 transition-all">
                      <Play
                        className="w-4 h-4 text-foreground"
                        strokeWidth={2.5}
                      />
                    </button>
                    <button className="w-10 h-10 rounded-2xl cultural-button flex items-center justify-center hover:scale-105 transition-all">
                      <Edit
                        className="w-4 h-4 text-foreground"
                        strokeWidth={2.5}
                      />
                    </button>
                    <button className="w-10 h-10 rounded-2xl cultural-button flex items-center justify-center hover:scale-105 transition-all">
                      <Share
                        className="w-4 h-4 text-foreground"
                        strokeWidth={2.5}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
