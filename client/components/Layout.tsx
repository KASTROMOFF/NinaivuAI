import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";

interface LayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
}

export default function Layout({
  children,
  showNavigation = true,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-background font-primary">
      <main className={`${showNavigation ? "pb-20" : ""} min-h-screen`}>
        {children}
      </main>
      {showNavigation && <BottomNavigation />}
    </div>
  );
}
