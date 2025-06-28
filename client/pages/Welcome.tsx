import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mic, Heart, Globe, Sparkles, Flower, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Welcome() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<"english" | "tamil">(
    "english",
  );
  const [step, setStep] = useState(1);

  const handleLanguageSelect = (language: "english" | "tamil") => {
    setSelectedLanguage(language);
  };

  const handleGetStarted = () => {
    if (step === 1) {
      setStep(2);
    } else {
      // Save onboarding completion
      localStorage.setItem("ninaivuai_onboarding", "completed");
      localStorage.setItem("ninaivuai_language", selectedLanguage);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-light-blue/30 to-sky-blue/20 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Cultural App Logo and Branding */}
        <div className="space-y-8">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-28 h-28 icon-bg-high-contrast rounded-full flex items-center justify-center shadow-xl transform hover:scale-105 transition-all duration-500 lotus-animation border-4 border-white/30">
                <Heart
                  className="w-14 h-14 drop-shadow-lg"
                  strokeWidth={3}
                  fill="white"
                  style={{ color: "white", stroke: "white" }}
                />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-secondary to-emotion-happy rounded-full flex items-center justify-center shadow-lg cultural-glass border-2 border-white">
                <Sparkles
                  className="w-5 h-5 text-white drop-shadow-sm"
                  strokeWidth={3}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h1 className="text-5xl font-bold text-foreground tracking-tight font-tamil">
              {selectedLanguage === "english" ? "NinaivuAI" : "நினைவுAI"}
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              {selectedLanguage === "english"
                ? "Let's capture your precious memories"
                : "உங்கள் விலையுயர்ந்த நினைவுகளைப் பதிவு செய்வோம்"}
            </p>
            <div className="flex items-center justify-center space-x-2 text-secondary">
              <Heart className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-sm font-semibold">
                {selectedLanguage === "english"
                  ? "Made with love for families"
                  : "குடும்பங்களுக்காக அன்புடன் செய்யப்பட்டது"}
              </span>
              <Heart className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {step === 1 && (
          <>
            {/* Language Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>Choose your language / மொழ���யைத் தேர்ந்தெடுங்கள்</span>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <button
                  onClick={() => handleLanguageSelect("english")}
                  className={cn(
                    "p-6 rounded-3xl transition-all duration-500 cultural-button warm-ripple",
                    "hover:scale-105 active:scale-95 border-2",
                    selectedLanguage === "english"
                      ? "icon-bg-high-contrast text-white shadow-xl border-white/30"
                      : "text-foreground hover:text-primary border-secondary/20",
                  )}
                >
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <Globe className="w-8 h-8" strokeWidth={2.5} />
                    <span className="text-lg font-bold">English</span>
                  </div>
                </button>

                <button
                  onClick={() => handleLanguageSelect("tamil")}
                  className={cn(
                    "p-6 rounded-3xl transition-all duration-500 cultural-button warm-ripple",
                    "hover:scale-105 active:scale-95 border-2",
                    selectedLanguage === "tamil"
                      ? "icon-bg-high-contrast text-white shadow-xl border-white/30"
                      : "text-foreground hover:text-primary border-secondary/20",
                  )}
                >
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <Heart className="w-8 h-8" strokeWidth={2.5} />
                    <span className="text-lg font-bold font-tamil">தமிழ்</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="space-y-3">
              <p className="text-base text-foreground leading-relaxed">
                {selectedLanguage === "english"
                  ? "Let's remember together. Your memories, your voice, your wisdom - all safely preserved and easily accessible."
                  : "ஒன்றாக நினைவுகளை பகிர்ந்து கொள்வோம். உங்கள் நினைவுகள், ��ங்கள் குரல், உங்கள் ஞானம் - அனைத்தும் பாதுகாப்பாக சேமிக்கப்பட்டு எளிதில் அணுகலாம்."}
              </p>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {/* Voice Introduction Option */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-emotion-calm to-emotion-nostalgic rounded-full flex items-center justify-center mx-auto">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  {selectedLanguage === "english"
                    ? "Record Your Voice"
                    : "உங்கள் குரலைப் பதிவு செய்யுங்கள்"}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedLanguage === "english"
                    ? "Would you like to record a brief introduction? This helps personalize your experience and allows family members to hear your voice in responses."
                    : "சுருக்கமான அறிமுகத்தைப் ���திவு செய்ய விரும்புகிறீர்களா? இது உங்கள் அனுபவத்தை தனிப்பட்டதாக்க உதவுகிறது மற்றும் குடும்ப உறுப்பினர்கள் பதில்களில் உங்கள் குரலைக் கேட்க அனுமதிக்கிறது."}
                </p>
              </div>

              <div className="space-y-3">
                <button className="w-full p-4 bg-gradient-to-r from-secondary to-warm-gold text-primary-foreground rounded-2xl font-semibold text-base hover:shadow-lg transition-all duration-200 active:scale-95">
                  {selectedLanguage === "english"
                    ? "🎙️ Record Introduction"
                    : "🎙️ அறிமுகத்தைப் பதிவு செய்யுங்கள்"}
                </button>

                <button
                  onClick={handleGetStarted}
                  className="w-full p-4 border border-border text-foreground rounded-2xl font-medium text-base hover:bg-accent/50 transition-all duration-200 active:scale-95"
                >
                  {selectedLanguage === "english"
                    ? "Skip for now"
                    : "இப்போதைக்கு தவிர்க்கவும்"}
                </button>
              </div>
            </div>
          </>
        )}

        {step === 1 && (
          <button
            onClick={handleGetStarted}
            className="w-full p-6 icon-bg-high-contrast text-white rounded-3xl font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 active:scale-95 relative overflow-hidden warm-ripple"
            style={{ boxShadow: "var(--blue-shadow), var(--blue-glow)" }}
          >
            <span className="relative z-10 flex items-center justify-center space-x-3 font-tamil">
              <span>
                {selectedLanguage === "english" ? "Continue" : "தொடரவும்"}
              </span>
              <ArrowLeft className="w-6 h-6 rotate-180" strokeWidth={2.5} />
            </span>
          </button>
        )}

        {step === 2 && (
          <button
            onClick={handleGetStarted}
            className="w-full p-6 icon-bg-high-contrast text-white rounded-3xl font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 active:scale-95 relative overflow-hidden warm-ripple"
            style={{ boxShadow: "var(--blue-shadow), var(--blue-glow)" }}
          >
            <span className="relative z-10 flex items-center justify-center space-x-3 font-tamil">
              <span>
                {selectedLanguage === "english"
                  ? "Begin Journey"
                  : "பயணத்தைத் தொடங்குங்கள்"}
              </span>
              <Sparkles className="w-6 h-6" strokeWidth={2.5} />
            </span>
          </button>
        )}

        {/* Cultural Touch */}
        <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground">
          <Flower className="w-4 h-4 text-secondary" strokeWidth={2.5} />
          <span className="font-medium">
            {selectedLanguage === "english"
              ? "Preserving memories, honoring traditions"
              : "நினைவுகளைப் பாதுகாத்து, பாரம்பரியங்களை மதித்தல்"}
          </span>
          <Flower className="w-4 h-4 text-secondary" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
