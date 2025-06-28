import Layout from "@/components/Layout";
import { Flower, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Spiritual() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-emotion-calm/10 p-6">
        <div className="flex items-center space-x-4 mb-8 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent/50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">
            Spiritual Mode
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 mt-16">
          <div className="w-24 h-24 bg-gradient-to-br from-emotion-spiritual to-lotus-pink rounded-full flex items-center justify-center">
            <Flower className="w-12 h-12 text-white" />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-lg font-semibold text-foreground">
              Spiritual Journey
            </h2>
            <p className="text-muted-foreground text-sm">
              Prayers, traditions, and spiritual guidance
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
