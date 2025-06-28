import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has completed onboarding (this would be stored in localStorage/cookies later)
    const hasCompletedOnboarding = localStorage.getItem("ninaivuai_onboarding");

    if (hasCompletedOnboarding) {
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/welcome", { replace: true });
    }
  }, [navigate]);

  // Show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/5">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto animate-pulse">
          <span className="text-2xl">🧠</span>
        </div>
        <h1 className="text-xl font-semibold text-foreground">NinaivuAI</h1>
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
