import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextType {
  preferences: {
    language: string;
    voiceResponses: boolean;
    notifications: boolean;
    autoSync: boolean;
    familySharing: boolean;
    darkMode: boolean;
    voiceVolume: number;
    highContrastIcons: boolean;
    appTheme: string;
  };
  updatePreference: (key: string, value: any) => void;
  toggleSetting: (key: string) => void;
}

const defaultPreferences = {
  language: "english",
  voiceResponses: true,
  notifications: true,
  autoSync: true,
  familySharing: true,
  darkMode: false,
  voiceVolume: 75,
  highContrastIcons: true,
  appTheme: "blue",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [preferences, setPreferences] = useState(defaultPreferences);

  // Apply theme changes to document
  useEffect(() => {
    const root = document.documentElement;

    if (preferences.darkMode) {
      root.classList.add("dark");
      root.style.setProperty("--background", "#111827");
      root.style.setProperty("--foreground", "#ffffff");
      root.style.setProperty("--muted-foreground", "#9ca3af");
      root.style.setProperty("--border", "#374151");
      root.style.setProperty("--card", "#1f2937");
    } else {
      root.classList.remove("dark");
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#1f2937");
      root.style.setProperty("--muted-foreground", "#6b7280");
      root.style.setProperty("--border", "#e5e7eb");
      root.style.setProperty("--card", "#ffffff");
    }

    // Apply theme colors
    if (preferences.appTheme === "warm") {
      root.style.setProperty("--color-primary", "#800000");
      root.style.setProperty("--color-secondary", "#D4AF37");
      root.style.setProperty("--color-accent", "#FFFAF0");
    } else if (preferences.appTheme === "classic") {
      root.style.setProperty("--color-primary", "#1f2937");
      root.style.setProperty("--color-secondary", "#6b7280");
      root.style.setProperty("--color-accent", "#f3f4f6");
    } else {
      // Default blue theme
      root.style.setProperty("--color-primary", "#1e40af");
      root.style.setProperty("--color-secondary", "#3b82f6");
      root.style.setProperty("--color-accent", "#dbeafe");
    }
  }, [preferences.darkMode, preferences.appTheme]);

  const updatePreference = (key: string, value: any) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const toggleSetting = (key: string) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  return (
    <ThemeContext.Provider
      value={{ preferences, updatePreference, toggleSetting }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
