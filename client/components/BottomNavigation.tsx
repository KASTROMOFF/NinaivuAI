import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

interface NavigationItem {
  id: string;
  route: string;
  label: string;
  tamilLabel: string;
}

const navigationItems: NavigationItem[] = [
  {
    id: "home",
    route: "/dashboard",
    label: "Home",
    tamilLabel: "வீடு",
  },
  {
    id: "record",
    route: "/record",
    label: "Record",
    tamilLabel: "பதிவு",
  },
  {
    id: "storybook",
    route: "/storybook",
    label: "Stories",
    tamilLabel: "கதைகள்",
  },
  {
    id: "reminders",
    route: "/reminders",
    label: "Reminders",
    tamilLabel: "நினைவூட்டல்",
  },
  {
    id: "settings",
    route: "/settings",
    label: "Settings",
    tamilLabel: "அமைப்புகள்",
  },
];

export default function BottomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { preferences } = useTheme();

  const getIconSvg = (itemId: string, isActive: boolean) => {
    const strokeColor = isActive
      ? "#ffffff"
      : preferences.darkMode
        ? "#9ca3af"
        : "#6b7280";
    const strokeWidth = isActive ? "3" : "2.5";

    const iconProps = {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    switch (itemId) {
      case "home":
        return (
          <svg {...iconProps}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
        );
      case "record":
        return (
          <svg {...iconProps}>
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <line x1="8" x2="16" y1="22" y2="22" />
          </svg>
        );
      case "storybook":
        return (
          <svg {...iconProps}>
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            <path d="M8 7h8" />
            <path d="M8 11h6" />
          </svg>
        );
      case "reminders":
        return (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
          </svg>
        );
      case "settings":
        return (
          <svg {...iconProps}>
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
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
    <div className="fixed bottom-0 left-0 right-0 z-40">
      {/* Curved Background */}
      <div
        className="relative h-24"
        style={{
          background: preferences.darkMode
            ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
          backdropFilter: "blur(20px)",
          borderTop: `1px solid ${preferences.darkMode ? "rgba(55, 65, 81, 0.3)" : "rgba(226, 232, 240, 0.3)"}`,
        }}
      >
        {/* Curved Top Border */}
        <div
          className="absolute top-0 left-0 right-0 h-6"
          style={{
            background: preferences.darkMode
              ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)",
            borderRadius: "24px 24px 0 0",
            backdropFilter: "blur(20px)",
          }}
        />

        {/* Navigation Items */}
        <div className="flex items-center justify-around h-full pt-2 px-6">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.route;

            return (
              <button
                key={item.id}
                onClick={() => navigate(item.route)}
                className="flex flex-col items-center space-y-1 transition-all duration-300 group relative"
              >
                {/* Active Background */}
                {isActive && (
                  <div
                    className="absolute -inset-3 rounded-2xl transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
                      boxShadow: "0 8px 32px rgba(30, 64, 175, 0.4)",
                    }}
                  />
                )}

                {/* Icon Container */}
                <div
                  className={`relative z-10 p-2 rounded-xl transition-all duration-300 ${
                    isActive ? "transform scale-110" : "group-hover:scale-105"
                  }`}
                >
                  {getIconSvg(item.id, isActive)}
                </div>

                {/* Label */}
                <span
                  className={`relative z-10 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white font-bold"
                      : preferences.darkMode
                        ? "text-gray-400"
                        : "text-gray-600"
                  }`}
                >
                  {preferences.language === "english"
                    ? item.label
                    : item.tamilLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
