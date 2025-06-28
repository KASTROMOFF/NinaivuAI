import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Vault from "./pages/Vault";
import Reminders from "./pages/Reminders";
import Settings from "./pages/Settings";
import Ask from "./pages/Ask";
import Needs from "./pages/Needs";
import Family from "./pages/Family";
import Journal from "./pages/Journal";
import Spiritual from "./pages/Spiritual";
import Storybook from "./pages/Storybook";
import ReminderSettings from "./pages/ReminderSettings";
import CreateReminder from "./pages/CreateReminder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/record" element={<Record />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/needs" element={<Needs />} />
            <Route path="/family" element={<Family />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/spiritual" element={<Spiritual />} />
            <Route path="/storybook" element={<Storybook />} />
            <Route path="/reminder-settings" element={<ReminderSettings />} />
            <Route path="/create-reminder" element={<CreateReminder />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
